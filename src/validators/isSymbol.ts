import type { Validator } from '.';

export const isSymbol: Validator = value => {
  if (typeof value !== 'symbol') {
    return 'value should be a symbol';
  }
  return undefined;
};
