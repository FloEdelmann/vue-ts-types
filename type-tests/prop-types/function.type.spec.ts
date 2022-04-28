import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { functionProp } from '../../src/prop-types/function';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

/* eslint-disable @typescript-eslint/ban-types */

type MyCustomCallback = (parameter: string) => Promise<boolean>

describe('functionProp().optional', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Function | undefined>>(functionProp().optional);
    expectAssignable<Vue2.PropOptions<MyCustomCallback | undefined>>(functionProp<MyCustomCallback>().optional);
    expectNotAssignable<Vue2.PropOptions<Function>>(functionProp().optional);
    expectNotAssignable<Vue2.PropOptions<MyCustomCallback>>(functionProp<MyCustomCallback>().optional);

    expectType<Vue2ComponentWithProp<Function | undefined>>(
      createVue2Component(functionProp().optional),
    );

    expectType<Vue2ComponentWithProp<MyCustomCallback | undefined>>(
      createVue2Component(functionProp<MyCustomCallback>().optional),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Function | undefined>>(functionProp().optional);
    expectAssignable<CompositionApi.PropOptions<MyCustomCallback | undefined>>(functionProp<MyCustomCallback>().optional);
    expectNotAssignable<CompositionApi.PropOptions<Function>>(functionProp().optional);
    expectNotAssignable<CompositionApi.PropOptions<MyCustomCallback>>(functionProp<MyCustomCallback>().optional);
  });
});

describe('functionProp().required', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Function>>(functionProp().required);
    expectAssignable<Vue2.PropOptions<MyCustomCallback>>(functionProp<MyCustomCallback>().required);
    expectNotAssignable<Vue2.PropOptions<string>>(functionProp().required);

    expectType<Vue2ComponentWithProp<Function>>(
      createVue2Component(functionProp().required),
    );

    expectType<Vue2ComponentWithProp<MyCustomCallback>>(
      createVue2Component(functionProp<MyCustomCallback>().required),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Function>>(functionProp().required);
    expectAssignable<CompositionApi.PropOptions<MyCustomCallback>>(functionProp<MyCustomCallback>().required);
    expectNotAssignable<CompositionApi.PropOptions<string>>(functionProp().required);
  });
});
