import eslintPluginAstro from 'eslint-plugin-astro';
import tsEslint from 'typescript-eslint';
// @ts-ignore
import eslint from "@eslint/js";

export default tsEslint.config(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
    // @ts-ignore
    ...eslintPluginAstro.configs['flat/recommended'],
    {
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
                ecmaVersion: 'latest',
                project: true,
                sourceType: 'module',
            },
        },
        rules: {
            "@typescript-eslint/ban-ts-comment": "off",
            'sort-keys': ['error', 'asc', { caseSensitive: true, minKeys: 2, natural: true }],
        },
    }
)
