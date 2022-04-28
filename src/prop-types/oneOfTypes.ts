import type { PropOptionsGenerator, PropType } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

export const oneOfTypesProp = <T = unknown>(type: PropType<T>, validator?: Validator): PropOptionsGenerator<T> =>
  propOptionsGenerator(type, validator);
