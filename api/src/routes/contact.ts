import { env } from "../env";
import { contactParser } from "../models/contact";
import { publicProcedure, router } from "../trpc";

export const contact = router({
    form: publicProcedure.input(contactParser).mutation(async ({ ctx, input }) => {
        await ctx.db`INSERT INTO "messages" ${ctx.db(input)}`;

        await fetch("https://api.smtp2go.com/v3/email/send", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "X-Smtp2go-api-key": env.SMTP2GO_KEY,
            },
            body: JSON.stringify({
                sender: env.SENDER,
                to: [env.RECEIVER],
                subject: "New Portfolio Submissions",
                text_body: `Hello,\n\nNew portfolio message:\n\n${input.name} <${input.email}>\n\n${input.message}`,
            }),
        }).catch(() => {
            /* Empty body */
        });
    }),
});
