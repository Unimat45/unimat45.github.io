import { useMutation } from "@tanstack/react-query";
import i18next from "i18next";
import { Send } from "lucide-react";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { initI18n } from "../lib/i18n";
import { useTRPC } from "../lib/trpc";
import { TRPCProvider } from "../lib/trpc";

type FormPayload = { name: string; email: string; message: string };
type ContactFormProps = { locale: string };

const ContactForm: React.FC<ContactFormProps> = ({ locale }) => {
    const [state, setState] = useState<"sent" | "error" | null>(null);
    const { t } = useTranslation();
    const trpc = useTRPC();

    const { mutateAsync } = useMutation(trpc.contact.form.mutationOptions());

    useMemo(() => {
        if (!i18next.isInitialized) {
            initI18n();
        }
        else if (i18next.language !== locale) {
            i18next.changeLanguage(locale);
        }
    }, [locale]);

    const {
        register,
        handleSubmit,
        reset: formReset,
        formState: { errors },
    } = useForm<FormPayload>();

    const onSubmit = async (data: FormPayload) => {
        try {
            await mutateAsync(data);
            setState("sent");
            formReset();
        }
        catch {
            setState("error");
        }
    };

    const onError = () => {
        setState(null);
    };

    return (
        <>
            <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
                <h2 className="mb-6 text-2xl font-bold [font-stretch:90%]">{t(($) => $.contact.sendMsg)}</h2>

                <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-2">
                            {t(($) => $.contact.yourName)}
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink placeholder:text-ink-3 transition-colors focus:border-accent-strong focus:ring-2 focus:ring-accent-strong/20 focus:outline-none"
                            placeholder="John Doe"
                            {...register("name", {
                                required: t(($) => $.contact.requiredErr, { field: t(($) => $.contact.yourName) }),
                            })}
                        />
                        {errors.name?.message && (
                            <span className="mt-1.5 block text-sm text-red-700 dark:text-red-400">
                                {errors.name?.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-2">
                            {t(($) => $.contact.yourEmail)}
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink placeholder:text-ink-3 transition-colors focus:border-accent-strong focus:ring-2 focus:ring-accent-strong/20 focus:outline-none"
                            placeholder="john@example.com"
                            {...register("email", {
                                required: t(($) => $.contact.requiredErr, { field: t(($) => $.contact.yourEmail) }),
                                pattern: {
                                    value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i,
                                    message: t(($) => $.contact.formatErr, { field: t(($) => $.contact.yourEmail) }),
                                },
                            })}
                        />
                        {errors.email?.message && (
                            <span className="mt-1.5 block text-sm text-red-700 dark:text-red-400">
                                {errors.email?.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-2">
                            {t(($) => $.contact.yourMessage)}
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full resize-none rounded-xl border border-line bg-bg px-4 py-3 text-ink placeholder:text-ink-3 transition-colors focus:border-accent-strong focus:ring-2 focus:ring-accent-strong/20 focus:outline-none"
                            placeholder={t(($) => $.contact.yourMessagePlaceholder)}
                            {...register("message", {
                                required: t(($) => $.contact.requiredErr, { field: t(($) => $.contact.yourMessage) }),
                            })}
                        />
                        {errors.message?.message && (
                            <span className="mt-1.5 block text-sm text-red-700 dark:text-red-400">
                                {errors.message?.message}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="btn w-full cursor-pointer justify-center disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <span>{t(($) => $.contact.send)}</span>
                        <Send aria-hidden="true" />
                    </button>
                    {state && (
                        <span className="block text-sm text-ink-2" role="status">
                            {state === "sent" ? t(($) => $.contact.sendSuccess) : t(($) => $.contact.sendErr)}
                        </span>
                    )}
                </form>
            </div>
        </>
    );
};

const Wrapper: React.FC<ContactFormProps> = (props) => (
    <TRPCProvider>
        <ContactForm {...props} />
    </TRPCProvider>
);

export { Wrapper as ContactForm };
