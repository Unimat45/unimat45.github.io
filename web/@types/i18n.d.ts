import "i18next";

import type { resources } from "../src/lib/i18n/resources";

declare module "i18next" {
    interface CustomTypeOptions {
        enableSelector: true;
        resources: (typeof resources)["fr"];
    }
}
