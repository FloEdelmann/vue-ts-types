import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core';
import { numberProp } from '../../src/prop-types/number';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

type Foo = 1 | 2 | 3;

describe('numberProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number | undefined>>().type.toBeAssignableWith(
      numberProp().optional,
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignableWith(
      numberProp().optional,
    );

    expect(createVue2Component(numberProp().optional)).type.toBe<
      Vue2ComponentWithProp<number | undefined>
    >();

    expect(createVue2Component(numberProp<Foo>().optional)).type.toBe<
      Vue2ComponentWithProp<Foo | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number | undefined>>().type.toBeAssignableWith(
      numberProp().optional,
    );
    expect<Vue2_7.PropOptions<Foo | undefined>>().type.toBeAssignableWith(
      numberProp<Foo>().optional,
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignableWith(
      numberProp().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number | undefined>>().type.toBeAssignableWith(
      numberProp().optional,
    );
    expect<Vue3.Prop<Foo | undefined>>().type.toBeAssignableWith(
      numberProp<Foo>().optional,
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignableWith(
      numberProp().optional,
    );
  });
});

describe('numberProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number | null>>().type.toBeAssignableWith(
      numberProp().nullable,
    );
    expect<Vue2_6.PropOptions<Foo | null>>().type.toBeAssignableWith(
      numberProp<Foo>().nullable,
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignableWith(
      numberProp().nullable,
    );
    expect<Vue2_6.PropOptions<Foo>>().type.not.toBeAssignableWith(
      numberProp<Foo>().nullable,
    );

    expect(createVue2Component(numberProp().nullable)).type.toBe<
      Vue2ComponentWithProp<number | null>
    >();

    expect(createVue2Component(numberProp<Foo>().nullable)).type.toBe<
      Vue2ComponentWithProp<Foo | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number | null>>().type.toBeAssignableWith(
      numberProp().nullable,
    );
    expect<Vue2_7.PropOptions<Foo | null>>().type.toBeAssignableWith(
      numberProp<Foo>().nullable,
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignableWith(
      numberProp().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number | null>>().type.toBeAssignableWith(
      numberProp().nullable,
    );
    expect<Vue3.Prop<Foo | null>>().type.toBeAssignableWith(
      numberProp<Foo>().nullable,
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignableWith(
      numberProp().nullable,
    );
    expect<Vue3.Prop<Foo>>().type.not.toBeAssignableWith(
      numberProp<Foo>().nullable,
    );
  });
});

describe('numberProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number>>().type.toBeAssignableWith(
      numberProp().withDefault(27),
    );
    expect<Vue2_6.PropOptions<Foo>>().type.toBeAssignableWith(
      numberProp<Foo>().withDefault(1),
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableWith(
      numberProp().withDefault(27),
    );

    expect(createVue2Component(numberProp().withDefault(27))).type.toBe<
      Vue2ComponentWithProp<number>
    >();

    expect(createVue2Component(numberProp<Foo>().withDefault(1))).type.toBe<
      Vue2ComponentWithProp<Foo>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number>>().type.toBeAssignableWith(
      numberProp().withDefault(27),
    );
    expect<Vue2_7.PropOptions<Foo>>().type.toBeAssignableWith(
      numberProp<Foo>().withDefault(1),
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableWith(
      numberProp().withDefault(27),
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableWith(
      numberProp<Foo>().withDefault(1),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number>>().type.toBeAssignableWith(
      numberProp().withDefault(27),
    );
    expect<Vue3.Prop<Foo>>().type.toBeAssignableWith(
      numberProp<Foo>().withDefault(1),
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableWith(
      numberProp().withDefault(27),
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableWith(
      numberProp<Foo>().withDefault(1),
    );
  });
});

describe('numberProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number>>().type.toBeAssignableWith(
      numberProp().required,
    );
    expect<Vue2_6.PropOptions<Foo>>().type.toBeAssignableWith(
      numberProp<Foo>().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableWith(
      numberProp().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableWith(
      numberProp<Foo>().required,
    );

    expect(createVue2Component(numberProp().required)).type.toBe<
      Vue2ComponentWithProp<number>
    >();

    expect(createVue2Component(numberProp<Foo>().required)).type.toBe<
      Vue2ComponentWithProp<Foo>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number>>().type.toBeAssignableWith(
      numberProp().required,
    );
    expect<Vue2_7.PropOptions<Foo>>().type.toBeAssignableWith(
      numberProp<Foo>().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableWith(
      numberProp().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableWith(
      numberProp<Foo>().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number>>().type.toBeAssignableWith(numberProp().required);
    expect<Vue3.Prop<Foo>>().type.toBeAssignableWith(
      numberProp<Foo>().required,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableWith(
      numberProp().required,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableWith(
      numberProp<Foo>().required,
    );
  });
});
