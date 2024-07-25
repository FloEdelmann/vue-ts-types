import type { DefaultPropOptions, RequiredPropOptions } from '../types';
import type { Validator } from '../validators';
import { vuePropValidator } from '../validators';

interface FunctionPropOptionsGenerator<T> {
  optional: DefaultPropOptions<T | undefined> & { default?: () => T };
  nullable: DefaultPropOptions<T | null> & { default?: (() => T) | null };
  required: RequiredPropOptions<T> & { default?: () => T };
}

/* eslint-disable @typescript-eslint/no-unsafe-function-type */

/**
 * Allows any function. No further runtime validation is performed by default.
 *
 * Type parameter `T` can be used to restrict the type to a specific function signature at compile time.
 *
 * @param validator - Optional function for further runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const functionProp = <T extends Function>(
  validator?: Validator,
): FunctionPropOptionsGenerator<T> => ({
  optional: {
    type: Function as unknown as () => T,
    required: false,
    default: undefined,
    validator: vuePropValidator(validator),
  },
  nullable: {
    type: Function as unknown as () => T,
    required: false,
    default: null,
    validator: vuePropValidator(validator),
  },
  required: {
    type: Function as unknown as () => T,
    required: true,
    validator: vuePropValidator(validator),
  },
});
