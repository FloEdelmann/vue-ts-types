import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';
import { isSymbol } from '../validators';

export const symbolProp = (validator?: Validator): PropOptionsGenerator<symbol> =>
  propOptionsGenerator(undefined, validator, isSymbol);
