import { z } from "zod";
import { applyIndex } from "~/lib/utils";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "~/components/ui/form";

type ContactFormProps = unknown;

const ContactForm: React.FC<ContactFormProps> = () => {
    const { t } = useTranslation("contact");

    const formSchema = z.object({
        name: z.string().nonempty(t("nameRequired")),
        courriel: z.string().nonempty(t("emailRequired")).email(t("emailFormat")),
        message: z
            .string()
            .nonempty(t("msgRequired"))
            .min(8, t("msgMin"))
            .max(512, t("msgMax")),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            courriel: "",
            message: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const res = await fetch("https://pfk.ddns.net/api/sendmail", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        }).catch(() => ({ ok: false }));

        if (res.ok) {
            // Envoi notification
            toast("Message envoyé", { type: "success" });
            form.reset();
        }
        else {
            // Envoi notification erreur
            toast("Erreur lors de l'envoi du message", { type: "error" });
        }
    };

    const {
        message: { length: msgLength },
    } = form.watch();

    return (
        <>
            <ToastContainer />
            <Form {...form}>
                {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                <form onSubmit={form.handleSubmit(onSubmit)}
                    style={applyIndex(1)}
                    className="space-y-4 md:max-w-2/3 mx-auto popup"
                >
                    <h1 className="text-3xl md:text-4xl">{t("sendTitle")}</h1>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder={t("name") + "*"}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="courriel"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder={t("email") + "*"}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        maxLength={512}
                                        className="resize-none"
                                        placeholder={t("msg") + "*"}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-between">
                        <Button type="submit" className="cursor-pointer">
                            {t("send")}
                        </Button>
                        {msgLength > 0 && <span className="text-sm text-end">
                            {`${msgLength} / 512`}
                        </span>}
                    </div>
                </form>
            </Form>
        </>
    );
};

export default ContactForm;
