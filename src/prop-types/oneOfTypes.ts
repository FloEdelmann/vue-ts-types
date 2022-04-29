import type { PropOptionsGenerator, PropType } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

/**
 * Allows any of the passed constructor types (validated at runtime).
 *
 * Type parameter `T` has to be used to adjust the type at compile time.
 *
 * @param type - A single constructor or an array of constructors to allow.
 * @param validator - Optional function for further runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const oneOfTypesProp = <T = unknown>(type: PropType<T>, validator?: Validator): PropOptionsGenerator<T> =>
  propOptionsGenerator(type, validator);
