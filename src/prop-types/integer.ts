import type { DefaultPropOptions, RequiredPropOptions } from '../types';
import type { Validator } from '../validators';
import { isInteger, vuePropValidator } from '../validators';

export const integerProp = (validator?: Validator): DefaultPropOptions<number | undefined> => ({
  type: Number,
  required: false,
  default: undefined,
  validator: vuePropValidator(validator, isInteger),
});

export const integerDefaultProp = (defaultValue: number, validator?: Validator): DefaultPropOptions<number> => ({
  type: Number,
  required: false,
  default: defaultValue,
  validator: vuePropValidator(validator, isInteger),
});

export const integerRequiredProp = (validator?: Validator): RequiredPropOptions<number> => ({
  type: Number,
  required: true,
  validator: vuePropValidator(validator, isInteger),
});
