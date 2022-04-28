import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

export const anyProp = <T = any>(validator?: Validator): PropOptionsGenerator<T> =>
  propOptionsGenerator(undefined, validator);
