module.exports = {
  extends: ['standard-with-typescript', 'next', 'prettier'],

  parserOptions: {
    project: '../tsconfig/base.json'
  },

  settings: {
    next: {
      rootDir: [
        'apps/docs/',
        'apps/web/',
        'packages/ui/',
        'packages/config/',
        'packages/tsconfig/',
      ],
    },
  },
}
