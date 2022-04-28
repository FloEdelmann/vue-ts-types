import type { PropOptionsGenerator } from '../types';
import type { Validator } from '../validators';
import { oneOfProp } from './oneOf';

type PlainObject = Record<number | string | symbol, unknown>

export const oneOfObjectKeysProp = <T extends PlainObject>(object: T, validator?: Validator): PropOptionsGenerator<keyof T> =>
  oneOfProp(Object.keys(object) as (keyof T)[], validator);
