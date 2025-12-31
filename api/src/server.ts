import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { serve } from "bun";
import { cors } from "hono/cors";
import { secureHeaders } from "hono/secure-headers";
import { Hono } from "hono/tiny";

import { env } from "./env";
import { routes } from "./routes";
import { createContext } from "./trpc";

const app = new Hono();

app.use(secureHeaders());

// 1. Define the CORS policy for the path
app.use(
    "/*",
    cors({
        origin: ["http://localhost:4321", "https://unimat45.github.io"],
    }),
);

// 2. Define the handler separately
app.all("/*", (c) =>
    fetchRequestHandler({
        // Using process.env instead of `env`, because Bun will inline process.env at build time.
        endpoint: process.env.NODE_ENV === "production" ? "/api/portfolio" : "/",
        req: c.req.raw,
        router: routes,
        createContext,
    }),
);
serve({
    fetch: app.fetch,
    port: env.PORT,
});

// eslint-disable-next-line no-console
console.log(`Server listening on http://localhost:${env.PORT}`);
