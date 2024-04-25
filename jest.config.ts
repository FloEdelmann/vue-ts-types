import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  clearMocks: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['<rootDir>/tests/**/*.spec.ts'],
  setupFilesAfterEnv: ['<rootDir>/tests/jest-setup.ts'],
  injectGlobals: false,
};

export default config;
