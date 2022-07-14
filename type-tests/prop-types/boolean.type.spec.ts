import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { booleanProp } from '../../src/prop-types/boolean';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('booleanProp().optional', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<boolean | undefined>>(booleanProp().optional);
    expectNotAssignable<Vue2_6.PropOptions<boolean>>(booleanProp().optional);

    expectType<Vue2ComponentWithProp<boolean | undefined>>(
      createVue2Component(booleanProp().optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<boolean | undefined>>(booleanProp().optional);
    expectNotAssignable<Vue2_7.PropOptions<boolean>>(booleanProp().optional);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<boolean | undefined>>(booleanProp().optional);
    expectNotAssignable<Vue3.Prop<boolean>>(booleanProp().optional);
  });
});

describe('booleanProp().nullable', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<boolean | null>>(booleanProp().nullable);
    expectNotAssignable<Vue2.PropOptions<boolean>>(booleanProp().nullable);

    expectType<Vue2ComponentWithProp<boolean | null>>(
      createVue2Component(booleanProp().nullable),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<boolean | null>>(booleanProp().nullable);
    expectNotAssignable<CompositionApi.PropOptions<boolean>>(booleanProp().nullable);
  });
});

describe('booleanProp().withDefault(false)', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<boolean>>(booleanProp().withDefault(false));
    expectNotAssignable<Vue2_6.PropOptions<string>>(booleanProp().withDefault(false));

    expectType<Vue2ComponentWithProp<boolean>>(
      createVue2Component(booleanProp().withDefault(false)),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<boolean>>(booleanProp().withDefault(false));
    expectNotAssignable<Vue2_7.PropOptions<string>>(booleanProp().withDefault(false));
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<boolean>>(booleanProp().withDefault(false));
    expectNotAssignable<Vue3.Prop<string>>(booleanProp().withDefault(false));
  });
});

describe('booleanProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<boolean>>(booleanProp().required);
    expectNotAssignable<Vue2_6.PropOptions<string>>(booleanProp().required);

    expectType<Vue2ComponentWithProp<boolean>>(
      createVue2Component(booleanProp().required),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<boolean>>(booleanProp().required);
    expectNotAssignable<Vue2_7.PropOptions<string>>(booleanProp().required);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<boolean>>(booleanProp().required);
    expectNotAssignable<Vue3.Prop<string>>(booleanProp().required);
  });
});
