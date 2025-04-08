import { dirname } from "path";
import { fileURLToPath } from "url";
import tseslint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default tseslint.config(
    {
        ignores: [".next", "src/components/ui", "public"],
    },
    ...compat.extends("next/core-web-vitals"),
    {
        files: ["**/*.ts", "**/*.tsx"],
        extends: [
            ...tseslint.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
        ],
        "rules": {
            "arrow-spacing": [
                "warn",
                {
                    "before": true,
                    "after": true
                }
            ],
            "brace-style": [
                "error",
                "stroustrup",
                {
                    "allowSingleLine": true
                }
            ],
            "comma-dangle": [
                "error",
                "always-multiline"
            ],
            "comma-spacing": "error",
            "comma-style": "error",
            "curly": [
                "error",
                "multi-line",
                "consistent"
            ],
            "dot-location": [
                "error",
                "property"
            ],
            "handle-callback-err": "off",
            "indent": [
                "error",
                4
            ],
            "keyword-spacing": "error",
            "max-nested-callbacks": [
                "error",
                {
                    "max": 4
                }
            ],
            "max-statements-per-line": [
                "error",
                {
                    "max": 2
                }
            ],
            "no-console": "off",
            "no-empty-function": "error",
            "no-floating-decimal": "error",
            "no-inline-comments": "error",
            "no-lonely-if": "error",
            "no-multi-spaces": "error",
            "no-multiple-empty-lines": [
                "error",
                {
                    "max": 2,
                    "maxEOF": 1,
                    "maxBOF": 0
                }
            ],
            "no-shadow": [
                "error",
                {
                    "allow": [
                        "err",
                        "resolve",
                        "reject"
                    ]
                }
            ],
            "no-trailing-spaces": [
                "error"
            ],
            "no-var": "error",
            "object-curly-spacing": [
                "error",
                "always"
            ],
            "prefer-const": "error",
            "quotes": [
                "error",
                "double"
            ],
            "semi": [
                "error",
                "always"
            ],
            "space-before-blocks": "error",
            "space-before-function-paren": [
                "error",
                {
                    "anonymous": "never",
                    "named": "never",
                    "asyncArrow": "always"
                }
            ],
            "space-in-parens": "error",
            "space-infix-ops": "error",
            "space-unary-ops": "error",
            "spaced-comment": "error",
            "yoda": "error"
        }
    },
    {
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
    },
);
