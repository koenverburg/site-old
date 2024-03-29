module.exports = {
  // coverageDirectory: '.reports/coverage',
  // collectCoverageFrom: ['src/**/**/*.{ts,tsx}', '!**/__tests__/**'],
  // coveragePathIgnorePatterns: ['src/pages/_*', 'src/utils'],
  cacheDirectory: '.jest-cache',

  // coverageReporters: [
  //   'html',
  //   'cobertura',
  // ],

  coverageThreshold: {
    global: {
      branches: 94,
      functions: 94,
      lines: 94,
      statements: 94,
    },
  },

  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },

  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  moduleNameMapper: {
    // '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/__mocks__/static.mock.ts',
    '\\.(css|sass|scss|styl|less)$': 'identity-obj-proxy',
    '@utils': '<rootDir>/src/utils',
    '@hoc': '<rootDir>/src/hoc',
    '@generic': '<rootDir>/src/generic',
    '@features': '<rootDir>/src/features',
    '@components': '<rootDir>/src/components',
    '@containers': '<rootDir>/src/containers',
    '@interfaces': '<rootDir>/src/base/interfaces',
    '@helpers': '<rootDir>/src/base/helpers',
    '@enums': '<rootDir>/src/base/enums',
    '@fragments': '<rootDir>/src/features/fragments.ts',
  },

  testEnvironment: 'jsdom',

  projects: ['src/'],
  setupFilesAfterEnv: [
    '<rootDir>/scripts/testing/jest.setup.ts',
  ],

  testMatch: ['**/__tests__/**/*(*.)(spec).ts?(x)'],
  /*preset: '@swc-node/jest',*/
  transform: {
     '\\.[jt]sx?$': 'babel-jest',
     '^.+\\.tsx?$': 'ts-jest',
     //'^.+\\.jsx?$': 'esbuild-jest',
     //'^.+\\.tsx?$': 'esbuild-jest'
   },
}
