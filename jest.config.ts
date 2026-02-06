import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: './test-results/coverage',
  displayName: 'ts-starter',
  preset: 'ts-jest',
  reporters: ['default', ['./node_modules/jest-html-reporter', {
    includeConsoleLog: false,
    outputPath: './test-results/test-report.html',
    pageTitle: 'Test Report: ts-starter',
    sort: 'titleAsc',
  }]],
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
};

export default config;
