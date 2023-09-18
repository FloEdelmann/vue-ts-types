import type { Constructor, PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';
import { isInstanceOf } from '../validators';

/**
 * Allows instances of the given constructor (validated at runtime and compile time).
 *
 * Type parameter `T` can be used to adjust the inferred type at compile time.
 *
 * @param parent - The constructor to allow.
 * @param validator - Optional function for further runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const instanceOfProp = <T extends Constructor>(
  parent: T,
  validator?: Validator,
): PropOptionsGenerator<InstanceType<T>> =>
  propOptionsGenerator<InstanceType<T>>(
    parent,
    validator,
    isInstanceOf(parent),
  );
