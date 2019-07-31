# eslint-config

Stackbit's [shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for ESLint

## Installation

Install [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and `@stackbit/eslint-config`:

```
npm install --save-dev eslint prettier @stackbit/eslint-config
```

## Usage
Stackbit's ESLint rules come bundled in `@stackbit/eslint-config`. To enable these rules, add an `eslintConfig` property in your `package.json`. See the [ESLint configuration docs](https://eslint.org/docs/user-guide/configuring) for more details.

```
"eslintConfig": {
  "extends": ["@stackbit"]
}
```

Now you can run ESLint by adding the following linting script to your `package.json`. See the [ESLint CLI docs](https://eslint.org/docs/user-guide/command-line-interface) for more details.

```
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
