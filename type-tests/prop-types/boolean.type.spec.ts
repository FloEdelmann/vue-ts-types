import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { booleanProp } from '../../src/prop-types/boolean';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('booleanProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<boolean | undefined>>().type.toBeAssignableWith(
      booleanProp().optional,
    );
    expect<Vue2_6.PropOptions<boolean>>().type.not.toBeAssignableWith(
      booleanProp().optional,
    );

    expect(createVue2Component(booleanProp().optional)).type.toBe<
      Vue2ComponentWithProp<boolean | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<boolean | undefined>>().type.toBeAssignableWith(
      booleanProp().optional,
    );
    expect<Vue2_7.PropOptions<boolean>>().type.not.toBeAssignableWith(
      booleanProp().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<boolean | undefined>>().type.toBeAssignableWith(
      booleanProp().optional,
    );
    expect<Vue3.Prop<boolean>>().type.not.toBeAssignableWith(
      booleanProp().optional,
    );
  });
});

describe('booleanProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<boolean | null>>().type.toBeAssignableWith(
      booleanProp().nullable,
    );
    expect<Vue2_6.PropOptions<boolean>>().type.not.toBeAssignableWith(
      booleanProp().nullable,
    );

    expect(createVue2Component(booleanProp().nullable)).type.toBe<
      Vue2ComponentWithProp<boolean | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<boolean | null>>().type.toBeAssignableWith(
      booleanProp().nullable,
    );
    expect<Vue2_7.PropOptions<boolean>>().type.not.toBeAssignableWith(
      booleanProp().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<boolean | null>>().type.toBeAssignableWith(
      booleanProp().nullable,
    );
    expect<Vue3.Prop<boolean>>().type.not.toBeAssignableWith(
      booleanProp().nullable,
    );
  });
});

describe('booleanProp().withDefault(false)', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<boolean>>().type.toBeAssignableWith(
      booleanProp().withDefault(false),
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableWith(
      booleanProp().withDefault(false),
    );

    expect(createVue2Component(booleanProp().withDefault(false))).type.toBe<
      Vue2ComponentWithProp<boolean>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<boolean>>().type.toBeAssignableWith(
      booleanProp().withDefault(false),
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableWith(
      booleanProp().withDefault(false),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<boolean>>().type.toBeAssignableWith(
      booleanProp().withDefault(false),
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableWith(
      booleanProp().withDefault(false),
    );
  });
});

describe('booleanProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<boolean>>().type.toBeAssignableWith(
      booleanProp().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableWith(
      booleanProp().required,
    );

    expect(createVue2Component(booleanProp().required)).type.toBe<
      Vue2ComponentWithProp<boolean>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<boolean>>().type.toBeAssignableWith(
      booleanProp().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableWith(
      booleanProp().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<boolean>>().type.toBeAssignableWith(
      booleanProp().required,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableWith(
      booleanProp().required,
    );
  });
});
