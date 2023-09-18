import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';
import { isInteger } from '../validators';

/**
 * Allows any integer (validated at runtime).
 *
 * @param validator - Optional function for further runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const integerProp = (
  validator?: Validator,
): PropOptionsGenerator<number> =>
  propOptionsGenerator(Number, validator, isInteger);
