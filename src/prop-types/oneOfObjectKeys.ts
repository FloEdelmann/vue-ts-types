import type { PropOptionsGenerator } from '../types';
import type { Validator } from '../validators';
import { oneOfProp } from './oneOf';

type PlainObject = Record<number | string | symbol, unknown>;

/**
 * Allows any of the keys of the specified object (validated at runtime and compile time).
 *
 * Type parameter `T` can be used to adjust the inferred type at compile time, this is usually not necessary.
 *
 * @param object - The object whose keys are allowed.
 * @param validator - Optional function for further runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const oneOfObjectKeysProp = <T extends PlainObject>(
  object: T,
  validator?: Validator,
): PropOptionsGenerator<keyof T> =>
  oneOfProp(Object.keys(object) as (keyof T)[], validator);
