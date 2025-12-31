import z from "zod";

export const contactParser = z.object({
    name: z.string(),
    email: z.email({
        pattern:
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i,
    }),
    message: z.string(),
});

export type Contact = z.infer<typeof contactParser>;
