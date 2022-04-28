import { expectAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { oneOfProp, oneOfDefaultProp, oneOfRequiredProp } from '../../src/prop-types/oneOf';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

const options = ['a', 'b', 'c'] as const;
type Options = 'a' | 'b' | 'c';

describe('oneOfProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<string | undefined>>(oneOfProp(['a', 'b', 'c']));
    expectAssignable<Vue2.PropOptions<Options | undefined>>(oneOfProp(options));

    expectType<Vue2ComponentWithProp<Options | undefined>>(
      createVue2Component(oneOfProp(options)),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<string | undefined>>(oneOfProp(['a', 'b', 'c']));
    expectAssignable<CompositionApi.PropOptions<Options | undefined>>(oneOfProp(options));
  });
});

describe('oneOfDefaultProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options>>(oneOfDefaultProp(options, 'a'));

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfDefaultProp(options, 'a')),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options>>(oneOfDefaultProp(options, 'a'));
  });
});

describe('oneOfRequiredProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options>>(oneOfRequiredProp(options));

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfRequiredProp(options)),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options>>(oneOfRequiredProp(options));
  });
});
