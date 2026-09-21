import type { Validator } from '.';

/**
 * Validator that only allows any of the given values.
 * @internal
 */
export const isOneOf =
  (allowedValues: readonly unknown[]): Validator =>
  (value) =>
    allowedValues.includes(value)
      ? undefined
      : `value should be one of "${allowedValues.join('", "')}"`;
