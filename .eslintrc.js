module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "prettier",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: [],
  // add your custom rules here
  rules: {}
};
