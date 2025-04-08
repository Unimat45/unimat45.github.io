import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json" assert { type: "json" };
import fr from "./fr.json" assert { type: "json" };

export type Locale = "en" | "fr";

void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en,
            fr,
        },
        supportedLngs: [ "fr", "en" ],
        fallbackLng: "fr",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
