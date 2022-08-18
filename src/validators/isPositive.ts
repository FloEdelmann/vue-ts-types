import type { Validator } from '.';

/** Validator that only allows positive numbers (> 0). */
export const isPositive: Validator = value => {
  if (typeof value !== 'number' || value <= 0 || Number.isNaN(value)) {
    return 'value should be a positive number';
  }
  return undefined;
};
