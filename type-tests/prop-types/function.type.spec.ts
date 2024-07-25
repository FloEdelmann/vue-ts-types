import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { functionProp } from '../../src/prop-types/function';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

/* eslint-disable @typescript-eslint/no-unsafe-function-type */

type MyCustomCallback = (parameter: string) => Promise<boolean>;

describe('functionProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Function | undefined>>().type.toBeAssignableWith(
      functionProp().optional,
    );
    expect<
      Vue2_6.PropOptions<MyCustomCallback | undefined>
    >().type.toBeAssignableWith(functionProp<MyCustomCallback>().optional);
    expect<Vue2_6.PropOptions<Function>>().type.not.toBeAssignableWith(
      functionProp().optional,
    );
    expect<Vue2_6.PropOptions<MyCustomCallback>>().type.not.toBeAssignableWith(
      functionProp<MyCustomCallback>().optional,
    );

    expect(createVue2Component(functionProp().optional)).type.toBe<
      Vue2ComponentWithProp<Function | undefined>
    >();

    expect(
      createVue2Component(functionProp<MyCustomCallback>().optional),
    ).type.toBe<Vue2ComponentWithProp<MyCustomCallback | undefined>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Function | undefined>>().type.toBeAssignableWith(
      functionProp().optional,
    );
    expect<
      Vue2_7.PropOptions<MyCustomCallback | undefined>
    >().type.toBeAssignableWith(functionProp<MyCustomCallback>().optional);
    expect<Vue2_7.PropOptions<Function>>().type.not.toBeAssignableWith(
      functionProp().optional,
    );
    expect<Vue2_7.PropOptions<MyCustomCallback>>().type.not.toBeAssignableWith(
      functionProp<MyCustomCallback>().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Function | undefined>>().type.toBeAssignableWith(
      functionProp().optional,
    );
    expect<Vue3.Prop<MyCustomCallback | undefined>>().type.toBeAssignableWith(
      functionProp<MyCustomCallback>().optional,
    );
    expect<Vue3.Prop<Function>>().type.not.toBeAssignableWith(
      functionProp().optional,
    );
    expect<Vue3.Prop<MyCustomCallback>>().type.not.toBeAssignableWith(
      functionProp<MyCustomCallback>().optional,
    );
  });
});

describe('functionProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Function | null>>().type.toBeAssignableWith(
      functionProp().nullable,
    );
    expect<
      Vue2_6.PropOptions<MyCustomCallback | null>
    >().type.toBeAssignableWith(functionProp<MyCustomCallback>().nullable);
    expect<Vue2_6.PropOptions<Function>>().type.not.toBeAssignableWith(
      functionProp().nullable,
    );
    expect<Vue2_6.PropOptions<MyCustomCallback>>().type.not.toBeAssignableWith(
      functionProp<MyCustomCallback>().nullable,
    );

    expect(createVue2Component(functionProp().nullable)).type.toBe<
      Vue2ComponentWithProp<Function | null>
    >();

    expect(
      createVue2Component(functionProp<MyCustomCallback>().nullable),
    ).type.toBe<Vue2ComponentWithProp<MyCustomCallback | null>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Function | null>>().type.toBeAssignableWith(
      functionProp().nullable,
    );
    expect<
      Vue2_7.PropOptions<MyCustomCallback | null>
    >().type.toBeAssignableWith(functionProp<MyCustomCallback>().nullable);
    expect<Vue2_7.PropOptions<Function>>().type.not.toBeAssignableWith(
      functionProp().nullable,
    );
    expect<Vue2_7.PropOptions<MyCustomCallback>>().type.not.toBeAssignableWith(
      functionProp<MyCustomCallback>().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Function | null>>().type.toBeAssignableWith(
      functionProp().nullable,
    );
    expect<Vue3.Prop<MyCustomCallback | null>>().type.toBeAssignableWith(
      functionProp<MyCustomCallback>().nullable,
    );
    expect<Vue3.Prop<Function>>().type.not.toBeAssignableWith(
      functionProp().nullable,
    );
    expect<Vue3.Prop<MyCustomCallback>>().type.not.toBeAssignableWith(
      functionProp<MyCustomCallback>().nullable,
    );
  });
});

describe('functionProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Function>>().type.toBeAssignableWith(
      functionProp().required,
    );
    expect<Vue2_6.PropOptions<MyCustomCallback>>().type.toBeAssignableWith(
      functionProp<MyCustomCallback>().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableWith(
      functionProp().required,
    );

    expect(createVue2Component(functionProp().required)).type.toBe<
      Vue2ComponentWithProp<Function>
    >();

    expect(
      createVue2Component(functionProp<MyCustomCallback>().required),
    ).type.toBe<Vue2ComponentWithProp<MyCustomCallback>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Function>>().type.toBeAssignableWith(
      functionProp().required,
    );
    expect<Vue2_7.PropOptions<MyCustomCallback>>().type.toBeAssignableWith(
      functionProp<MyCustomCallback>().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableWith(
      functionProp().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Function>>().type.toBeAssignableWith(
      functionProp().required,
    );
    expect<Vue3.Prop<MyCustomCallback>>().type.toBeAssignableWith(
      functionProp<MyCustomCallback>().required,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableWith(
      functionProp().required,
    );
  });
});
