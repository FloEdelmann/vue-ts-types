import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  clearMocks: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest/legacy',
  },
  testMatch: ['**/tests/**/*.spec.ts'],
  setupFilesAfterEnv: ['jest-extended/all'],
  injectGlobals: false,
};

export default config;
