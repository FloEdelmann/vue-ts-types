import type { Validator } from '.';

export const isInteger: Validator = value => {
  if (typeof value !== 'number' || !Number.isInteger(value)) {
    return 'value should be an integer';
  }
  return undefined;
};
