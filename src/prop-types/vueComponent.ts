import type { ComponentOptions, VueConstructor } from 'vue';
import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

export type VueComponent = ComponentOptions<Vue> | VueConstructor<Vue> | string

/**
 * Allows any Vue component instance, name or options object. No built-in runtime validation is performed by default.
 */
export const vueComponentProp = (validator?: Validator): PropOptionsGenerator<VueComponent> =>
  propOptionsGenerator<VueComponent>([Object, String], validator);
