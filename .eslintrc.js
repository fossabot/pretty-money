module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["plugin:@typescript-eslint/recommended"],
    plugins: ["@typescript-eslint"],
    rules: {
        "array-bracket-spacing": 2,
        "brace-style": [2, "1tbs"],
        "camelcase": 2,
        "comma-spacing": 2,
        "comma-style": 2,
        "computed-property-spacing": 2,
        "consistent-return": 2,
        "curly": 2,
        "dot-location": [2, "property"],
        "eqeqeq": [2, "smart"],
        "func-call-spacing": 2,
        "func-names": [2, "as-needed"],
        "guard-for-in": 1,
        "key-spacing": 2,
        "keyword-spacing": 2,
        "linebreak-style": [1, "unix"],
        "no-console": 0,
        "no-delete-var": 2,
        "no-else-return": 2,
        "no-empty": 2,
        "no-mixed-operators": 2,
        "no-multi-spaces": 2,
        "no-trailing-spaces": 0,
        "no-var": 2,
        "object-curly-spacing": [2, "always"],
        "operator-linebreak": [2, "before", { overrides: { "=": "after" } }],
        "quote-props": [2, "consistent-as-needed"],
        "quotes": [2, "double", { allowTemplateLiterals: true }],
        "semi": [2, "always"],
        "semi-spacing": 2,
        "space-before-blocks": 2,
        "space-in-parens": 2,
        "spaced-comment": 2,
        "yoda": 2
    }
};
