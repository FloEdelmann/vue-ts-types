import type { DefaultPropOptions, RequiredPropOptions } from '../types';
import type { Validator } from '../validators';
import { vuePropValidator } from '../validators';

export const objectProp = <T = object>(validator?: Validator): DefaultPropOptions<T | undefined> => ({
  type: Object,
  required: false,
  default: undefined,
  validator: vuePropValidator(validator),
});

export const objectDefaultProp = <T = object>(defaultValue: T, validator?: Validator): DefaultPropOptions<T> => ({
  type: Object,
  required: false,
  default: () => ({ ...defaultValue }),
  validator: vuePropValidator(validator),
});

export const objectRequiredProp = <T = object>(validator?: Validator): RequiredPropOptions<T> => ({
  type: Object,
  required: true,
  validator: vuePropValidator(validator),
});
