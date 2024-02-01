module.exports = {
    env: {
        browser: false,
        node: true,
        commonjs: true,
        es2021: true,
        jest: true,
    },
    extends: "eslint:recommended",
    overrides: [
        {
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {},
};
