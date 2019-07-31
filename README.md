# eslint-config [![NPM version](https://img.shields.io/npm/v/@stackbit/eslint-config.svg)](https://www.npmjs.com/package/@stackbit/eslint-config)

Stackbit's [shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for [ESLint](https://eslint.org/)

## Installation

Install ESLint and `@stackbit/eslint-config`:

```
npm install --save-dev eslint @stackbit/eslint-config
```

### Prettier

`@stackbit/eslint-config` should be used in conjunction with [Prettier](https://prettier.io/). See the [`@stackbit/prettier-config` installation guide](https://github.com/stackbithq/prettier-config#installation) for more details.

## Usage
Stackbit's ESLint rules come bundled in `@stackbit/eslint-config`. To enable these rules, add an `eslintConfig` property in your `package.json`. See the [ESLint configuration docs](https://eslint.org/docs/user-guide/configuring) for more details.

```json
"eslintConfig": {
  "extends": ["@stackbit"]
}
```

Now you can run ESLint by adding the following linting script to your `package.json`. See the [ESLint CLI docs](https://eslint.org/docs/user-guide/command-line-interface) for more details.

```json
"scripts": {
  "lint:js": "eslint --cache --fix --ext .js,.jsx ."
}
```

Run it:

```
npm run lint:js
```

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)
