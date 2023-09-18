import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { functionProp } from '../../src/prop-types/function';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

/* eslint-disable @typescript-eslint/ban-types */

type MyCustomCallback = (parameter: string) => Promise<boolean>;

describe('functionProp().optional', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<Function | undefined>>(
      functionProp().optional,
    );
    expectAssignable<Vue2_6.PropOptions<MyCustomCallback | undefined>>(
      functionProp<MyCustomCallback>().optional,
    );
    expectNotAssignable<Vue2_6.PropOptions<Function>>(functionProp().optional);
    expectNotAssignable<Vue2_6.PropOptions<MyCustomCallback>>(
      functionProp<MyCustomCallback>().optional,
    );

    expectType<Vue2ComponentWithProp<Function | undefined>>(
      createVue2Component(functionProp().optional),
    );

    expectType<Vue2ComponentWithProp<MyCustomCallback | undefined>>(
      createVue2Component(functionProp<MyCustomCallback>().optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<Function | undefined>>(
      functionProp().optional,
    );
    expectAssignable<Vue2_7.PropOptions<MyCustomCallback | undefined>>(
      functionProp<MyCustomCallback>().optional,
    );
    expectNotAssignable<Vue2_7.PropOptions<Function>>(functionProp().optional);
    expectNotAssignable<Vue2_7.PropOptions<MyCustomCallback>>(
      functionProp<MyCustomCallback>().optional,
    );
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<Function | undefined>>(functionProp().optional);
    expectAssignable<Vue3.Prop<MyCustomCallback | undefined>>(
      functionProp<MyCustomCallback>().optional,
    );
    expectNotAssignable<Vue3.Prop<Function>>(functionProp().optional);
    expectNotAssignable<Vue3.Prop<MyCustomCallback>>(
      functionProp<MyCustomCallback>().optional,
    );
  });
});

describe('functionProp().nullable', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<Function | null>>(
      functionProp().nullable,
    );
    expectAssignable<Vue2_6.PropOptions<MyCustomCallback | null>>(
      functionProp<MyCustomCallback>().nullable,
    );
    expectNotAssignable<Vue2_6.PropOptions<Function>>(functionProp().nullable);
    expectNotAssignable<Vue2_6.PropOptions<MyCustomCallback>>(
      functionProp<MyCustomCallback>().nullable,
    );

    expectType<Vue2ComponentWithProp<Function | null>>(
      createVue2Component(functionProp().nullable),
    );

    expectType<Vue2ComponentWithProp<MyCustomCallback | null>>(
      createVue2Component(functionProp<MyCustomCallback>().nullable),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<Function | null>>(
      functionProp().nullable,
    );
    expectAssignable<Vue2_7.PropOptions<MyCustomCallback | null>>(
      functionProp<MyCustomCallback>().nullable,
    );
    expectNotAssignable<Vue2_7.PropOptions<Function>>(functionProp().nullable);
    expectNotAssignable<Vue2_7.PropOptions<MyCustomCallback>>(
      functionProp<MyCustomCallback>().nullable,
    );
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<Function | null>>(functionProp().nullable);
    expectAssignable<Vue3.Prop<MyCustomCallback | null>>(
      functionProp<MyCustomCallback>().nullable,
    );
    expectNotAssignable<Vue3.Prop<Function>>(functionProp().nullable);
    expectNotAssignable<Vue3.Prop<MyCustomCallback>>(
      functionProp<MyCustomCallback>().nullable,
    );
  });
});

describe('functionProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<Function>>(functionProp().required);
    expectAssignable<Vue2_6.PropOptions<MyCustomCallback>>(
      functionProp<MyCustomCallback>().required,
    );
    expectNotAssignable<Vue2_6.PropOptions<string>>(functionProp().required);

    expectType<Vue2ComponentWithProp<Function>>(
      createVue2Component(functionProp().required),
    );

    expectType<Vue2ComponentWithProp<MyCustomCallback>>(
      createVue2Component(functionProp<MyCustomCallback>().required),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<Function>>(functionProp().required);
    expectAssignable<Vue2_7.PropOptions<MyCustomCallback>>(
      functionProp<MyCustomCallback>().required,
    );
    expectNotAssignable<Vue2_7.PropOptions<string>>(functionProp().required);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<Function>>(functionProp().required);
    expectAssignable<Vue3.Prop<MyCustomCallback>>(
      functionProp<MyCustomCallback>().required,
    );
    expectNotAssignable<Vue3.Prop<string>>(functionProp().required);
  });
});
