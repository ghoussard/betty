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

switch (env.TEST_SUITE) {
  case 'unit-back':
    customJestConfig.testEnvironment = 'node'
    customJestConfig.testMatch = ['<rootDir>/__tests__/back/unit/**/*.test.ts']
    break
  case 'integration-back':
    customJestConfig.testEnvironment = 'node'
    customJestConfig.testMatch = ['<rootDir>/__tests__/back/integration/**/*.test.ts']
    customJestConfig.setupFilesAfterEnv = [
      '<rootDir>/jest/setupFirebaseEmulator.js',
      '<rootDir>/jest/tearDownFirebaseEmulator.js',
      '<rootDir>/jest/extendExpect.ts',
    ]
    break
  case 'front':
    customJestConfig.testEnvironment = 'jest-environment-jsdom'
    customJestConfig.testMatch = ['<rootDir>/__tests__/front/**/*.test.ts(x)']
    customJestConfig.setupFilesAfterEnv = [
      '@testing-library/jest-dom/extend-expect',
    ]
    break
  default:
    throw new Error ('Please specify a valid value in TEST_SUITE environment variable')
}

module.exports = createJestConfig(customJestConfig)
