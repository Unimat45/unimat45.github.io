/*
 * Site-wide behaviour: the parallel port (pin 2 is the light/dark switch), the copper trace that
 * follows the scroll, reveal-on-entry, and the header border once the page has scrolled.
 */

const root = document.documentElement;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- The parallel port ---------- */

const hour = new Date().getHours();
const pins: Record<number, boolean> = {
    2: root.dataset.theme !== "dark",
    3: hour >= 7 && hour < 21,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
};

const panel = document.querySelector<HTMLElement>("[data-pport]");
const log = document.querySelector<HTMLElement>("[data-pport-log]");
const controls = [...document.querySelectorAll<HTMLElement>("[data-pin]")];

function writeLog(pin: number) {
    if (!log) return;
    const line = document.createElement("p");
    line.textContent = `SET PIN ${pin} ${pins[pin] ? "HIGH" : "LOW"}`;
    log.append(line);
    while (log.children.length > 3) log.firstElementChild?.remove();
}

function render() {
    for (const control of controls) {
        control.setAttribute("aria-checked", String(pins[Number(control.dataset.pin)]));
    }
    if (!panel) return;
    const lights = panel.querySelector('[data-pport-state="2"]');
    const pool = panel.querySelector('[data-pport-state="3"]');
    if (lights) lights.textContent = (pins[2] ? panel.dataset.lightsOn : panel.dataset.lightsOff) ?? "";
    if (pool) pool.textContent = (pins[3] ? panel.dataset.poolOn : panel.dataset.poolOff) ?? "";
}

/* Pin 2 is the lights: flipping it switches the theme, spreading from wherever it was flipped. */
function setLights(origin: { x: number; y: number }) {
    let applied = false;
    const apply = () => {
        if (applied) return;
        applied = true;
        root.dataset.theme = pins[2] ? "light" : "dark";
        render();
    };

    try {
        localStorage.setItem("md-lights", pins[2] ? "light" : "dark");
    }
    catch {
        // Storage can be blocked; the theme still applies for this visit.
    }

    if (!document.startViewTransition || reduceMotion) {
        apply();
        return;
    }

    const { x, y } = origin;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document
        .startViewTransition(apply)
        .ready.then(() => {
            root.animate(
                { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
                {
                    duration: 620,
                    easing: "cubic-bezier(0.3, 0.6, 0.2, 1)",
                    pseudoElement: "::view-transition-new(root)",
                },
            );
        })
        .catch(apply);

    // Never leave the switch out of sync if the browser skips the transition.
    setTimeout(apply, 300);
}

for (const control of controls) {
    control.addEventListener("click", () => {
        const pin = Number(control.dataset.pin);
        const box = (control.querySelector(".switch") ?? control).getBoundingClientRect();
        pins[pin] = !pins[pin];
        writeLog(pin);
        if (pin === 2) setLights({ x: box.left + box.width / 2, y: box.top + box.height / 2 });
        else render();
    });
}

render();
writeLog(2);
writeLog(3);

/* ---------- Years of experience, kept current between builds ---------- */

for (const el of document.querySelectorAll<HTMLElement>("[data-years-since]")) {
    const since = new Date(el.dataset.yearsSince ?? "").getTime();
    if (!Number.isNaN(since)) el.textContent = `${Math.floor((Date.now() - since) / 31536000000)}+`;
}

/* ---------- The trace follows the scroll ---------- */

const header = document.querySelector<HTMLElement>("[data-site-header]");
const segments = [...document.querySelectorAll<HTMLElement>(".seg")];
const vias = [...document.querySelectorAll<HTMLElement>(".via")];
const clamp = (value: number) => Math.min(1, Math.max(0, value));
let queued = false;

function trace() {
    queued = false;
    const height = innerHeight;
    const remaining = root.scrollHeight - scrollY - height;
    // The reading line sits at 62% of the viewport and slides to the bottom edge as the page ends.
    const ratio = remaining < 260 ? 1 - 0.38 * (Math.max(0, remaining) / 260) : 0.62;
    const line = reduceMotion ? Infinity : height * ratio;

    for (const segment of segments) {
        const box = segment.getBoundingClientRect();
        segment.style.setProperty("--p", clamp((line - box.top) / box.height).toFixed(4));
    }
    for (const via of vias) {
        const box = via.getBoundingClientRect();
        via.classList.toggle("on", box.top + box.height / 2 <= line);
    }
    header?.classList.toggle("scrolled", scrollY > 8);
}

function queueTrace() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(trace);
}

addEventListener("scroll", queueTrace, { passive: true });
addEventListener("resize", queueTrace);
trace();

/* ---------- Reveal on entry ---------- */

const seen = new IntersectionObserver(
    (entries) => {
        for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("in");
            seen.unobserve(entry.target);
        }
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
);

for (const el of document.querySelectorAll("[data-reveal]")) seen.observe(el);
