import type { Validator } from '.';

/** Validator that only allows negative numbers (`< 0`). */
export const isNegative: Validator = value => {
  if (typeof value !== 'number' || value >= 0 || Number.isNaN(value)) {
    return 'value should be a negative number';
  }
  return undefined;
};
