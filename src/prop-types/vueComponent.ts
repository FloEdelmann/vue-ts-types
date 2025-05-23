import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../utilities';
import type { Validator } from '../validators';

/** Has to be so broad to allow Vue 2 and Vue 3 component options or instances. */
export type VueComponent = object | string;

/**
 * Allows any Vue component instance, name or options object. No built-in runtime validation is performed by default.
 *
 * @param validator - Optional function for further runtime validation; should return `undefined` if valid, or an error string if invalid.
 */
export const vueComponentProp = (
  validator?: Validator,
): PropOptionsGenerator<VueComponent> =>
  propOptionsGenerator<VueComponent>([Object, String], validator);
