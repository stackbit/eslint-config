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
    ]
};
