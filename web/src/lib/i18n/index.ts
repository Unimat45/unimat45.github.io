import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import "../../../@types/i18n.d.ts";
import { resources } from "./resources.ts";

export type Pages = keyof (typeof resources)["fr"]["translation"];

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

/** Narrows a route param to a supported locale, falling back to French. */
export function toLocale(value?: string): Locale {
    return value === "en" ? "en" : "fr";
}

i18next.use(initReactI18next).init({
    resources,
});

export function initI18n(params: Record<string, string | undefined> = {}) {
    const { locale } = params;

    if (locale === "fr" || locale === "en") {
        i18next.changeLanguage(locale);
    }

    return i18next;
}
