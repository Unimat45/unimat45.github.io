import type { ImageMetadata } from "astro";

/**
 * Screenshots for each project, in src/assets/projects/<slug>/. Kept apart from projects.ts so only Astro
 * pages import them: astro:assets resizes them at build time, and client-side code never bundles the originals.
 */

type Text = { fr: string; en: string };

export type Shot = {
    image: ImageMetadata;
    /** "screen": a desktop or window capture; "phone": a portrait phone screen, shown side by side with the others. */
    kind: "screen" | "phone";
    caption: Text;
    /** Pixel density of the capture (2 for a 2x screenshot), so it is never shown larger than it was taken. */
    density?: number;
};

export type ProjectMedia = {
    shots: Shot[];
    /** Source of the 16:10 thumbnail (cards and homepage); defaults to the first shot. */
    thumb?: ImageMetadata;
    /** object-position of the thumbnail crop. */
    focus?: string;
};

const files = import.meta.glob<ImageMetadata>("./projects/*/*.webp", { eager: true, import: "default" });

function img(slug: string, name: string): ImageMetadata {
    const file = files[`./projects/${slug}/${name}.webp`];
    if (!file) throw new Error(`Missing screenshot: src/assets/projects/${slug}/${name}.webp`);
    return file;
}

const screen = (slug: string, name: string, caption: Text, density?: number): Shot => ({
    image: img(slug, name),
    kind: "screen",
    caption,
    density,
});
const phone = (slug: string, name: string, caption: Text): Shot => ({
    image: img(slug, name),
    kind: "phone",
    caption,
});

export const media: Record<string, ProjectMedia> = {
    mcsd: {
        shots: [
            screen(
                "mcsd",
                "server",
                {
                    fr: "Un serveur Paper en marche : joueurs, CPU, mémoire et temps de fonctionnement, avec la console en direct et une ligne de commande.",
                    en: "A running Paper server: players, CPU, memory and uptime, with the live console and a command line.",
                },
                2,
            ),
            phone("mcsd", "phone-dashboard", { fr: "Les serveurs", en: "Servers" }),
            phone("mcsd", "phone-server", { fr: "Un serveur", en: "A server" }),
            screen(
                "mcsd",
                "dashboard",
                {
                    fr: "Le tableau de bord : chaque serveur avec son état, ses joueurs, son CPU et sa mémoire.",
                    en: "The dashboard: each server with its state, players, CPU and memory.",
                },
                2,
            ),
            screen(
                "mcsd",
                "new",
                {
                    fr: "Créer un serveur : Paper, Vanilla, Fabric ou son propre jar. mcsd télécharge le jar et le bon Java.",
                    en: "Creating a server: Paper, Vanilla, Fabric or your own jar. mcsd downloads the jar and the right Java.",
                },
                2,
            ),
        ],
    },
    coordonates_plugin: {
        shots: [
            screen("coordonates_plugin", "list", {
                fr: "Sauvegarder un endroit avec /save-coord, puis les retrouver tous avec /show-coord.",
                en: "Saving a spot with /save-coord, then listing them all with /show-coord.",
            }),
            screen("coordonates_plugin", "save", {
                fr: "/save-coord village : la position et le monde sont gardés sous ce nom.",
                en: "/save-coord village: the position and the world are kept under that name.",
            }),
            screen("coordonates_plugin", "share", {
                fr: "/coord annonce sa position à tout le serveur.",
                en: "/coord broadcasts your position to the whole server.",
            }),
            screen("coordonates_plugin", "overwrite", {
                fr: "Réutiliser un nom demande une confirmation : relancer la commande dans les 30 secondes remplace l'endroit.",
                en: "Reusing a name asks first: running the command again within 30 seconds replaces the spot.",
            }),
            screen("coordonates_plugin", "delete", {
                fr: "/delete-coord retire un endroit de la liste.",
                en: "/delete-coord removes a spot from the list.",
            }),
        ],
        /* Keep the chat, at the bottom left. */
        focus: "left bottom",
    },
    orange_auth: {
        shots: [
            screen(
                "orange_auth",
                "setup",
                {
                    fr: "La configuration : un fournisseur pour se connecter, une stratégie pour la session (ici un JWT).",
                    en: "Setup: a provider to log in, a strategy for the session (a JWT here).",
                },
                2,
            ),
            screen(
                "orange_auth",
                "express",
                {
                    fr: "Branché sur Express par un adaptateur, avec getSession pour lire la session dans une route.",
                    en: "Plugged into Express through an adapter, with getSession to read the session in a route.",
                },
                2,
            ),
        ],
        /* Keep the start of the lines. */
        focus: "left top",
    },
    pong: {
        shots: [
            screen("pong", "game", {
                fr: "Un échange contre l'ordinateur, directement dans le navigateur.",
                en: "A rally against the computer, right in the browser.",
            }),
        ],
        /* Letterboxed rather than cropped: the paddles hug the edges. */
        thumb: img("pong", "thumb"),
    },
    crosshair: {
        shots: [
            screen("crosshair", "variants", {
                fr: "Le réticule au centre de l'écran, par-dessus tout le reste : sa couleur par défaut, puis en vert et en cyan, réglés dans config.lua (agrandi 8×).",
                en: "The crosshair at the centre of the screen, on top of everything else: its default colour, then green and cyan, set in config.lua (zoomed 8×).",
            }),
        ],
        thumb: img("crosshair", "thumb"),
    },
    rcon: {
        shots: [
            screen("rcon", "session", {
                fr: "L'interface Qt, connectée à un serveur Paper : chaque commande reçoit la réponse du serveur.",
                en: "The Qt interface, connected to a Paper server: each command gets the server's reply.",
            }),
        ],
        /* Crop from the right: the console lines start at the left edge. */
        focus: "left center",
    },
    pport: {
        shots: [
            phone("pport", "phone-dashboard", {
                fr: "Un interrupteur par broche.",
                en: "One switch per pin.",
            }),
            phone("pport", "phone-schedule", {
                fr: "La piscine : allumée à 8 h, éteinte à 22 h 30, de juin à la mi-septembre.",
                en: "The pool: on at 8:00, off at 22:30, from June to mid-September.",
            }),
            phone("pport", "phone-dashboard-dark", { fr: "Le thème sombre.", en: "The dark theme." }),
        ],
        thumb: img("pport", "thumb"),
    },
};

export function mediaFor(slug: string): ProjectMedia {
    const m = media[slug];
    if (!m) throw new Error(`No screenshots listed for "${slug}" in src/assets/media.ts`);
    return m;
}

/** The 16:10 thumbnail's source and crop for the cards and the homepage. */
export function thumbFor(slug: string): { image: ImageMetadata; focus: string } {
    const m = mediaFor(slug);
    return { image: m.thumb ?? m.shots[0]!.image, focus: m.focus ?? "center" };
}
