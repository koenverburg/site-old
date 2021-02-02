module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
      experimentalObjectRestSpread: true,
    },
  },
  extends: [
    'eslint:recommended',
    'prettier/standard',
  ],
  rules: {
    'object-curly-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'quotes': [
      'error',
      'single',
      {'avoidEscape': true, 'allowTemplateLiterals': false},
    ],
    'no-unused-vars': [
      'error', {
        'argsIgnorePattern': '^_',
      },
    ],
  },
  overrides: [{
    env: {
      browser: true,
    },
    files: ['*.ts', '*.tsx'],
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      '@typescript-eslint/ban-ts-comment': 0,
      'object-curly-spacing': ['error', 'never'],
      '@typescript-eslint/no-unused-vars': [
        'error', {
          'argsIgnorePattern': '^_',
        },
      ],
    },
  }],
}
