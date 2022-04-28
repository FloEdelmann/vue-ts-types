import type { DefaultPropOptions, RequiredPropOptions } from '../types';
import type { Validator } from '../validators';
import { vuePropValidator } from '../validators';

interface FunctionPropOptionsGenerator<T> {
  optional: DefaultPropOptions<T | undefined> & { default?: () => T };
  required: RequiredPropOptions<T> & { default?: () => T };
}

// eslint-disable-next-line @typescript-eslint/ban-types -- we can't restrict the type here
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
