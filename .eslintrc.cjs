module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.eslint.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  },
  plugins: ['simple-import-sort', 'import', 'prettier'],
  rules: {
    /*Import*/
    'import/first': 'error',
    'import/extensions': 'off',
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // External packages:
          ['^react', '^@?\\w'],
          // Alias imports:
          ['^~(([\\/.]?\\w)|assets|test-utils)'],
          // Side effect imports:
          ['^\\u0000'],
          // Parent imports:
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports:
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports:
          ['^.+\\.s?css$']
        ]
      }
    ],

    /*React*/
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'warn',
    /* 'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function'],
        unnamedComponents: 'arrow-function'
      }
    ], */
    'react/style-prop-object': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    /* Console*/
    'no-console': ['warn', { allow: ['info', 'error'] }],

    /*Typescript*/
    '@typescript-eslint/no-shadow': 'off'
  }
};
