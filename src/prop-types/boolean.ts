import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

export const booleanProp = (validator?: Validator): PropOptionsGenerator<boolean> =>
  propOptionsGenerator(Boolean, validator);
