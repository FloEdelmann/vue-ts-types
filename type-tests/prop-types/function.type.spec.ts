import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import * as Vue3 from '@vue/runtime-core';
import { functionProp } from '../../src/prop-types/function';
import { createVue2Component } from '../utilities';
import type { Vue2ComponentWithProp } from '../utilities';

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

    const component1 = Vue3.defineComponent({
      props: {
        prop: functionProp().optional,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component1().prop).type.toBe<Function | undefined>();

    const component2 = Vue3.defineComponent({
      props: {
        prop: functionProp<MyCustomCallback>().optional,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component2().prop).type.toBe<MyCustomCallback | undefined>();
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

    const component1 = Vue3.defineComponent({
      props: {
        prop: functionProp().nullable,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component1().prop).type.toBe<Function | null>();

    const component2 = Vue3.defineComponent({
      props: {
        prop: functionProp<MyCustomCallback>().nullable,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component2().prop).type.toBe<MyCustomCallback | null>();
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

    const component1 = Vue3.defineComponent({
      props: {
        prop: functionProp().required,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component1().prop).type.toBe<Function>();

    const component2 = Vue3.defineComponent({
      props: {
        prop: functionProp<MyCustomCallback>().required,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component2().prop).type.toBe<MyCustomCallback>();
  });
});
