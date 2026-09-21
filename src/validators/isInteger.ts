import type { Validator } from '.';

/**
 * Validator that only allows integer numbers.
 */
export const isInteger: Validator = (value) =>
  // eslint-disable-next-line unicorn/prefer-number-is-safe-integer -- validator function should match expectation
  typeof value !== 'number' || !Number.isInteger(value)
    ? 'value should be an integer'
    : undefined;
