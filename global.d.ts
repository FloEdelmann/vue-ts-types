import type CustomMatchers from 'jest-extended';

declare module 'expect' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- needed for declaration merging
  interface AsymmetricMatchers extends CustomMatchers {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- needed for declaration merging
  interface Matchers<R> extends CustomMatchers<R> {}
}
