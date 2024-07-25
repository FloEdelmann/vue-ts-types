import type CustomMatchers from 'jest-extended';

declare module 'expect' {
  interface AsymmetricMatchers extends CustomMatchers {}
  interface Matchers<R> extends CustomMatchers<R> {}
}
