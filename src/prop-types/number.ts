import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

export const numberProp = (validator?: Validator): PropOptionsGenerator<number> =>
  propOptionsGenerator(Number, validator);
