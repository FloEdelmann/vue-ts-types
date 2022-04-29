import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

/**
 * Allows any number (validated at runtime and compile time).
 *
 * @param validator - Optional function for further runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const numberProp = (validator?: Validator): PropOptionsGenerator<number> =>
  propOptionsGenerator(Number, validator);
