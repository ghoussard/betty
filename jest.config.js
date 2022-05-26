const nextJest = require('next/jest')
const { env } = require('process')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleNameMapper: {
    '^@/back/(.*)$': '<rootDir>/src/back/$1',
    '^@/front/(.*)$': '<rootDir>/src/front/$1',
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.test.ts',
  ],
}

let configOverrides = {}
switch (env.JEST_TEST_SUITE) {
  case 'back:unit':
    configOverrides = {
      testEnvironment: 'node',
      testMatch: ['<rootDir>/__tests__/back/unit/**/*.test.ts'],
    }
    break
  case 'back:integration':
    configOverrides = {
      testEnvironment: 'node',
      testMatch: ['<rootDir>/__tests__/back/integration/**/*.test.ts'],
      setupFilesAfterEnv: [
        '<rootDir>/jest/setupFirebaseEmulator.js',
        '<rootDir>/jest/tearDownFirebaseEmulator.js',
        '<rootDir>/jest/extendExpect.ts',
      ]
    }
    break
  case 'front':
    configOverrides = {
      testEnvironment: 'jest-environment-jsdom',
      testMatch: ['<rootDir>/__tests__/front/**/*.test.ts?(x)'],
      setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
      ],
    }
    break
  default:
    throw new Error ('Please provide a valid value for JEST_TEST_SUITE env var')
}

module.exports = createJestConfig({
  ...customJestConfig,
  ...configOverrides,
})
