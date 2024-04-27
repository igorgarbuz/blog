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
    ignorePatterns: ["dist/", "node_modules/"],
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
        "no-console": ["error", { "allow": ["warn", "error"] }],
        "no-extra-semi": "off",
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", next: "return", prev: "*" },
          ],
        "sort-keys": ["error", "asc", { caseSensitive: true, minKeys: 2, natural: true }],
    },
}
