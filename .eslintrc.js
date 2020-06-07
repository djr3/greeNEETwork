module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    // "plugin:node/recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/recommended",
  ],
  globals: {
    // Avoid using Atomics & SharedArrayBuffer because of major browser vulnerability disfruted by Meltdown & Spectre
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    React: "writable",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "jest",
    "jsx-a11y",
    // "node",
    "prettier",
    "react",
    "react-hooks",
    "@typescript-eslint",
  ],
  rules: {
    // eslint-plugin-react
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off", // Disabled as NextJS doesn't require React to be in scope
    "react/prop-types": "off", // Disabled as TypeScript will check the types
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link href={ url } />
      "Hyperlink",
      { name: "Link", linkAttribute: "href" },
    ],
  },
};
