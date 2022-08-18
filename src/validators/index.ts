import Vue from 'vue';

export type Validator = (value: unknown) => string | undefined
export type VuePropValidator = (value: unknown) => boolean

/**
 * Creates a Vue prop validator that runs all type validators and the user validator (if specified).
 * @param userValidator Validator function specified by the user.
 * @param typeValidators Validator functions hard-coded by the prop type function.
 */
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

// for internal use only
export { isInstanceOf } from './isInstanceOf';
export { isInteger } from './isInteger';
export { isOneOf } from './isOneOf';
export { isSymbol } from './isSymbol';

// custom validators provided for user convenience are exported from main entrypoint
