import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
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
});
