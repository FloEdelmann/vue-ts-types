import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import { functionProp } from '../../src/prop-types/function';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

/* eslint-disable @typescript-eslint/ban-types */

type MyCustomCallback = (parameter: string) => Promise<boolean>

describe('functionProp().optional', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<Function | undefined>>(functionProp().optional);
    expectAssignable<Vue2_6.PropOptions<MyCustomCallback | undefined>>(functionProp<MyCustomCallback>().optional);
    expectNotAssignable<Vue2_6.PropOptions<Function>>(functionProp().optional);
    expectNotAssignable<Vue2_6.PropOptions<MyCustomCallback>>(functionProp<MyCustomCallback>().optional);

    expectType<Vue2ComponentWithProp<Function | undefined>>(
      createVue2Component(functionProp().optional),
    );

    expectType<Vue2ComponentWithProp<MyCustomCallback | undefined>>(
      createVue2Component(functionProp<MyCustomCallback>().optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<Function | undefined>>(functionProp().optional);
    expectAssignable<Vue2_7.PropOptions<MyCustomCallback | undefined>>(functionProp<MyCustomCallback>().optional);
    expectNotAssignable<Vue2_7.PropOptions<Function>>(functionProp().optional);
    expectNotAssignable<Vue2_7.PropOptions<MyCustomCallback>>(functionProp<MyCustomCallback>().optional);
  });
});

describe('functionProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<Function>>(functionProp().required);
    expectAssignable<Vue2_6.PropOptions<MyCustomCallback>>(functionProp<MyCustomCallback>().required);
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
    expectAssignable<Vue2_7.PropOptions<MyCustomCallback>>(functionProp<MyCustomCallback>().required);
    expectNotAssignable<Vue2_7.PropOptions<string>>(functionProp().required);
  });
});
