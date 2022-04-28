import type { DefaultPropOptions, RequiredPropOptions } from '../types';
import type { Validator } from '../validators';
import { vuePropValidator } from '../validators';

interface FunctionPropOptionsGenerator<T> {
  optional: DefaultPropOptions<T | undefined> & { default?: () => T };
  required: RequiredPropOptions<T> & { default?: () => T };
}

/* eslint-disable @typescript-eslint/ban-types */

/**
 * Allows any function. No further runtime validation is performed by default.
 * Type parameter `T` can be used to restrict the type to a specific function signature at compile time.
 */
export const functionProp = <T extends Function>(validator?: Validator): FunctionPropOptionsGenerator<T> => ({
  optional: {
    type: Function,
    required: false,
    default: undefined,
    validator: vuePropValidator(validator),
  },
  required: {
    type: Function,
    required: true,
    validator: vuePropValidator(validator),
  },
});
