// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
    integrations: [react()],
    redirects: {
        "/": "/fr",
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
