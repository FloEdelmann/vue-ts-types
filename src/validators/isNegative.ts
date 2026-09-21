import type { Validator } from '.';

/**
 * Validator that only allows negative numbers (`< 0`).
 */
export const isNegative: Validator = (value) =>
  typeof value !== 'number' || value >= 0 || Number.isNaN(value)
    ? 'value should be a negative number'
    : undefined;
