import type { DefaultPropOptions, OneOfDefaultType, RequiredPropOptions } from '../types';
import type { Validator } from '../validators';
import { isSymbol, vuePropValidator } from '../validators';

export const symbolProp = (validator?: Validator): DefaultPropOptions<symbol | undefined> => ({
  type: undefined,
  required: false,
  default: undefined,
  validator: vuePropValidator(validator, isSymbol),
});

export const symbolDefaultProp = (defaultValue: OneOfDefaultType<symbol>, validator?: Validator): DefaultPropOptions<symbol> => ({
  type: undefined,
  required: false,
  default: defaultValue,
  validator: vuePropValidator(validator, isSymbol),
});

export const symbolRequiredProp = (validator?: Validator): RequiredPropOptions<symbol> => ({
  type: undefined,
  required: true,
  validator: vuePropValidator(validator, isSymbol),
});
