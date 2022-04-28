import type { DefaultPropOptions, RequiredPropOptions } from '../types';
import type { Validator } from '../validators';
import { vuePropValidator } from '../validators';

export const booleanProp = (validator?: Validator): DefaultPropOptions<boolean | undefined> => ({
  type: Boolean,
  required: false,
  default: undefined,
  validator: vuePropValidator(validator),
});

export const booleanDefaultProp = (defaultValue: boolean, validator?: Validator): DefaultPropOptions<boolean> => ({
  type: Boolean,
  required: false,
  default: defaultValue,
  validator: vuePropValidator(validator),
});

export const booleanRequiredProp = (validator?: Validator): RequiredPropOptions<boolean> => ({
  type: Boolean,
  required: true,
  validator: vuePropValidator(validator),
});
