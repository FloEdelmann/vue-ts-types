import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';
import { isInteger } from '../validators';

/**
 * Allows any integer (validated at runtime).
 */
export const integerProp = (validator?: Validator): PropOptionsGenerator<number> =>
  propOptionsGenerator(Number, validator, isInteger);
