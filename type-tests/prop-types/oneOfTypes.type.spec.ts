import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { oneOfTypesProp } from '../../src/prop-types/oneOfTypes';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

const options = [Number, String];
type Options = number | string;

describe('oneOfTypesProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Options | undefined>>().type.toBeAssignableWith(
      oneOfTypesProp<Options>(options).optional,
    );

    expect(
      createVue2Component(oneOfTypesProp<Options>(options).optional),
    ).type.toBe<Vue2ComponentWithProp<Options | undefined>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Options | undefined>>().type.toBeAssignableWith(
      oneOfTypesProp<Options>(options).optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Options | undefined>>().type.toBeAssignableWith(
      oneOfTypesProp<Options>(options).optional,
    );
  });
});

describe('oneOfTypesProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Options | null>>().type.toBeAssignableWith(
      oneOfTypesProp<Options>(options).nullable,
    );

    expect(
      createVue2Component(oneOfTypesProp<Options>(options).nullable),
    ).type.toBe<Vue2ComponentWithProp<Options | null>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Options | null>>().type.toBeAssignableWith(
      oneOfTypesProp<Options>(options).nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Options | null>>().type.toBeAssignableWith(
      oneOfTypesProp<Options>(options).nullable,
    );
  });
});

describe('oneOfTypesProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Options>>().type.toBeAssignableWith(
      oneOfTypesProp<Options>(options).withDefault('a'),
    );

    expect(
      createVue2Component(oneOfTypesProp<Options>(options).withDefault('a')),
    ).type.toBe<Vue2ComponentWithProp<Options>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Options>>().type.toBeAssignableWith(
      oneOfTypesProp<Options>(options).withDefault('a'),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Options>>().type.toBeAssignableWith(
      oneOfTypesProp<Options>(options).withDefault('a'),
    );
  });
});

describe('oneOfTypesProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Options>>().type.toBeAssignableWith(
      oneOfTypesProp<Options>(options).required,
    );

    expect(
      createVue2Component(oneOfTypesProp<Options>(options).required),
    ).type.toBe<Vue2ComponentWithProp<Options>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Options>>().type.toBeAssignableWith(
      oneOfTypesProp<Options>(options).required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Options>>().type.toBeAssignableWith(
      oneOfTypesProp<Options>(options).required,
    );
  });
});
