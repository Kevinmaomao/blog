// eslint-disable-next-line no-undef
module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "rules": {
    "comma-spacing": ["error", { "before": false, "after": true }]
  }
}
