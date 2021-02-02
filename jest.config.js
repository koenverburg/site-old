module.exports = {
  // this will become default in jest 27:
  testRunner: 'jest-circus/runner',
  coverageDirectory: '.reports/coverage',
  collectCoverageFrom: ['src/**/**/*.{ts,tsx}', '!**/__tests__/**'],
  coveragePathIgnorePatterns: ['src/pages/_*', 'src/utils'],

  coverageReporters: [
    'html',
    'cobertura',
  ],

  coverageThreshold: {
    global: {
      branches: 94,
      functions: 94,
      lines: 94,
      statements: 94,
    },
  },

  reporters: [
    ['jest-junit', {
      outputDirectory: '.reports',
      outputName: 'jest.xml',
      ancestorSeparator: ' > ',
    }],
  ],

  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },

  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  moduleNameMapper: {
    // '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/__mocks__/static.mock.ts',
    // '\\.(css|sass|scss|styl|less)$': '<rootDir>/config/__mocks__/style.mock.ts',
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

  resolver: 'jest-resolve-cached',
  testEnvironment: 'jsdom',

  projects: ['src/'],
  setupFilesAfterEnv: [
    '<rootDir>/scripts/testing/jest.setup.ts',
  ],

  testMatch: ['**/__tests__/**/*(*.)(spec).ts?(x)'],

  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
}
