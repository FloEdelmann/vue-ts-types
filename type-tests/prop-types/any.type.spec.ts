import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { anyProp } from '../../src/prop-types/any';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('anyProp().optional', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions>(anyProp().optional);
    expectAssignable<Vue2_6.PropOptions<number>>(anyProp().optional);
    expectAssignable<Vue2_6.PropOptions<string>>(anyProp().optional);
    expectAssignable<Vue2_6.PropOptions<string | undefined>>(anyProp<string>().optional);
    expectNotAssignable<Vue2_6.PropOptions<string>>(anyProp<string>().optional);

    expectType<Vue2ComponentWithProp<any>>(
      createVue2Component(anyProp().optional),
    );

    expectType<Vue2ComponentWithProp<string | undefined>>(
      createVue2Component(anyProp<string>().optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions>(anyProp().optional);
    expectAssignable<Vue2_7.PropOptions<number>>(anyProp().optional);
    expectAssignable<Vue2_7.PropOptions<string>>(anyProp().optional);
    expectAssignable<Vue2_7.PropOptions<string | undefined>>(anyProp<string>().optional);
    expectNotAssignable<Vue2_7.PropOptions<string>>(anyProp<string>().optional);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<any>>(anyProp().optional);
    expectAssignable<Vue3.Prop<number>>(anyProp().optional);
    expectAssignable<Vue3.Prop<string>>(anyProp().optional);
    expectAssignable<Vue3.Prop<string | undefined>>(anyProp<string>().optional);
    expectNotAssignable<Vue3.Prop<string>>(anyProp<string>().optional);
  });
});

describe('anyProp().withDefault', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions>(anyProp().withDefault('foo'));
    expectAssignable<Vue2_6.PropOptions<string>>(anyProp().withDefault('foo'));
    expectAssignable<Vue2_6.PropOptions<number>>(anyProp().withDefault('foo'));
    expectAssignable<Vue2_6.PropOptions<string>>(anyProp<string>().withDefault('foo'));
    expectNotAssignable<Vue2_6.PropOptions<number>>(anyProp<string>().withDefault('foo'));

    expectType<Vue2ComponentWithProp<any>>(
      createVue2Component(anyProp().withDefault('foo')),
    );

    expectType<Vue2ComponentWithProp<string>>(
      createVue2Component(anyProp<string>().withDefault('foo')),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions>(anyProp().withDefault('foo'));
    expectAssignable<Vue2_7.PropOptions<string>>(anyProp().withDefault('foo'));
    expectAssignable<Vue2_7.PropOptions<number>>(anyProp().withDefault('foo'));
    expectAssignable<Vue2_7.PropOptions<string>>(anyProp<string>().withDefault('foo'));
    expectNotAssignable<Vue2_7.PropOptions<number>>(anyProp<string>().withDefault('foo'));
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<any>>(anyProp().withDefault('foo'));
    expectAssignable<Vue3.Prop<string>>(anyProp().withDefault('foo'));
    expectAssignable<Vue3.Prop<number>>(anyProp().withDefault('foo'));
    expectAssignable<Vue3.Prop<string>>(anyProp<string>().withDefault('foo'));
    expectNotAssignable<Vue3.Prop<number>>(anyProp<string>().withDefault('foo'));
  });
});

describe('anyProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions>(anyProp().required);
    expectAssignable<Vue2_6.PropOptions<string>>(anyProp().required);
    expectAssignable<Vue2_6.PropOptions<string>>(anyProp<string>().required);
    expectNotAssignable<Vue2_6.PropOptions<number>>(anyProp<string>().required);

    expectType<Vue2ComponentWithProp<any>>(
      createVue2Component(anyProp().required),
    );

    expectType<Vue2ComponentWithProp<string>>(
      createVue2Component(anyProp<string>().required),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions>(anyProp().required);
    expectAssignable<Vue2_7.PropOptions<string>>(anyProp().required);
    expectAssignable<Vue2_7.PropOptions<string>>(anyProp<string>().required);
    expectNotAssignable<Vue2_7.PropOptions<number>>(anyProp<string>().required);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<any>>(anyProp().required);
    expectAssignable<Vue3.Prop<string>>(anyProp().required);
    expectAssignable<Vue3.Prop<string>>(anyProp<string>().required);
    expectNotAssignable<Vue3.Prop<number>>(anyProp<string>().required);
  });
});
