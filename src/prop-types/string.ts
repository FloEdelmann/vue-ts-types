import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

export const stringProp = (validator?: Validator): PropOptionsGenerator<string> =>
  propOptionsGenerator(String, validator);
