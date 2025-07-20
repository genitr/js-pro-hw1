import js from "@eslint/js";
import globals from "globals";


export default [
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: {
            js,
        },
        rules: {
            ...js.configs.recommended.rules,
        },
    },
    {
        files: ["**/*.{js,mjs,cjs}"],
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
    },
];
