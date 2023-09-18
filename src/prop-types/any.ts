import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

/**
 * Allows any type. No built-in runtime validation is performed by default.
 *
 * Type parameter `T` can be used to restrict the type at compile time.
 *
 * @param validator - Optional function for runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const anyProp = <T = any>(
  validator?: Validator,
): PropOptionsGenerator<T> => propOptionsGenerator(undefined, validator);
