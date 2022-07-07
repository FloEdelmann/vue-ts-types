import { expectAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
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
});
