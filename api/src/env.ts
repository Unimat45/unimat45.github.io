import { createEnv } from "@t3-oss/env-core";
import z from "zod";

export const env = createEnv({
    server: {
        PORT: z.int().default(3000),
        DATABASE_URL: z.url(),
    },
    runtimeEnv: Bun.env,
});
