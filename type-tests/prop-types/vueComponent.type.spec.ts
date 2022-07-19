import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { vueComponentProp } from '../../src/prop-types/vueComponent';
import type { VueComponent } from '../../src/prop-types/vueComponent';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('vueComponentProp().optional', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<VueComponent | undefined>>(vueComponentProp().optional);
    expectNotAssignable<Vue2_6.PropOptions<VueComponent>>(vueComponentProp().optional);

    expectType<Vue2ComponentWithProp<VueComponent | undefined>>(
      createVue2Component(vueComponentProp().optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<VueComponent | undefined>>(vueComponentProp().optional);
    expectNotAssignable<Vue2_7.PropOptions<VueComponent>>(vueComponentProp().optional);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<VueComponent | undefined>>(vueComponentProp().optional);
    expectNotAssignable<Vue3.Prop<VueComponent>>(vueComponentProp().optional);
  });
});

describe('vueComponentProp().nullable', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<VueComponent | null>>(vueComponentProp().nullable);
    expectNotAssignable<Vue2.PropOptions<VueComponent>>(vueComponentProp().nullable);

    expectType<Vue2ComponentWithProp<VueComponent | null>>(
      createVue2Component(vueComponentProp().nullable),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<VueComponent | null>>(vueComponentProp().nullable);
    expectNotAssignable<CompositionApi.PropOptions<VueComponent>>(vueComponentProp().nullable);
  });
});

describe('vueComponentProp().withDefault', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<VueComponent>>(vueComponentProp().withDefault('foo'));
    expectNotAssignable<Vue2_6.PropOptions<string>>(vueComponentProp().withDefault('foo'));

    expectType<Vue2ComponentWithProp<VueComponent>>(
      createVue2Component(vueComponentProp().withDefault('foo')),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<VueComponent>>(vueComponentProp().withDefault('foo'));
    expectNotAssignable<Vue2_7.PropOptions<string>>(vueComponentProp().withDefault('foo'));
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<VueComponent>>(vueComponentProp().withDefault('foo'));
    expectNotAssignable<Vue3.Prop<string>>(vueComponentProp().withDefault('foo'));
  });
});

describe('vueComponentProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<VueComponent>>(vueComponentProp().required);
    expectNotAssignable<Vue2_6.PropOptions<string>>(vueComponentProp().required);

    expectType<Vue2ComponentWithProp<VueComponent>>(
      createVue2Component(vueComponentProp().required),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<VueComponent>>(vueComponentProp().required);
    expectNotAssignable<Vue2_7.PropOptions<string>>(vueComponentProp().required);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<VueComponent>>(vueComponentProp().required);
    expectNotAssignable<Vue3.Prop<string>>(vueComponentProp().required);
  });
});
