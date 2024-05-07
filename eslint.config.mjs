import eslintPluginAstro from 'eslint-plugin-astro';
import tsEslint from 'typescript-eslint';
import eslint from "@eslint/js";

export default tsEslint.config(
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
    ...eslintPluginAstro.configs['flat/recommended'],
    {
        ignores: [".vscode/", "node_modules/", "dist/", "public/", ".astro/"],
        languageOptions: {
            globals: {
                browser: true,
                es2022: true,
                node: true,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: "latest",
                project: true,
                sourceType: "module",
            },
        },
        rules: {
            "@typescript-eslint/ban-ts-comment": "off",
            "no-console": ["error", { "allow": ["warn", "error"] }],
            "no-extra-semi": "off",
            "padding-line-between-statements": [
                "error",
                { blankLine: "always", next: "return", prev: "*" },
            ],
            "sort-keys": ["error", "asc", { caseSensitive: true, minKeys: 2, natural: true }],
        },
    }
)
