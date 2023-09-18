import type { Validator } from '.';

/** Validator that only allows integer numbers. */
export const isInteger: Validator = (value) => {
  if (typeof value !== 'number' || !Number.isInteger(value)) {
    return 'value should be an integer';
  }
  return undefined;
};
