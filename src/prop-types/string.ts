import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

/**
 * Allows any string. No further runtime validation is performed by default.
 */
export const stringProp = (validator?: Validator): PropOptionsGenerator<string> =>
  propOptionsGenerator(String, validator);
