module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    "APP_NAME": true,
    "APP_LOCALE": true,
    "PRODUCTION": true,
    "GITHUB_AUTH": true,
    "API_URL": true,
    "APP_VERSION": true,
    "APP_PACKAGE_NAME": true,
    "workbox": true,
    "AUTH_TOKEN_HEADER": true,
  }
}
