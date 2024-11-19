import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

/**
 * Allows any object. No further runtime validation is performed by default.
 *
 * @template T - can be used to restrict the type at compile time.
 * @param validator - Optional function for further runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const objectProp = <T = object>(
  validator?: Validator,
): PropOptionsGenerator<T> => propOptionsGenerator<T>(Object, validator);
