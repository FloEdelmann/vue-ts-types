import type { Validator } from '.';

/**
 * Validator that only allows non-negative numbers (`>= 0`).
 */
export const isNonNegative: Validator = (value) =>
  typeof value !== 'number' || value < 0 || Number.isNaN(value)
    ? 'value should be a non-negative number'
    : undefined;
