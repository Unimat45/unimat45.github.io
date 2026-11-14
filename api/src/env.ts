import { createEnv } from "@t3-oss/env-core";
import z from "zod";

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["production", "development"]).default("development"),
        // Environment variables are always strings: convert before checking.
        PORT: z.coerce.number().int().default(3000),
        DATABASE_URL: z.url(),
        SMTP2GO_KEY: z.string(),
        SENDER: z.string(),
        RECEIVER: z.string(),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.PORT,
        DATABASE_URL: process.env.DATABASE_URL,
        SMTP2GO_KEY: process.env.SMTP2GO_KEY,
        SENDER: process.env.SENDER,
        RECEIVER: process.env.RECEIVER,
    },
});
