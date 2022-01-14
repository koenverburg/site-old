module.exports = {
  // cacheDirectory: '.jest-cache',

  // coverageThreshold: {
  //   global: {
  //     branches: 94,
  //     functions: 94,
  //     lines: 94,
  //     statements: 94,
  //   },
  // },

  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // moduleNameMapper: {
  //   '\\.(css|sass|scss|styl|less)$': 'identity-obj-proxy',
  //   '@utils': '<rootDir>/src/utils',
  //   '@hoc': '<rootDir>/src/hoc',
  //   '@generic': '<rootDir>/src/generic',
  //   '@features': '<rootDir>/src/features',
  //   '@components': '<rootDir>/src/components',
  //   '@containers': '<rootDir>/src/containers',
  //   '@interfaces': '<rootDir>/src/base/interfaces',
  //   '@helpers': '<rootDir>/src/base/helpers',
  //   '@enums': '<rootDir>/src/base/enums',
  //   '@fragments': '<rootDir>/src/features/fragments.ts',
  // },

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
