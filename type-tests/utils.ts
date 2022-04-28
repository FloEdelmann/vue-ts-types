import Vue from 'vue';
import type { ExtendedVue } from 'vue/types/vue';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createVue2Component = <T>(prop: T) => Vue.component('test', {
  props: { prop },
});

export type Vue2ComponentWithProp<T> = ExtendedVue<Vue, unknown, unknown, unknown, { prop: T }>
