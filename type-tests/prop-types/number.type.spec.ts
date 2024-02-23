import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { numberProp } from '../../src/prop-types/number';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

type Foo = 1 | 2 | 3;

describe('numberProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number | undefined>>().type.toBeAssignable(
      numberProp().optional,
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignable(
      numberProp().optional,
    );

    expect(createVue2Component(numberProp().optional)).type.toEqual<
      Vue2ComponentWithProp<number | undefined>
    >();

    expect(createVue2Component(numberProp<Foo>().optional)).type.toEqual<
      Vue2ComponentWithProp<Foo | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number | undefined>>().type.toBeAssignable(
      numberProp().optional,
    );
    expect<Vue2_7.PropOptions<Foo | undefined>>().type.toBeAssignable(
      numberProp<Foo>().optional,
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignable(
      numberProp().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number | undefined>>().type.toBeAssignable(
      numberProp().optional,
    );
    expect<Vue3.Prop<Foo | undefined>>().type.toBeAssignable(
      numberProp<Foo>().optional,
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignable(numberProp().optional);
  });
});

describe('numberProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number | null>>().type.toBeAssignable(
      numberProp().nullable,
    );
    expect<Vue2_6.PropOptions<Foo | null>>().type.toBeAssignable(
      numberProp<Foo>().nullable,
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignable(
      numberProp().nullable,
    );
    expect<Vue2_6.PropOptions<Foo>>().type.not.toBeAssignable(
      numberProp<Foo>().nullable,
    );

    expect(createVue2Component(numberProp().nullable)).type.toEqual<
      Vue2ComponentWithProp<number | null>
    >();

    expect(createVue2Component(numberProp<Foo>().nullable)).type.toEqual<
      Vue2ComponentWithProp<Foo | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number | null>>().type.toBeAssignable(
      numberProp().nullable,
    );
    expect<Vue2_7.PropOptions<Foo | null>>().type.toBeAssignable(
      numberProp<Foo>().nullable,
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignable(
      numberProp().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number | null>>().type.toBeAssignable(
      numberProp().nullable,
    );
    expect<Vue3.Prop<Foo | null>>().type.toBeAssignable(
      numberProp<Foo>().nullable,
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignable(numberProp().nullable);
    expect<Vue3.Prop<Foo>>().type.not.toBeAssignable(
      numberProp<Foo>().nullable,
    );
  });
});

describe('numberProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number>>().type.toBeAssignable(
      numberProp().withDefault(27),
    );
    expect<Vue2_6.PropOptions<Foo>>().type.toBeAssignable(
      numberProp<Foo>().withDefault(1),
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignable(
      numberProp().withDefault(27),
    );

    expect(createVue2Component(numberProp().withDefault(27))).type.toEqual<
      Vue2ComponentWithProp<number>
    >();

    expect(createVue2Component(numberProp<Foo>().withDefault(1))).type.toEqual<
      Vue2ComponentWithProp<Foo>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number>>().type.toBeAssignable(
      numberProp().withDefault(27),
    );
    expect<Vue2_7.PropOptions<Foo>>().type.toBeAssignable(
      numberProp<Foo>().withDefault(1),
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignable(
      numberProp().withDefault(27),
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignable(
      numberProp<Foo>().withDefault(1),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number>>().type.toBeAssignable(
      numberProp().withDefault(27),
    );
    expect<Vue3.Prop<Foo>>().type.toBeAssignable(
      numberProp<Foo>().withDefault(1),
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignable(
      numberProp().withDefault(27),
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignable(
      numberProp<Foo>().withDefault(1),
    );
  });
});

describe('numberProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number>>().type.toBeAssignable(
      numberProp().required,
    );
    expect<Vue2_6.PropOptions<Foo>>().type.toBeAssignable(
      numberProp<Foo>().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignable(
      numberProp().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignable(
      numberProp<Foo>().required,
    );

    expect(createVue2Component(numberProp().required)).type.toEqual<
      Vue2ComponentWithProp<number>
    >();

    expect(createVue2Component(numberProp<Foo>().required)).type.toEqual<
      Vue2ComponentWithProp<Foo>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number>>().type.toBeAssignable(
      numberProp().required,
    );
    expect<Vue2_7.PropOptions<Foo>>().type.toBeAssignable(
      numberProp<Foo>().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignable(
      numberProp().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignable(
      numberProp<Foo>().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number>>().type.toBeAssignable(numberProp().required);
    expect<Vue3.Prop<Foo>>().type.toBeAssignable(numberProp<Foo>().required);
    expect<Vue3.Prop<string>>().type.not.toBeAssignable(numberProp().required);
    expect<Vue3.Prop<string>>().type.not.toBeAssignable(
      numberProp<Foo>().required,
    );
  });
});
