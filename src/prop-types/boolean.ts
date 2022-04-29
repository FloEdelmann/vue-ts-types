import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

/**
 * Allows any boolean (validated at runtime and compile time).
 *
 * @param validator - Optional function for further runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const booleanProp = (validator?: Validator): PropOptionsGenerator<boolean> =>
  propOptionsGenerator(Boolean, validator);
