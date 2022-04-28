import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { functionProp, functionRequiredProp } from '../../src/prop-types/function';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

/* eslint-disable @typescript-eslint/ban-types */

type MyCustomCallback = (parameter: string) => Promise<boolean>

describe('functionProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Function | undefined>>(functionProp());
    expectAssignable<Vue2.PropOptions<MyCustomCallback | undefined>>(functionProp<MyCustomCallback>());
    expectNotAssignable<Vue2.PropOptions<Function>>(functionProp());
    expectNotAssignable<Vue2.PropOptions<MyCustomCallback>>(functionProp<MyCustomCallback>());

    expectType<Vue2ComponentWithProp<Function | undefined>>(
      createVue2Component(functionProp()),
    );

    expectType<Vue2ComponentWithProp<MyCustomCallback | undefined>>(
      createVue2Component(functionProp<MyCustomCallback>()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Function | undefined>>(functionProp());
    expectAssignable<CompositionApi.PropOptions<MyCustomCallback | undefined>>(functionProp<MyCustomCallback>());
    expectNotAssignable<CompositionApi.PropOptions<Function>>(functionProp());
    expectNotAssignable<CompositionApi.PropOptions<MyCustomCallback>>(functionProp<MyCustomCallback>());
  });
});

describe('functionRequiredProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Function>>(functionRequiredProp());
    expectAssignable<Vue2.PropOptions<MyCustomCallback>>(functionRequiredProp<MyCustomCallback>());
    expectNotAssignable<Vue2.PropOptions<string>>(functionRequiredProp());

    expectType<Vue2ComponentWithProp<Function>>(
      createVue2Component(functionRequiredProp()),
    );

    expectType<Vue2ComponentWithProp<MyCustomCallback>>(
      createVue2Component(functionRequiredProp<MyCustomCallback>()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Function>>(functionRequiredProp());
    expectAssignable<CompositionApi.PropOptions<MyCustomCallback>>(functionRequiredProp<MyCustomCallback>());
    expectNotAssignable<CompositionApi.PropOptions<string>>(functionRequiredProp());
  });
});
