const nextJest = require('next/jest')
const { env } = require('process')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/back/(.*)$': '<rootDir>/src/back/$1',
    '^@/front/(.*)$': '<rootDir>/src/front/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/', 
    '<rootDir>/.next/',
    '<rootDir>/cypress/',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
  ]
}

switch (env.TEST_SUITE) {
  case 'unit-back':
    customJestConfig.testMatch = ['<rootDir>/__tests__/back/unit/**/*.test.ts']
    break
  case 'integration-back':
    customJestConfig.testMatch = ['<rootDir>/__tests__/back/integration/**/*.test.ts']
    customJestConfig.setupFilesAfterEnv = [...customJestConfig.setupFilesAfterEnv, '<rootDir>/jest/setupFirebaseEmulator.js']
    break
  case 'front':
    customJestConfig.testMatch = ['<rootDir>/__tests__/front/**/*.test.ts(x)']
    break
}

module.exports = createJestConfig(customJestConfig)
