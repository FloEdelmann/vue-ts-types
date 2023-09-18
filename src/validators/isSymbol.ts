import type { Validator } from '.';

/** Validator that only allows symbols. */
export const isSymbol: Validator = (value) => {
  if (typeof value !== 'symbol') {
    return 'value should be a symbol';
  }
  return undefined;
};
