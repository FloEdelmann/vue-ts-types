import type { Constructor } from '../types';
import type { Validator } from '.';

/**
 * Validator that only allows instances of the given parent.
 * @internal
 */
export const isInstanceOf =
  (parent: Constructor): Validator =>
  (value) =>
    value instanceof parent
      ? undefined
      : `value should be an instance of ${parent.name}`;
