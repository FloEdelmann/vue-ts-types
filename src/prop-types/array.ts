import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

/**
 * Allows any array. No further runtime validation is performed by default.
 *
 * @template T - can be used to restrict the type of the array items at compile time.
 *  @param validator - Optional function for further runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const arrayProp = <T = unknown>(
  validator?: Validator,
): PropOptionsGenerator<T[]> => propOptionsGenerator<T[]>(Array, validator);
