import { expectAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { oneOfTypesProp } from '../../src/prop-types/oneOfTypes';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

const options = [Number, String];
type Options = number | string

describe('oneOfTypesProp().optional', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options | undefined>>(oneOfTypesProp<Options>(options).optional);

    expectType<Vue2ComponentWithProp<Options | undefined>>(
      createVue2Component(oneOfTypesProp<Options>(options).optional),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options | undefined>>(oneOfTypesProp<Options>(options).optional);
  });
});

describe('oneOfTypesProp().nullable', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options | null>>(oneOfTypesProp<Options>(options).nullable);

    expectType<Vue2ComponentWithProp<Options | null>>(
      createVue2Component(oneOfTypesProp<Options>(options).nullable),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options | null>>(oneOfTypesProp<Options>(options).nullable);
  });
});

describe('oneOfTypesProp().withDefault', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options>>(oneOfTypesProp<Options>(options).withDefault('a'));

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfTypesProp<Options>(options).withDefault('a')),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options>>(oneOfTypesProp<Options>(options).withDefault('a'));
  });
});

describe('oneOfTypesProp().required', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options>>(oneOfTypesProp<Options>(options).required);

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfTypesProp<Options>(options).required),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options>>(oneOfTypesProp<Options>(options).required);
  });
});
