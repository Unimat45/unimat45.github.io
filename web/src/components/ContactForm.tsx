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
            <div className="rounded-xl border border-gray-700/50 bg-gray-800/30 p-8 transition-all duration-300 hover:border-cyan-500/50">
                <h2 className="mb-6 text-2xl font-bold text-white">{t(($) => $.contact.sendMsg)}</h2>

                <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                            {t(($) => $.contact.yourName)}
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                            placeholder="John Doe"
                            {...register("name", {
                                required: t(($) => $.contact.requiredErr, { field: t(($) => $.contact.yourName) }),
                            })}
                        />
                        {errors.name?.message && (
                            <span className="ml-8 text-sm text-red-700">{errors.name?.message}</span>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                            {t(($) => $.contact.yourEmail)}
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
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
                            <span className="ml-8 text-sm text-red-700">{errors.email?.message}</span>
                        )}
                    </div>

                    <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                            {t(($) => $.contact.yourMessage)}
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full resize-none rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                            placeholder={t(($) => $.contact.yourMessagePlaceholder)}
                            {...register("message", {
                                required: t(($) => $.contact.requiredErr, { field: t(($) => $.contact.yourMessage) }),
                            })}
                        />
                        {errors.message?.message && (
                            <span className="ml-8 text-sm text-red-700">{errors.message?.message}</span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="flex w-full cursor-pointer items-center justify-center space-x-2 rounded-lg bg-linear-to-r from-cyan-500 to-emerald-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                    >
                        <Send size={20} />
                        <span>{t(($) => $.contact.send)}</span>
                    </button>
                    {state && (
                        <span className="text-sm">
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
