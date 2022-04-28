import type { DefaultPropOptions, RequiredPropOptions } from '../types';
import type { Validator } from '../validators';
import { vuePropValidator } from '../validators';

type FunctionDefaultPropOptions<T> = DefaultPropOptions<T> & { default?: () => T }
type FunctionRequiredPropOptions<T> = RequiredPropOptions<T> & { default?: () => T }

// eslint-disable-next-line @typescript-eslint/ban-types -- we can't restrict the type here
export const functionProp = <T extends Function>(validator?: Validator): FunctionDefaultPropOptions<T | undefined> => ({
  type: Function,
  required: false,
  default: undefined,
  validator: vuePropValidator(validator),
});

// eslint-disable-next-line @typescript-eslint/ban-types -- we can't restrict the type here
export const functionRequiredProp = <T extends Function>(validator?: Validator): FunctionRequiredPropOptions<T> => ({
  type: Function,
  required: true,
  validator: vuePropValidator(validator),
});
