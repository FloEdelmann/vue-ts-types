import type { Validator } from '.';

/** Validator that only allows non-positive numbers (`<= 0`). */
export const isNonPositive: Validator = (value) => {
  if (typeof value !== 'number' || value > 0 || Number.isNaN(value)) {
    return 'value should be a non-positive number';
  }
  return undefined;
};
