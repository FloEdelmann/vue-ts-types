import type { PropConstructor, PropOptionsGenerator, PropType } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';
import { isOneOf } from '../validators';

// inspired by https://github.com/dwightjack/vue-types/blob/4.1.1/src/validators/oneof.ts
const getOneOfType = <T extends readonly unknown[]>(values: T): PropType<T[number]> | undefined => {
  const allowedTypes: PropConstructor<T[number]>[] = [...new Set(
    values.flatMap(value => {
      if (value === null || value === undefined) {
        return [];
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return ((value as any).constructor as PropConstructor<T> | undefined) ?? [];
    }),
  )];

  if (allowedTypes.length === 0) {
    return undefined;
  }

  if (allowedTypes.length === 1) {
    return allowedTypes[0];
  }

  return allowedTypes;
};

/**
 * Allows any of the specified allowed values (validated at runtime and compile time).
 *
 * Type parameter `T` can be used to adjust the inferred type at compile time, this is usually not necessary.
 *
 * @param allowedValues - The allowed values.
 * @param validator - Optional function for further runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const oneOfProp = <T extends readonly unknown[]>(allowedValues: T, validator?: Validator): PropOptionsGenerator<T[number]> =>
  propOptionsGenerator(getOneOfType(allowedValues), validator, isOneOf(allowedValues));
