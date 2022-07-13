import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { arrayProp } from '../../src/prop-types/array';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('arrayProp().optional', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<unknown[] | undefined>>(arrayProp().optional);
    expectAssignable<Vue2_6.PropOptions<string[] | undefined>>(arrayProp<string>().optional);
    expectNotAssignable<Vue2_6.PropOptions<unknown[]>>(arrayProp().optional);
    expectNotAssignable<Vue2_6.PropOptions<string[]>>(arrayProp<string>().optional);

    expectType<Vue2ComponentWithProp<unknown[] | undefined>>(
      createVue2Component(arrayProp().optional),
    );

    expectType<Vue2ComponentWithProp<string[] | undefined>>(
      createVue2Component(arrayProp<string>().optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<unknown[] | undefined>>(arrayProp().optional);
    expectAssignable<Vue2_7.PropOptions<string[] | undefined>>(arrayProp<string>().optional);
    expectNotAssignable<Vue2_7.PropOptions<unknown[]>>(arrayProp().optional);
    expectNotAssignable<Vue2_7.PropOptions<string[]>>(arrayProp<string>().optional);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<unknown[] | undefined>>(arrayProp().optional);
    expectAssignable<Vue3.Prop<string[] | undefined>>(arrayProp<string>().optional);
    expectNotAssignable<Vue3.Prop<unknown[]>>(arrayProp().optional);
    expectNotAssignable<Vue3.Prop<string[]>>(arrayProp<string>().optional);
  });
});

describe('arrayProp().withDefault', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<unknown[]>>(arrayProp().withDefault(() => ['foo', 'bar']));
    expectNotAssignable<Vue2_6.PropOptions<string[]>>(arrayProp().withDefault(() => ['foo', 'bar']));
    expectAssignable<Vue2_6.PropOptions<string[]>>(arrayProp<string>().withDefault(() => ['foo', 'bar']));

    expectType<Vue2ComponentWithProp<string[]>>(
      createVue2Component(arrayProp<string>().withDefault(() => ['foo', 'bar'])),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<unknown[]>>(arrayProp().withDefault(() => ['foo', 'bar']));
    expectNotAssignable<Vue2_7.PropOptions<string[]>>(arrayProp().withDefault(() => ['foo', 'bar']));
    expectAssignable<Vue2_7.PropOptions<string[]>>(arrayProp<string>().withDefault(() => ['foo', 'bar']));
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<unknown[]>>(arrayProp().withDefault(() => ['foo', 'bar']));
    expectNotAssignable<Vue3.Prop<string[]>>(arrayProp().withDefault(() => ['foo', 'bar']));
    expectAssignable<Vue3.Prop<string[]>>(arrayProp<string>().withDefault(() => ['foo', 'bar']));
  });
});

describe('arrayProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<unknown[]>>(arrayProp().required);
    expectAssignable<Vue2_6.PropOptions<string[]>>(arrayProp<string>().required);
    expectNotAssignable<Vue2_6.PropOptions<number[]>>(arrayProp<string>().required);

    expectType<Vue2ComponentWithProp<unknown[]>>(
      createVue2Component(arrayProp().required),
    );

    expectType<Vue2ComponentWithProp<string[]>>(
      createVue2Component(arrayProp<string>().required),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<unknown[]>>(arrayProp().required);
    expectAssignable<Vue2_7.PropOptions<string[]>>(arrayProp<string>().required);
    expectNotAssignable<Vue2_7.PropOptions<number[]>>(arrayProp<string>().required);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<unknown[]>>(arrayProp().required);
    expectAssignable<Vue3.Prop<string[]>>(arrayProp<string>().required);
    expectNotAssignable<Vue3.Prop<number[]>>(arrayProp<string>().required);
  });
});
