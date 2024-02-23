import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { functionProp } from '../../src/prop-types/function';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

/* eslint-disable @typescript-eslint/ban-types */

type MyCustomCallback = (parameter: string) => Promise<boolean>;

describe('functionProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Function | undefined>>().type.toBeAssignable(
      functionProp().optional,
    );
    expect<
      Vue2_6.PropOptions<MyCustomCallback | undefined>
    >().type.toBeAssignable(functionProp<MyCustomCallback>().optional);
    expect<Vue2_6.PropOptions<Function>>().type.not.toBeAssignable(
      functionProp().optional,
    );
    expect<Vue2_6.PropOptions<MyCustomCallback>>().type.not.toBeAssignable(
      functionProp<MyCustomCallback>().optional,
    );

    expect(createVue2Component(functionProp().optional)).type.toEqual<
      Vue2ComponentWithProp<Function | undefined>
    >();

    expect(
      createVue2Component(functionProp<MyCustomCallback>().optional),
    ).type.toEqual<Vue2ComponentWithProp<MyCustomCallback | undefined>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Function | undefined>>().type.toBeAssignable(
      functionProp().optional,
    );
    expect<
      Vue2_7.PropOptions<MyCustomCallback | undefined>
    >().type.toBeAssignable(functionProp<MyCustomCallback>().optional);
    expect<Vue2_7.PropOptions<Function>>().type.not.toBeAssignable(
      functionProp().optional,
    );
    expect<Vue2_7.PropOptions<MyCustomCallback>>().type.not.toBeAssignable(
      functionProp<MyCustomCallback>().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Function | undefined>>().type.toBeAssignable(
      functionProp().optional,
    );
    expect<Vue3.Prop<MyCustomCallback | undefined>>().type.toBeAssignable(
      functionProp<MyCustomCallback>().optional,
    );
    expect<Vue3.Prop<Function>>().type.not.toBeAssignable(
      functionProp().optional,
    );
    expect<Vue3.Prop<MyCustomCallback>>().type.not.toBeAssignable(
      functionProp<MyCustomCallback>().optional,
    );
  });
});

describe('functionProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Function | null>>().type.toBeAssignable(
      functionProp().nullable,
    );
    expect<Vue2_6.PropOptions<MyCustomCallback | null>>().type.toBeAssignable(
      functionProp<MyCustomCallback>().nullable,
    );
    expect<Vue2_6.PropOptions<Function>>().type.not.toBeAssignable(
      functionProp().nullable,
    );
    expect<Vue2_6.PropOptions<MyCustomCallback>>().type.not.toBeAssignable(
      functionProp<MyCustomCallback>().nullable,
    );

    expect(createVue2Component(functionProp().nullable)).type.toEqual<
      Vue2ComponentWithProp<Function | null>
    >();

    expect(
      createVue2Component(functionProp<MyCustomCallback>().nullable),
    ).type.toEqual<Vue2ComponentWithProp<MyCustomCallback | null>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Function | null>>().type.toBeAssignable(
      functionProp().nullable,
    );
    expect<Vue2_7.PropOptions<MyCustomCallback | null>>().type.toBeAssignable(
      functionProp<MyCustomCallback>().nullable,
    );
    expect<Vue2_7.PropOptions<Function>>().type.not.toBeAssignable(
      functionProp().nullable,
    );
    expect<Vue2_7.PropOptions<MyCustomCallback>>().type.not.toBeAssignable(
      functionProp<MyCustomCallback>().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Function | null>>().type.toBeAssignable(
      functionProp().nullable,
    );
    expect<Vue3.Prop<MyCustomCallback | null>>().type.toBeAssignable(
      functionProp<MyCustomCallback>().nullable,
    );
    expect<Vue3.Prop<Function>>().type.not.toBeAssignable(
      functionProp().nullable,
    );
    expect<Vue3.Prop<MyCustomCallback>>().type.not.toBeAssignable(
      functionProp<MyCustomCallback>().nullable,
    );
  });
});

describe('functionProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Function>>().type.toBeAssignable(
      functionProp().required,
    );
    expect<Vue2_6.PropOptions<MyCustomCallback>>().type.toBeAssignable(
      functionProp<MyCustomCallback>().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignable(
      functionProp().required,
    );

    expect(createVue2Component(functionProp().required)).type.toEqual<
      Vue2ComponentWithProp<Function>
    >();

    expect(
      createVue2Component(functionProp<MyCustomCallback>().required),
    ).type.toEqual<Vue2ComponentWithProp<MyCustomCallback>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Function>>().type.toBeAssignable(
      functionProp().required,
    );
    expect<Vue2_7.PropOptions<MyCustomCallback>>().type.toBeAssignable(
      functionProp<MyCustomCallback>().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignable(
      functionProp().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Function>>().type.toBeAssignable(functionProp().required);
    expect<Vue3.Prop<MyCustomCallback>>().type.toBeAssignable(
      functionProp<MyCustomCallback>().required,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignable(
      functionProp().required,
    );
  });
});
