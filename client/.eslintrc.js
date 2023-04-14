module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['react-app', 'airbnb', 'plugin:jsx-a11y/recommended', 'prettier'],
    plugins: ['jsx-a11y', 'prettier', 'react', 'react-hooks'],
    ignorePatterns: ['.eslintrc.js'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
    rules: {
        'linebreak-style': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'no-unused-vars': 'warn',
        'import/prefer-default-export': 'off',
        'no-param-reassign': ['error', { props: false }],
        'react/function-component-definition': 'off',
        'import/no-unresolved': 'off',
        'react/self-closing-comp': 'off',
        'no-shadow': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'no-underscore-dangle': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                trailingComma: 'all',
            },
        ],
        'import/extensions': 'off',
    },
};
