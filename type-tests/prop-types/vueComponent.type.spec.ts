import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { vueComponentProp, vueComponentRequiredProp } from '../../src/prop-types/vueComponent';
import type { VueComponent } from '../../src/prop-types/vueComponent';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('vueComponentProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<VueComponent | undefined>>(vueComponentProp());
    expectNotAssignable<Vue2.PropOptions<VueComponent>>(vueComponentProp());

    expectType<Vue2ComponentWithProp<VueComponent | undefined>>(
      createVue2Component(vueComponentProp()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<VueComponent | undefined>>(vueComponentProp());
    expectNotAssignable<CompositionApi.PropOptions<VueComponent>>(vueComponentProp());
  });
});

describe('vueComponentRequiredProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<VueComponent>>(vueComponentRequiredProp());
    expectNotAssignable<Vue2.PropOptions<string>>(vueComponentRequiredProp());

    expectType<Vue2ComponentWithProp<VueComponent>>(
      createVue2Component(vueComponentRequiredProp()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<VueComponent>>(vueComponentRequiredProp());
    expectNotAssignable<CompositionApi.PropOptions<string>>(vueComponentRequiredProp());
  });
});
