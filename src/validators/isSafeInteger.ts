import type { Validator } from '.';

/** Validator that only allows safe integer numbers. */
export const isSafeInteger: Validator = (value) => {
  if (typeof value !== 'number' || !Number.isSafeInteger(value)) {
    return 'value should be a safe integer';
  }
  return undefined;
};
