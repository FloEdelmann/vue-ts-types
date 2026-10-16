import type { Validator } from '.';

/**
Validator that only allows safe integer numbers.
*/
export const isSafeInteger: Validator = (value) =>
  typeof value === 'number' && Number.isSafeInteger(value)
    ? undefined
    : 'value should be a safe integer';
