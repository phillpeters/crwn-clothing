module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'consistent-return': 'off',
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        singleQuote: true
      }
    ],
    'react/button-has-type': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function'
      }
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'ignore'
      }
    ],
    'react/require-default-props': 0,
    'no-return-await': 'off',
    '@typescript-eslint/return-await': ['error', 'always']
  }
};
