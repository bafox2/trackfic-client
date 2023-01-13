module.exports = {
  extends: [
    'mantine',
    'plugin:@next/next/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['testing-library', 'jest'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-tabs': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-indent-props': 'off',
    '@typescript-eslint/quotes': 'off',
    'prefer-const': 'off',
    'no-sequences': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
  },
};
