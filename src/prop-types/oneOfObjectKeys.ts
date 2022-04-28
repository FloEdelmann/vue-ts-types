import type { DefaultPropOptions, OneOfDefaultType, RequiredPropOptions } from '../types';
import type { Validator } from '../validators';
import { oneOfDefaultProp, oneOfProp, oneOfRequiredProp } from './oneOf';

type PlainObject = Record<number | string | symbol, unknown>

export const oneOfObjectKeysProp = <T extends PlainObject>(object: T, validator?: Validator): DefaultPropOptions<keyof T | undefined> =>
  oneOfProp(Object.keys(object) as (keyof T)[], validator);

export const oneOfObjectKeysDefaultProp = <T extends PlainObject>(object: T, defaultValue: OneOfDefaultType<keyof T>, validator?: Validator): DefaultPropOptions<keyof T> =>
  oneOfDefaultProp(Object.keys(object) as (keyof T)[], defaultValue, validator);

export const oneOfObjectKeysRequiredProp = <T extends PlainObject>(object: T, validator?: Validator): RequiredPropOptions<keyof T> =>
  oneOfRequiredProp(Object.keys(object) as (keyof T)[], validator);
