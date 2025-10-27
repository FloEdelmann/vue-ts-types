import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import * as Vue3 from '@vue/runtime-core';
import { booleanProp } from '../../src/prop-types/boolean';
import { createVue2Component } from '../utilities';
import type { Vue2ComponentWithProp } from '../utilities';

describe('booleanProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<boolean | undefined>>().type.toBeAssignableFrom(
      booleanProp().optional,
    );
    expect<Vue2_6.PropOptions<boolean>>().type.not.toBeAssignableFrom(
      booleanProp().optional,
    );

    expect(createVue2Component(booleanProp().optional)).type.toBe<
      Vue2ComponentWithProp<boolean | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<boolean | undefined>>().type.toBeAssignableFrom(
      booleanProp().optional,
    );
    expect<Vue2_7.PropOptions<boolean>>().type.not.toBeAssignableFrom(
      booleanProp().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<boolean | undefined>>().type.toBeAssignableFrom(
      booleanProp().optional,
    );
    expect<Vue3.Prop<boolean>>().type.not.toBeAssignableFrom(
      booleanProp().optional,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: booleanProp().optional,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<boolean | undefined>();
  });
});

describe('booleanProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<boolean | null>>().type.toBeAssignableFrom(
      booleanProp().nullable,
    );
    expect<Vue2_6.PropOptions<boolean>>().type.not.toBeAssignableFrom(
      booleanProp().nullable,
    );

    expect(createVue2Component(booleanProp().nullable)).type.toBe<
      Vue2ComponentWithProp<boolean | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<boolean | null>>().type.toBeAssignableFrom(
      booleanProp().nullable,
    );
    expect<Vue2_7.PropOptions<boolean>>().type.not.toBeAssignableFrom(
      booleanProp().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<boolean | null>>().type.toBeAssignableFrom(
      booleanProp().nullable,
    );
    expect<Vue3.Prop<boolean>>().type.not.toBeAssignableFrom(
      booleanProp().nullable,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: booleanProp().nullable,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<boolean | null>();
  });
});

describe('booleanProp().withDefault(false)', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<boolean>>().type.toBeAssignableFrom(
      booleanProp().withDefault(false),
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableFrom(
      booleanProp().withDefault(false),
    );

    expect(createVue2Component(booleanProp().withDefault(false))).type.toBe<
      Vue2ComponentWithProp<boolean>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<boolean>>().type.toBeAssignableFrom(
      booleanProp().withDefault(false),
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableFrom(
      booleanProp().withDefault(false),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<boolean>>().type.toBeAssignableFrom(
      booleanProp().withDefault(false),
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableFrom(
      booleanProp().withDefault(false),
    );

    const component = Vue3.defineComponent({
      props: {
        prop: booleanProp().withDefault(false),
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<boolean>();
  });
});

describe('booleanProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<boolean>>().type.toBeAssignableFrom(
      booleanProp().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableFrom(
      booleanProp().required,
    );

    expect(createVue2Component(booleanProp().required)).type.toBe<
      Vue2ComponentWithProp<boolean>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<boolean>>().type.toBeAssignableFrom(
      booleanProp().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableFrom(
      booleanProp().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<boolean>>().type.toBeAssignableFrom(
      booleanProp().required,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableFrom(
      booleanProp().required,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: booleanProp().required,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<boolean>();
  });
});
