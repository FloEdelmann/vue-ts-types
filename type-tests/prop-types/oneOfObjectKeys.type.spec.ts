import { expectAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { oneOfObjectKeysProp } from '../../src/prop-types/oneOfObjectKeys';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

const options = { a: 'a', b: 'b', c: 'c' };
type Options = 'a' | 'b' | 'c';

describe('oneOfObjectKeysProp().optional', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options | undefined>>(oneOfObjectKeysProp(options).optional);

    expectType<Vue2ComponentWithProp<Options | undefined>>(
      createVue2Component(oneOfObjectKeysProp(options).optional),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options | undefined>>(oneOfObjectKeysProp(options).optional);
  });
});

describe('oneOfObjectKeysProp().nullable', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options | null>>(oneOfObjectKeysProp(options).nullable);

    expectType<Vue2ComponentWithProp<Options | null>>(
      createVue2Component(oneOfObjectKeysProp(options).nullable),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options | null>>(oneOfObjectKeysProp(options).nullable);
  });
});

describe('oneOfObjectKeysProp().withDefault', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options>>(oneOfObjectKeysProp(options).withDefault('a'));

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfObjectKeysProp(options).withDefault('a')),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options>>(oneOfObjectKeysProp(options).withDefault('a'));
  });
});

describe('oneOfObjectKeysProp().required', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options>>(oneOfObjectKeysProp(options).required);

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfObjectKeysProp(options).required),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options>>(oneOfObjectKeysProp(options).required);
  });
});
