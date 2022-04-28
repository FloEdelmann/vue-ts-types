import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';
import { isSymbol } from '../validators';

/**
 * Allows any symbol (validated at runtime and compile time).
 */
export const symbolProp = (validator?: Validator): PropOptionsGenerator<symbol> =>
  propOptionsGenerator(undefined, validator, isSymbol);
