import type { DefaultPropOptions, OneOfDefaultType, RequiredPropOptions } from '../types';
import type { Validator } from '../validators';
import { vuePropValidator } from '../validators';

export const anyProp = <T = any>(validator?: Validator): DefaultPropOptions<T | undefined> => ({
  type: undefined,
  required: false,
  default: undefined,
  validator: vuePropValidator(validator),
});

export const anyDefaultProp = <T = any>(defaultValue: OneOfDefaultType<T>, validator?: Validator): DefaultPropOptions<T> => ({
  type: undefined,
  required: false,
  default: defaultValue,
  validator: vuePropValidator(validator),
});

export const anyRequiredProp = <T = any>(validator?: Validator): RequiredPropOptions<T> => ({
  type: undefined,
  required: true,
  validator: vuePropValidator(validator),
});
