import { contactParser } from "../models/contact";
import { publicProcedure, router } from "../trpc";

export const contact = router({
    form: publicProcedure.input(contactParser).mutation(async ({ ctx, input }) => {
        await ctx.db`INSERT INTO "messages" ${ctx.db(input)}`;
    }),
});
