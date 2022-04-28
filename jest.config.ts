import type { InitialOptionsTsJest } from 'ts-jest/dist/types';

const config: InitialOptionsTsJest = {
  clearMocks: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest/legacy',
  },
  testMatch: ['**/tests/**/*.spec.ts'],
  setupFilesAfterEnv: ['jest-extended/all'],

};

export default config;
