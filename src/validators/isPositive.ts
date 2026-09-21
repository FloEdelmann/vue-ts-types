import type { Validator } from '.';

/**
 * Validator that only allows positive numbers (`> 0`).
 */
export const isPositive: Validator = (value) =>
  typeof value !== 'number' || value <= 0 || Number.isNaN(value)
    ? 'value should be a positive number'
    : undefined;
