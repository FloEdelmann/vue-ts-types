import Vue from 'vue';
import type { Constructor } from '../types';

export type Validator = (value: unknown) => string | undefined
export type VuePropValidator = (value: unknown) => boolean

export function vuePropValidator(userValidator?: Validator, ...typeValidators: Validator[]): VuePropValidator | undefined {
  const validators = userValidator ? [...typeValidators, userValidator] : typeValidators;
  if (validators.length === 0) {
    return undefined;
  }

  return (value: unknown) => {
    for (const validator of validators) {
      const errorMessage = validator(value);
      if (errorMessage) {
        if (typeof Vue === 'object' && 'util' in Vue) {
          // @ts-expect-error -- Vue.util is only available in Vue 2, but provides more context than console.warn
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          Vue.util.warn(`${errorMessage} (received: '${String(value)}')`);
        }
        else {
          console.warn(`${errorMessage} (received: '${String(value)}')`);
        }
        return false;
      }
    }

    return true;
  };
}

export const isOneOf = (allowedValues: readonly unknown[]): Validator => value => {
  if (!allowedValues.includes(value)) {
    return `value should be one of "${allowedValues.join('", "')}"`;
  }
  return undefined;
};

export const isInteger: Validator = value => {
  if (typeof value !== 'number' || !Number.isInteger(value)) {
    return 'value should be an integer';
  }
  return undefined;
};

export const isSymbol: Validator = value => {
  if (typeof value !== 'symbol') {
    return 'value should be a symbol';
  }
  return undefined;
};

export const isInstanceOf = (parent: Constructor): Validator => value => {
  if (!(value instanceof parent)) {
    return `value should be an instance of ${parent.name}`;
  }
  return undefined;
};
