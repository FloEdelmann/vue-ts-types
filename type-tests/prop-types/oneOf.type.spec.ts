import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { oneOfProp } from '../../src/prop-types/oneOf';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

const options = ['a', 'b', 'c'] as const;
type Options = 'a' | 'b' | 'c';

describe('oneOfProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<string | undefined>>().type.toBeAssignable(
      oneOfProp(['a', 'b', 'c']).optional,
    );
    expect<Vue2_6.PropOptions<Options | undefined>>().type.toBeAssignable(
      oneOfProp(options).optional,
    );

    expect(createVue2Component(oneOfProp(options).optional)).type.toEqual<
      Vue2ComponentWithProp<Options | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<string | undefined>>().type.toBeAssignable(
      oneOfProp(['a', 'b', 'c']).optional,
    );
    expect<Vue2_7.PropOptions<Options | undefined>>().type.toBeAssignable(
      oneOfProp(options).optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<string | undefined>>().type.toBeAssignable(
      oneOfProp(['a', 'b', 'c']).optional,
    );
    expect<Vue3.Prop<Options | undefined>>().type.toBeAssignable(
      oneOfProp(options).optional,
    );
  });
});

describe('oneOfProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<string | null>>().type.toBeAssignable(
      oneOfProp(['a', 'b', 'c']).nullable,
    );
    expect<Vue2_6.PropOptions<Options | null>>().type.toBeAssignable(
      oneOfProp(options).nullable,
    );

    expect(createVue2Component(oneOfProp(options).nullable)).type.toEqual<
      Vue2ComponentWithProp<Options | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<string | null>>().type.toBeAssignable(
      oneOfProp(['a', 'b', 'c']).nullable,
    );
    expect<Vue2_7.PropOptions<Options | null>>().type.toBeAssignable(
      oneOfProp(options).nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<string | null>>().type.toBeAssignable(
      oneOfProp(['a', 'b', 'c']).nullable,
    );
    expect<Vue3.Prop<Options | null>>().type.toBeAssignable(
      oneOfProp(options).nullable,
    );
  });
});

describe('oneOfProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Options>>().type.toBeAssignable(
      oneOfProp(options).withDefault('a'),
    );

    expect(
      createVue2Component(oneOfProp(options).withDefault('a')),
    ).type.toEqual<Vue2ComponentWithProp<Options>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Options>>().type.toBeAssignable(
      oneOfProp(options).withDefault('a'),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Options>>().type.toBeAssignable(
      oneOfProp(options).withDefault('a'),
    );
  });
});

describe('oneOfProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Options>>().type.toBeAssignable(
      oneOfProp(options).required,
    );

    expect(createVue2Component(oneOfProp(options).required)).type.toEqual<
      Vue2ComponentWithProp<Options>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Options>>().type.toBeAssignable(
      oneOfProp(options).required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Options>>().type.toBeAssignable(
      oneOfProp(options).required,
    );
  });
});
