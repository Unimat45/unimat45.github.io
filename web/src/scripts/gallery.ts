// Project galleries: click a screenshot to see it full size; click anywhere (or press Esc) to close.
for (const gallery of document.querySelectorAll<HTMLElement>("[data-gallery]")) {
    const dialog = gallery.querySelector("dialog");
    const img = dialog?.querySelector("img");
    if (!dialog || !img) continue;

    for (const button of gallery.querySelectorAll<HTMLButtonElement>("button.zoom")) {
        button.addEventListener("click", () => {
            img.src = button.dataset.full ?? "";
            img.alt = button.dataset.alt ?? "";
            dialog.showModal();
        });
    }
    dialog.addEventListener("click", () => dialog.close());
}
