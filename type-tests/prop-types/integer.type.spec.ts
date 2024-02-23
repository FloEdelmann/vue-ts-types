import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { integerProp } from '../../src/prop-types/integer';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('integerProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number | undefined>>().type.toBeAssignable(
      integerProp().optional,
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignable(
      integerProp().optional,
    );

    expect(createVue2Component(integerProp().optional)).type.toEqual<
      Vue2ComponentWithProp<number | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number | undefined>>().type.toBeAssignable(
      integerProp().optional,
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignable(
      integerProp().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number | undefined>>().type.toBeAssignable(
      integerProp().optional,
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignable(integerProp().optional);
  });
});

describe('integerProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number | null>>().type.toBeAssignable(
      integerProp().nullable,
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignable(
      integerProp().nullable,
    );

    expect(createVue2Component(integerProp().nullable)).type.toEqual<
      Vue2ComponentWithProp<number | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number | null>>().type.toBeAssignable(
      integerProp().nullable,
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignable(
      integerProp().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number | null>>().type.toBeAssignable(
      integerProp().nullable,
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignable(integerProp().nullable);
  });
});

describe('integerProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number>>().type.toBeAssignable(
      integerProp().withDefault(27),
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignable(
      integerProp().withDefault(27),
    );

    expect(createVue2Component(integerProp().withDefault(27))).type.toEqual<
      Vue2ComponentWithProp<number>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number>>().type.toBeAssignable(
      integerProp().withDefault(27),
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignable(
      integerProp().withDefault(27),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number>>().type.toBeAssignable(
      integerProp().withDefault(27),
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignable(
      integerProp().withDefault(27),
    );
  });
});

describe('integerProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number>>().type.toBeAssignable(
      integerProp().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignable(
      integerProp().required,
    );

    expect(createVue2Component(integerProp().required)).type.toEqual<
      Vue2ComponentWithProp<number>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number>>().type.toBeAssignable(
      integerProp().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignable(
      integerProp().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number>>().type.toBeAssignable(integerProp().required);
    expect<Vue3.Prop<string>>().type.not.toBeAssignable(integerProp().required);
  });
});
