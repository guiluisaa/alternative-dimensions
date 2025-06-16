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
  verbose: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.ts',
    '@/(.*)$': '<rootDir>/src/$1',
    '@graphql': '<rootDir>/src/generated/graphql.tsx'
  }
};

export default createJestConfig(config);
