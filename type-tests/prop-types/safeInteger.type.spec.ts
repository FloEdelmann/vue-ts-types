import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import * as Vue3 from '@vue/runtime-core';
import { safeIntegerProp } from '../../src/prop-types/safeInteger';
import { createVue2Component } from '../utilities';
import type { Vue2ComponentWithProp } from '../utilities';

describe('safeIntegerProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number | undefined>>().type.toBeAssignableFrom(
      safeIntegerProp().optional,
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignableFrom(
      safeIntegerProp().optional,
    );

    expect(createVue2Component(safeIntegerProp().optional)).type.toBe<
      Vue2ComponentWithProp<number | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number | undefined>>().type.toBeAssignableFrom(
      safeIntegerProp().optional,
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignableFrom(
      safeIntegerProp().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number | undefined>>().type.toBeAssignableFrom(
      safeIntegerProp().optional,
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignableFrom(
      safeIntegerProp().optional,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: safeIntegerProp().optional,
      },
      setup: (props) => props,
    });
    const componentInstance = new component();
    expect(componentInstance.prop).type.toBe<number | undefined>();
  });
});

describe('safeIntegerProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number | null>>().type.toBeAssignableFrom(
      safeIntegerProp().nullable,
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignableFrom(
      safeIntegerProp().nullable,
    );

    expect(createVue2Component(safeIntegerProp().nullable)).type.toBe<
      Vue2ComponentWithProp<number | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number | null>>().type.toBeAssignableFrom(
      safeIntegerProp().nullable,
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignableFrom(
      safeIntegerProp().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number | null>>().type.toBeAssignableFrom(
      safeIntegerProp().nullable,
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignableFrom(
      safeIntegerProp().nullable,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: safeIntegerProp().nullable,
      },
      setup: (props) => props,
    });
    const componentInstance = new component();
    expect(componentInstance.prop).type.toBe<number | null>();
  });
});

describe('safeIntegerProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number>>().type.toBeAssignableFrom(
      safeIntegerProp().withDefault(27),
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableFrom(
      safeIntegerProp().withDefault(27),
    );

    expect(createVue2Component(safeIntegerProp().withDefault(27))).type.toBe<
      Vue2ComponentWithProp<number>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number>>().type.toBeAssignableFrom(
      safeIntegerProp().withDefault(27),
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableFrom(
      safeIntegerProp().withDefault(27),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number>>().type.toBeAssignableFrom(
      safeIntegerProp().withDefault(27),
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableFrom(
      safeIntegerProp().withDefault(27),
    );

    const component = Vue3.defineComponent({
      props: {
        prop: safeIntegerProp().withDefault(27),
      },
      setup: (props) => props,
    });
    const componentInstance = new component();
    expect(componentInstance.prop).type.toBe<number>();
  });
});

describe('safeIntegerProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<number>>().type.toBeAssignableFrom(
      safeIntegerProp().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableFrom(
      safeIntegerProp().required,
    );

    expect(createVue2Component(safeIntegerProp().required)).type.toBe<
      Vue2ComponentWithProp<number>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<number>>().type.toBeAssignableFrom(
      safeIntegerProp().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableFrom(
      safeIntegerProp().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<number>>().type.toBeAssignableFrom(
      safeIntegerProp().required,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableFrom(
      safeIntegerProp().required,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: safeIntegerProp().required,
      },
      setup: (props) => props,
    });
    const componentInstance = new component();
    expect(componentInstance.prop).type.toBe<number>();
  });
});
