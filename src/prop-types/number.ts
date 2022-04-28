import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

/**
 * Allows any number (validated at runtime and compile time).
 */
export const numberProp = (validator?: Validator): PropOptionsGenerator<number> =>
  propOptionsGenerator(Number, validator);
