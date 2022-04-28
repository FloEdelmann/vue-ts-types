import type { PropOptionsGenerator, PropType } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

/**
 * Allows any of the passed constructor types (validated at runtime).
 * Type parameter `T` has to be used to adjust the type at compile time.
 */
export const oneOfTypesProp = <T = unknown>(type: PropType<T>, validator?: Validator): PropOptionsGenerator<T> =>
  propOptionsGenerator(type, validator);
