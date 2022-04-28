import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

/**
 * Allows any array. No further runtime validation is performed by default.
 * Type parameter `T` can be used to restrict the type of the array items at compile time.
 */
export const arrayProp = <T = unknown>(validator?: Validator): PropOptionsGenerator<T[]> =>
  propOptionsGenerator<T[]>(Array, validator);
