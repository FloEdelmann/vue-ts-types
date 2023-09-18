import type { PropOptionsGenerator, PropType } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

/**
 * Allows any string. No further runtime validation is performed by default.
 *
 * Type parameter `T` can be used to restrict the type at compile time with a union type.
 *
 * @param validator - Optional function for further runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const stringProp = <T extends string = string>(
  validator?: Validator,
): PropOptionsGenerator<T> =>
  propOptionsGenerator(String as unknown as PropType<T>, validator);
