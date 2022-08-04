import { expectAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { oneOfTypesProp } from '../../src/prop-types/oneOfTypes';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

const options = [Number, String];
type Options = number | string

describe('oneOfTypesProp().optional', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<Options | undefined>>(oneOfTypesProp<Options>(options).optional);

    expectType<Vue2ComponentWithProp<Options | undefined>>(
      createVue2Component(oneOfTypesProp<Options>(options).optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<Options | undefined>>(oneOfTypesProp<Options>(options).optional);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<Options | undefined>>(oneOfTypesProp<Options>(options).optional);
  });
});

describe('oneOfTypesProp().nullable', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<Options | null>>(oneOfTypesProp<Options>(options).nullable);

    expectType<Vue2ComponentWithProp<Options | null>>(
      createVue2Component(oneOfTypesProp<Options>(options).nullable),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<Options | null>>(oneOfTypesProp<Options>(options).nullable);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<Options | null>>(oneOfTypesProp<Options>(options).nullable);
  });
});

describe('oneOfTypesProp().withDefault', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<Options>>(oneOfTypesProp<Options>(options).withDefault('a'));

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfTypesProp<Options>(options).withDefault('a')),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<Options>>(oneOfTypesProp<Options>(options).withDefault('a'));
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<Options>>(oneOfTypesProp<Options>(options).withDefault('a'));
  });
});

describe('oneOfTypesProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<Options>>(oneOfTypesProp<Options>(options).required);

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfTypesProp<Options>(options).required),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<Options>>(oneOfTypesProp<Options>(options).required);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<Options>>(oneOfTypesProp<Options>(options).required);
  });
});
