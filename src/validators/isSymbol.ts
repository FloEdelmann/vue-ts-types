import type { Validator } from '.';

/**
 * Validator that only allows symbols.
 */
export const isSymbol: Validator = (value) =>
  typeof value === 'symbol' ? undefined : 'value should be a symbol';
