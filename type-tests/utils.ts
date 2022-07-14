import Vue from 'vue2-6';
import type { ExtendedVue } from 'vue2-6/types/vue';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createVue2Component = <T>(prop: T) => Vue.component('test', {
  props: { prop },
});

export type Vue2ComponentWithProp<T> = ExtendedVue<Vue, unknown, unknown, unknown, { prop: T }>
