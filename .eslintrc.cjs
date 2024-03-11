module.exports = {
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['*.cjs'],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:astro/recommended",
        "plugin:prettier/recommended"
    ],
    overrides: [
        {
            files: ["*.astro"],
            parser: "astro-eslint-parser",
            parserOptions: {
                extraFileExtensions: [".astro"],
                parser: "@typescript-eslint/parser",
            },
            rules: {},
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    root: true,
    rules: {
        "sort-keys": ["error", "asc", {"caseSensitive": true, minKeys: 2, "natural": true}]
    },
};
