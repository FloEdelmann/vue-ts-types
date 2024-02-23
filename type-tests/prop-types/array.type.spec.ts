import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { arrayProp } from '../../src/prop-types/array';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('arrayProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<unknown[] | undefined>>().type.toBeAssignable(
      arrayProp().optional,
    );
    expect<Vue2_6.PropOptions<string[] | undefined>>().type.toBeAssignable(
      arrayProp<string>().optional,
    );
    expect<Vue2_6.PropOptions<unknown[]>>().type.not.toBeAssignable(
      arrayProp().optional,
    );
    expect<Vue2_6.PropOptions<string[]>>().type.not.toBeAssignable(
      arrayProp<string>().optional,
    );

    expect(createVue2Component(arrayProp().optional)).type.toEqual<
      Vue2ComponentWithProp<unknown[] | undefined>
    >();

    expect(createVue2Component(arrayProp<string>().optional)).type.toEqual<
      Vue2ComponentWithProp<string[] | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<unknown[] | undefined>>().type.toBeAssignable(
      arrayProp().optional,
    );
    expect<Vue2_7.PropOptions<string[] | undefined>>().type.toBeAssignable(
      arrayProp<string>().optional,
    );
    expect<Vue2_7.PropOptions<unknown[]>>().type.not.toBeAssignable(
      arrayProp().optional,
    );
    expect<Vue2_7.PropOptions<string[]>>().type.not.toBeAssignable(
      arrayProp<string>().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<unknown[] | undefined>>().type.toBeAssignable(
      arrayProp().optional,
    );
    expect<Vue3.Prop<string[] | undefined>>().type.toBeAssignable(
      arrayProp<string>().optional,
    );
    expect<Vue3.Prop<unknown[]>>().type.not.toBeAssignable(
      arrayProp().optional,
    );
    expect<Vue3.Prop<string[]>>().type.not.toBeAssignable(
      arrayProp<string>().optional,
    );
  });
});

describe('arrayProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<unknown[] | null>>().type.toBeAssignable(
      arrayProp().nullable,
    );
    expect<Vue2_6.PropOptions<string[] | null>>().type.toBeAssignable(
      arrayProp<string>().nullable,
    );
    expect<Vue2_6.PropOptions<unknown[]>>().type.not.toBeAssignable(
      arrayProp().nullable,
    );
    expect<Vue2_6.PropOptions<string[]>>().type.not.toBeAssignable(
      arrayProp<string>().nullable,
    );

    expect(createVue2Component(arrayProp().nullable)).type.toEqual<
      Vue2ComponentWithProp<unknown[] | null>
    >();

    expect(createVue2Component(arrayProp<string>().nullable)).type.toEqual<
      Vue2ComponentWithProp<string[] | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<unknown[] | null>>().type.toBeAssignable(
      arrayProp().nullable,
    );
    expect<Vue2_7.PropOptions<string[] | null>>().type.toBeAssignable(
      arrayProp<string>().nullable,
    );
    expect<Vue2_7.PropOptions<unknown[]>>().type.not.toBeAssignable(
      arrayProp().nullable,
    );
    expect<Vue2_7.PropOptions<string[]>>().type.not.toBeAssignable(
      arrayProp<string>().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<unknown[] | null>>().type.toBeAssignable(
      arrayProp().nullable,
    );
    expect<Vue3.Prop<string[] | null>>().type.toBeAssignable(
      arrayProp<string>().nullable,
    );
    expect<Vue3.Prop<unknown[]>>().type.not.toBeAssignable(
      arrayProp().nullable,
    );
    expect<Vue3.Prop<string[]>>().type.not.toBeAssignable(
      arrayProp<string>().nullable,
    );
  });
});

describe('arrayProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<unknown[]>>().type.toBeAssignable(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue2_6.PropOptions<string[]>>().type.not.toBeAssignable(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue2_6.PropOptions<string[]>>().type.toBeAssignable(
      arrayProp<string>().withDefault(() => ['foo', 'bar']),
    );

    expect(
      createVue2Component(
        arrayProp<string>().withDefault(() => ['foo', 'bar']),
      ),
    ).type.toEqual<Vue2ComponentWithProp<string[]>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<unknown[]>>().type.toBeAssignable(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue2_7.PropOptions<string[]>>().type.not.toBeAssignable(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue2_7.PropOptions<string[]>>().type.toBeAssignable(
      arrayProp<string>().withDefault(() => ['foo', 'bar']),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<unknown[]>>().type.toBeAssignable(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue3.Prop<string[]>>().type.not.toBeAssignable(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue3.Prop<string[]>>().type.toBeAssignable(
      arrayProp<string>().withDefault(() => ['foo', 'bar']),
    );
  });
});

describe('arrayProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<unknown[]>>().type.toBeAssignable(
      arrayProp().required,
    );
    expect<Vue2_6.PropOptions<string[]>>().type.toBeAssignable(
      arrayProp<string>().required,
    );
    expect<Vue2_6.PropOptions<number[]>>().type.not.toBeAssignable(
      arrayProp<string>().required,
    );

    expect(createVue2Component(arrayProp().required)).type.toEqual<
      Vue2ComponentWithProp<unknown[]>
    >();

    expect(createVue2Component(arrayProp<string>().required)).type.toEqual<
      Vue2ComponentWithProp<string[]>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<unknown[]>>().type.toBeAssignable(
      arrayProp().required,
    );
    expect<Vue2_7.PropOptions<string[]>>().type.toBeAssignable(
      arrayProp<string>().required,
    );
    expect<Vue2_7.PropOptions<number[]>>().type.not.toBeAssignable(
      arrayProp<string>().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<unknown[]>>().type.toBeAssignable(arrayProp().required);
    expect<Vue3.Prop<string[]>>().type.toBeAssignable(
      arrayProp<string>().required,
    );
    expect<Vue3.Prop<number[]>>().type.not.toBeAssignable(
      arrayProp<string>().required,
    );
  });
});
