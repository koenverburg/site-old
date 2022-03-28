module.exports = {
  // cacheDirectory: '.jest-cache',

  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  testEnvironment: 'jsdom',

  // projects: ['ui'],

  // setupFilesAfterEnv: [
  //   '<rootDir>/scripts/testing/jest.setup.ts',
  // ],

  testMatch: [
    '**/__tests__/**/*(*.)(test).ts?(x)',
    '!**/__tests__/**/*(*.)(stories).ts?(x)'
  ],

  transform: {
     '^.+\\.tsx?$': 'esbuild-jest'
   },
}
