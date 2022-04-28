import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: {
    color: 'blue',
    name: 'types',
  },
  runner: 'jest-runner-tsd',
  testMatch: ['**/type-tests/**/*.type.spec.ts'],
};

export default config;
