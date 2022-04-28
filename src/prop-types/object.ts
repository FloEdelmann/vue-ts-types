import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

export const objectProp = <T = object>(validator?: Validator): PropOptionsGenerator<T> =>
  propOptionsGenerator<T>(Object, validator);
