import { expectAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { oneOfTypesProp, oneOfTypesDefaultProp, oneOfTypesRequiredProp } from '../../src/prop-types/oneOfTypes';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

const options = [Number, String];
type Options = number | string

describe('oneOfTypesProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options | undefined>>(oneOfTypesProp<Options>(options));

    expectType<Vue2ComponentWithProp<Options | undefined>>(
      createVue2Component(oneOfTypesProp<Options>(options)),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options | undefined>>(oneOfTypesProp<Options>(options));
  });
});

describe('oneOfTypesDefaultProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options>>(oneOfTypesDefaultProp<Options>(options, 'a'));

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfTypesDefaultProp<Options>(options, 'a')),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options>>(oneOfTypesDefaultProp<Options>(options, 'a'));
  });
});

describe('oneOfTypesRequiredProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<Options>>(oneOfTypesRequiredProp<Options>(options));

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfTypesRequiredProp<Options>(options)),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<Options>>(oneOfTypesRequiredProp<Options>(options));
  });
});
