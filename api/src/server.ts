import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";

import { env } from "./env";
import { routes } from "./routes";
import { createContext } from "./trpc";

const server = createHTTPServer({
    middleware: cors({
        origin: ["http://localhost:4321", "https://unimat45.github.io"],
    }),
    router: routes,
    createContext,
});

server.listen(env.PORT, undefined, undefined, () => {
    // eslint-disable-next-line no-console
    console.log(`API started on port ${env.PORT}`);
});
