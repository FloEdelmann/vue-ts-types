import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

/**
 * Allows any string. No further runtime validation is performed by default.
 *
 * @param validator - Optional function for further runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const stringProp = (validator?: Validator): PropOptionsGenerator<string> =>
  propOptionsGenerator(String, validator);
