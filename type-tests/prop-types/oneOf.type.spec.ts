import { expectAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { oneOfProp } from '../../src/prop-types/oneOf';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

const options = ['a', 'b', 'c'] as const;
type Options = 'a' | 'b' | 'c';

describe('oneOfProp().optional', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<string | undefined>>(oneOfProp(['a', 'b', 'c']).optional);
    expectAssignable<Vue2.PropOptions<Options | undefined>>(oneOfProp(options).optional);

    expectType<Vue2ComponentWithProp<Options | undefined>>(
      createVue2Component(oneOfProp(options).optional),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<string | undefined>>(oneOfProp(['a', 'b', 'c']).optional);
    expectAssignable<CompositionApi.PropOptions<Options | undefined>>(oneOfProp(options).optional);
  });
});

describe('oneOfProp().withDefault', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options>>(oneOfProp(options).withDefault('a'));

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfProp(options).withDefault('a')),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options>>(oneOfProp(options).withDefault('a'));
  });
});

describe('oneOfProp().required', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options>>(oneOfProp(options).required);

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfProp(options).required),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options>>(oneOfProp(options).required);
  });
});
