import nextJest from 'next/jest.js';

import type { Config } from 'jest';

const createJestConfig = nextJest({
  dir: './'
});

const config: Config = {
  displayName: 'alternative-dimensions',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  coverageReporters: ['json', 'html', 'text'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts(x)',
    '!<rootDir>/src/pages/**/*',
    '!<rootDir>/src/**/*.stories.(ts|tsx)',
    '!<rootDir>/src/**/stories.(ts|tsx)',
    '!<rootDir>/src/@types/**/*',
    '!<rootDir>/src/components/storybook/**/*',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/src/generated/**/*'
  ],
  testMatch: [
    '<rootDir>/src/**/*.test.+(ts|tsx|js|jsx)',
    '<rootDir>/src/**/test.+(ts|tsx|js|jsx)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/.next/',
    '/storybook/'
  ],
  verbose: true
};

export default createJestConfig(config);
