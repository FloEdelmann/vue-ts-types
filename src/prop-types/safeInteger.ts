import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../utilities';
import type { Validator } from '../validators';
import { isSafeInteger } from '../validators/isSafeInteger';

/**
 * Allows any safe integer (validated at runtime).
 *
 * @param validator - Optional function for further runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const safeIntegerProp = (
  validator?: Validator,
): PropOptionsGenerator<number> =>
  propOptionsGenerator(Number, validator, isSafeInteger);
