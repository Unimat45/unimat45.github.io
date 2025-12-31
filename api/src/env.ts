import { createEnv } from "@t3-oss/env-core";
import z from "zod";

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["production", "development"]).default("development"),
        PORT: z.int().default(3000),
        DATABASE_URL: z.url(),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.PORT,
        DATABASE_URL: process.env.DATABASE_URL,
    },
});
