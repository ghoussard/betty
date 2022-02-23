const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/back/(.*)$': '<rootDir>/src/back/$1',
    '^@/common/(.*)$': '<rootDir>/src/common/$1',
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

module.exports = createJestConfig(customJestConfig)
