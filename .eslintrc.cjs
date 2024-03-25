module.exports = {
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:astro/recommended",
    ],
    ignorePatterns: [],
    overrides: [
        {
            files: ["*.astro"],
            parser: "astro-eslint-parser",
            parserOptions: {
                extraFileExtensions: [".astro"],
                parser: "@typescript-eslint/parser",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    root: true,
    rules: {
        "sort-keys": ["error", "asc", { caseSensitive: true, minKeys: 2, natural: true }],
    },
}
