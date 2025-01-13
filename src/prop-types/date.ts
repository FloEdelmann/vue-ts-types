import type { PropOptionsGenerator, PropType } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

/**
 * Allows any `Date` object (validated at runtime and compile time).
 *
 * @param validator - Optional function for further runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const dateProp = (validator?: Validator): PropOptionsGenerator<Date> =>
  propOptionsGenerator(Date as unknown as PropType<Date>, validator);
