import { expectAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import { oneOfObjectKeysProp } from '../../src/prop-types/oneOfObjectKeys';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

const options = { a: 'a', b: 'b', c: 'c' };
type Options = 'a' | 'b' | 'c';

describe('oneOfObjectKeysProp().optional', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<Options | undefined>>(oneOfObjectKeysProp(options).optional);

    expectType<Vue2ComponentWithProp<Options | undefined>>(
      createVue2Component(oneOfObjectKeysProp(options).optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<Options | undefined>>(oneOfObjectKeysProp(options).optional);
  });
});

describe('oneOfObjectKeysProp().withDefault', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<Options>>(oneOfObjectKeysProp(options).withDefault('a'));

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfObjectKeysProp(options).withDefault('a')),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<Options>>(oneOfObjectKeysProp(options).withDefault('a'));
  });
});

describe('oneOfObjectKeysProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<Options>>(oneOfObjectKeysProp(options).required);

    expectType<Vue2ComponentWithProp<Options>>(
      createVue2Component(oneOfObjectKeysProp(options).required),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<Options>>(oneOfObjectKeysProp(options).required);
  });
});
