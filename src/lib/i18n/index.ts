import i18next from "i18next";

import "../../../@types/i18n.d.ts";
import { resources } from "./resources.ts";

export type Pages = keyof (typeof resources)["fr"]["translation"];

export function initI18n(params: Record<string, string | undefined>) {
    const { locale } = params;

    if (locale !== "fr" && locale !== "en") {
        throw new Error("Unrecognized locale");
    }

    return i18next.init({
        lng: locale,
        resources,
    });
}
