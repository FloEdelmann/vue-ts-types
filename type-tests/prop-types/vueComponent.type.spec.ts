import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { vueComponentProp } from '../../src/prop-types/vueComponent';
import type { VueComponent } from '../../src/prop-types/vueComponent';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('vueComponentProp().optional', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<VueComponent | undefined>>(vueComponentProp().optional);
    expectNotAssignable<Vue2.PropOptions<VueComponent>>(vueComponentProp().optional);

    expectType<Vue2ComponentWithProp<VueComponent | undefined>>(
      createVue2Component(vueComponentProp().optional),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<VueComponent | undefined>>(vueComponentProp().optional);
    expectNotAssignable<CompositionApi.PropOptions<VueComponent>>(vueComponentProp().optional);
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
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<VueComponent>>(vueComponentProp().withDefault('foo'));
    expectNotAssignable<Vue2.PropOptions<string>>(vueComponentProp().withDefault('foo'));

    expectType<Vue2ComponentWithProp<VueComponent>>(
      createVue2Component(vueComponentProp().withDefault('foo')),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<VueComponent>>(vueComponentProp().withDefault('foo'));
    expectNotAssignable<CompositionApi.PropOptions<string>>(vueComponentProp().withDefault('foo'));
  });
});

describe('vueComponentProp().required', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<VueComponent>>(vueComponentProp().required);
    expectNotAssignable<Vue2.PropOptions<string>>(vueComponentProp().required);

    expectType<Vue2ComponentWithProp<VueComponent>>(
      createVue2Component(vueComponentProp().required),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<VueComponent>>(vueComponentProp().required);
    expectNotAssignable<CompositionApi.PropOptions<string>>(vueComponentProp().required);
  });
});
