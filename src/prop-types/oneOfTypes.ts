import type { DefaultPropOptions, OneOfDefaultType, PropType, RequiredPropOptions } from '../types';
import type { Validator } from '../validators';
import { vuePropValidator } from '../validators';

export const oneOfTypesProp = <T = unknown>(type: PropType<T>, validator?: Validator): DefaultPropOptions<T | undefined> => ({
  type,
  required: false,
  default: undefined,
  validator: vuePropValidator(validator),
});

export const oneOfTypesDefaultProp = <T = unknown>(type: PropType<T>, defaultValue: OneOfDefaultType<T>, validator?: Validator): DefaultPropOptions<T> => ({
  type,
  required: false,
  default: defaultValue,
  validator: vuePropValidator(validator),
});

export const oneOfTypesRequiredProp = <T = unknown>(type: PropType<T>, validator?: Validator): RequiredPropOptions<T> => ({
  type,
  required: true,
  validator: vuePropValidator(validator),
});
