import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

export const arrayProp = <T = unknown>(validator?: Validator): PropOptionsGenerator<T[]> =>
  propOptionsGenerator<T[]>(Array, validator);
