module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'standard',
        'standard-react',
        'plugin:prettier/recommended',
        'prettier/react',
        'prettier/standard',
        'plugin:jsx-a11y/recommended'
    ],
    rules: {
        'no-unused-vars': ['error', { vars: 'all', args: 'all', ignoreRestSiblings: true }],
        'import/order': ['error', { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] }],
        'react/display-name': 0
    }
};
