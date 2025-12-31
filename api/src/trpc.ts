import { initTRPC } from "@trpc/server";
import { SQL } from "bun";
import SuperJSON from "superjson";

import { env } from "./env";

const db = new SQL(env.DATABASE_URL);

export const createContext = () => ({
    db,
});

type Context = ReturnType<typeof createContext>;

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().create({
    transformer: SuperJSON,
});

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;
