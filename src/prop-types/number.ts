import type { PropOptionsGenerator, PropType } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

/**
 * Allows any number (validated at runtime and compile time).
 *
 * Type parameter `T` can be used to restrict the type at compile time with a union type.
 *
 * @param validator - Optional function for further runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const numberProp = <T extends number = number>(
  validator?: Validator,
): PropOptionsGenerator<T> =>
  propOptionsGenerator(Number as unknown as PropType<T>, validator);
