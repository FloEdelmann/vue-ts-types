import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

/**
 * Allows any boolean (validated at runtime and compile time).
 */
export const booleanProp = (validator?: Validator): PropOptionsGenerator<boolean> =>
  propOptionsGenerator(Boolean, validator);
