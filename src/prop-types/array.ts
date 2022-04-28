import type { DefaultPropOptions, RequiredPropOptions } from '../types';
import type { Validator } from '../validators';
import { vuePropValidator } from '../validators';

export const arrayProp = <T = unknown>(validator?: Validator): DefaultPropOptions<T[] | undefined> => ({
  type: Array,
  required: false,
  default: undefined,
  validator: vuePropValidator(validator),
});

export const arrayDefaultProp = <T = unknown>(defaultValue: T[], validator?: Validator): DefaultPropOptions<T[]> => ({
  type: Array,
  required: false,
  default: () => [...defaultValue],
  validator: vuePropValidator(validator),
});

export const arrayRequiredProp = <T = unknown>(validator?: Validator): RequiredPropOptions<T[]> => ({
  type: Array,
  required: true,
  validator: vuePropValidator(validator),
});
