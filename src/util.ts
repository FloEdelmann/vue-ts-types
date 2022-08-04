import type { DefaultPropOptions, OneOfDefaultType, PropOptionsGenerator, PropType } from './types';
import { vuePropValidator } from './validators';
import type { Validator } from './validators';

export const propOptionsGenerator = <T>(type?: PropType<T>, userValidator?: Validator, ...typeValidators: Validator[]): PropOptionsGenerator<T> => ({
  optional: {
    type,
    required: false,
    default: undefined,
    validator: vuePropValidator(userValidator, ...typeValidators),
  },
  nullable: {
    type,
    required: false,
    default: null,
    validator: vuePropValidator(userValidator, ...typeValidators),
  },
  withDefault: (defaultValue: OneOfDefaultType<T>): DefaultPropOptions<T> => ({
    type,
    required: false,
    default: defaultValue,
    validator: vuePropValidator(userValidator, ...typeValidators),
  }),
  required: {
    type,
    required: true,
    validator: vuePropValidator(userValidator, ...typeValidators),
  },
});
