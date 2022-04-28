import { expectAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { oneOfObjectKeysProp, oneOfObjectKeysDefaultProp, oneOfObjectKeysRequiredProp } from '../../src/prop-types/oneOfObjectKeys';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

const options = { a: 'a', b: 'b', c: 'c' };
type Options = 'a' | 'b' | 'c';

describe('oneOfObjectKeysProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options | undefined>>(oneOfObjectKeysProp(options));

    expectType<Vue2ComponentWithProp<Options | undefined>>(
      createVue2Component(oneOfObjectKeysProp(options)),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options | undefined>>(oneOfObjectKeysProp(options));
  });
});

describe('oneOfObjectKeysDefaultProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options>>(oneOfObjectKeysDefaultProp(options, 'a'));

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfObjectKeysDefaultProp(options, 'a')),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options>>(oneOfObjectKeysDefaultProp(options, 'a'));
  });
});

describe('oneOfObjectKeysRequiredProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options>>(oneOfObjectKeysRequiredProp(options));

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfObjectKeysRequiredProp(options)),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options>>(oneOfObjectKeysRequiredProp(options));
  });
});
