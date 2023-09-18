import type { Validator } from '.';

/** Validator that only allows any of the given values. */
export const isOneOf =
  (allowedValues: readonly unknown[]): Validator =>
  (value) => {
    if (!allowedValues.includes(value)) {
      return `value should be one of "${allowedValues.join('", "')}"`;
    }
    return undefined;
  };
