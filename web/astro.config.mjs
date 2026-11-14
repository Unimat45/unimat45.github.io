// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

export default defineConfig({
    env: {
        schema: {
            /*
             * Where the contact form's API lives, inlined into the client bundle at build time (so not a secret).
             * Defaults to the local API; the deploy workflow refuses to build without the repository variable.
             */
            PUBLIC_API_URL: envField.string({
                context: "client",
                access: "public",
                url: true,
                default: "http://localhost:3000",
            }),
        },
    },
    integrations: [react()],
    redirects: {
        "/": "/fr",
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
