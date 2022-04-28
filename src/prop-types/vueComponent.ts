import type { ComponentOptions, VueConstructor } from 'vue';
import type { DefaultPropOptions, RequiredPropOptions } from '../types';
import type { Validator } from '../validators';
import { vuePropValidator } from '../validators';

export type VueComponent = ComponentOptions<Vue> | VueConstructor<Vue> | string

export const vueComponentProp = (validator?: Validator): DefaultPropOptions<VueComponent | undefined> => ({
  type: [Object, String],
  required: false,
  default: undefined,
  validator: vuePropValidator(validator),
});

export const vueComponentRequiredProp = (validator?: Validator): RequiredPropOptions<VueComponent> => ({
  type: [Object, String],
  required: true,
  validator: vuePropValidator(validator),
});
