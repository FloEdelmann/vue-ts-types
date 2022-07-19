import { expectAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { oneOfProp } from '../../src/prop-types/oneOf';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

const options = ['a', 'b', 'c'] as const;
type Options = 'a' | 'b' | 'c';

describe('oneOfProp().optional', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<string | undefined>>(oneOfProp(['a', 'b', 'c']).optional);
    expectAssignable<Vue2_6.PropOptions<Options | undefined>>(oneOfProp(options).optional);

    expectType<Vue2ComponentWithProp<Options | undefined>>(
      createVue2Component(oneOfProp(options).optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<string | undefined>>(oneOfProp(['a', 'b', 'c']).optional);
    expectAssignable<Vue2_7.PropOptions<Options | undefined>>(oneOfProp(options).optional);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<string | undefined>>(oneOfProp(['a', 'b', 'c']).optional);
    expectAssignable<Vue3.Prop<Options | undefined>>(oneOfProp(options).optional);
  });
});

describe('oneOfProp().nullable', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<string | null>>(oneOfProp(['a', 'b', 'c']).nullable);
    expectAssignable<Vue2.PropOptions<Options | null>>(oneOfProp(options).nullable);

    expectType<Vue2ComponentWithProp<Options | null>>(
      createVue2Component(oneOfProp(options).nullable),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<string | null>>(oneOfProp(['a', 'b', 'c']).nullable);
    expectAssignable<CompositionApi.PropOptions<Options | null>>(oneOfProp(options).nullable);
  });
});

describe('oneOfProp().withDefault', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<Options>>(oneOfProp(options).withDefault('a'));

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfProp(options).withDefault('a')),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<Options>>(oneOfProp(options).withDefault('a'));
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<Options>>(oneOfProp(options).withDefault('a'));
  });
});

describe('oneOfProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<Options>>(oneOfProp(options).required);

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfProp(options).required),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<Options>>(oneOfProp(options).required);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<Options>>(oneOfProp(options).required);
  });
});
