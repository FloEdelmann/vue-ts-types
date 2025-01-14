import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core';
import { integerProp } from '../../src/prop-types/integer';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('integerProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number | undefined>>().type.toBeAssignableWith(
      integerProp().optional,
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignableWith(
      integerProp().optional,
    );

    expect(createVue2Component(integerProp().optional)).type.toBe<
      Vue2ComponentWithProp<number | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number | undefined>>().type.toBeAssignableWith(
      integerProp().optional,
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignableWith(
      integerProp().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number | undefined>>().type.toBeAssignableWith(
      integerProp().optional,
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignableWith(
      integerProp().optional,
    );
  });
});

describe('integerProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number | null>>().type.toBeAssignableWith(
      integerProp().nullable,
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignableWith(
      integerProp().nullable,
    );

    expect(createVue2Component(integerProp().nullable)).type.toBe<
      Vue2ComponentWithProp<number | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number | null>>().type.toBeAssignableWith(
      integerProp().nullable,
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignableWith(
      integerProp().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number | null>>().type.toBeAssignableWith(
      integerProp().nullable,
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignableWith(
      integerProp().nullable,
    );
  });
});

describe('integerProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number>>().type.toBeAssignableWith(
      integerProp().withDefault(27),
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableWith(
      integerProp().withDefault(27),
    );

    expect(createVue2Component(integerProp().withDefault(27))).type.toBe<
      Vue2ComponentWithProp<number>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number>>().type.toBeAssignableWith(
      integerProp().withDefault(27),
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableWith(
      integerProp().withDefault(27),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number>>().type.toBeAssignableWith(
      integerProp().withDefault(27),
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableWith(
      integerProp().withDefault(27),
    );
  });
});

describe('integerProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number>>().type.toBeAssignableWith(
      integerProp().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableWith(
      integerProp().required,
    );

    expect(createVue2Component(integerProp().required)).type.toBe<
      Vue2ComponentWithProp<number>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number>>().type.toBeAssignableWith(
      integerProp().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableWith(
      integerProp().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number>>().type.toBeAssignableWith(integerProp().required);
    expect<Vue3.Prop<string>>().type.not.toBeAssignableWith(
      integerProp().required,
    );
  });
});
