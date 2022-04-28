import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

/**
 * Allows any object. No further runtime validation is performed by default.
 * Type parameter `T` can be used to restrict the type at compile time.
 */
export const objectProp = <T = object>(validator?: Validator): PropOptionsGenerator<T> =>
  propOptionsGenerator<T>(Object, validator);
