module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  plugins: ["jsdoc"],
  rules: {
    "jsdoc/require-description": "error",
    "jsdoc/check-values": "error",
  },
}
