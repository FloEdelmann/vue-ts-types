import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { oneOfObjectKeysProp } from '../../src/prop-types/oneOfObjectKeys';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

const options = { a: 'a', b: 'b', c: 'c' };
type Options = 'a' | 'b' | 'c';

describe('oneOfObjectKeysProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Options | undefined>>().type.toBeAssignable(
      oneOfObjectKeysProp(options).optional,
    );

    expect(
      createVue2Component(oneOfObjectKeysProp(options).optional),
    ).type.toEqual<Vue2ComponentWithProp<Options | undefined>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Options | undefined>>().type.toBeAssignable(
      oneOfObjectKeysProp(options).optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Options | undefined>>().type.toBeAssignable(
      oneOfObjectKeysProp(options).optional,
    );
  });
});

describe('oneOfObjectKeysProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Options | null>>().type.toBeAssignable(
      oneOfObjectKeysProp(options).nullable,
    );

    expect(
      createVue2Component(oneOfObjectKeysProp(options).nullable),
    ).type.toEqual<Vue2ComponentWithProp<Options | null>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Options | null>>().type.toBeAssignable(
      oneOfObjectKeysProp(options).nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Options | null>>().type.toBeAssignable(
      oneOfObjectKeysProp(options).nullable,
    );
  });
});

describe('oneOfObjectKeysProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Options>>().type.toBeAssignable(
      oneOfObjectKeysProp(options).withDefault('a'),
    );

    expect(
      createVue2Component(oneOfObjectKeysProp(options).withDefault('a')),
    ).type.toEqual<Vue2ComponentWithProp<Options>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Options>>().type.toBeAssignable(
      oneOfObjectKeysProp(options).withDefault('a'),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Options>>().type.toBeAssignable(
      oneOfObjectKeysProp(options).withDefault('a'),
    );
  });
});

describe('oneOfObjectKeysProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Options>>().type.toBeAssignable(
      oneOfObjectKeysProp(options).required,
    );

    expect(
      createVue2Component(oneOfObjectKeysProp(options).required),
    ).type.toEqual<Vue2ComponentWithProp<Options>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Options>>().type.toBeAssignable(
      oneOfObjectKeysProp(options).required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Options>>().type.toBeAssignable(
      oneOfObjectKeysProp(options).required,
    );
  });
});
