import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import "../../../@types/i18n.d.ts";
import { resources } from "./resources.ts";

export type Pages = keyof (typeof resources)["fr"]["translation"];

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
