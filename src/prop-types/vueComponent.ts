import type { ComponentOptions, VueConstructor } from 'vue';
import type { PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';

export type VueComponent = ComponentOptions<Vue> | VueConstructor<Vue> | string

export const vueComponentProp = (validator?: Validator): PropOptionsGenerator<VueComponent> =>
  propOptionsGenerator<VueComponent>([Object, String], validator);
