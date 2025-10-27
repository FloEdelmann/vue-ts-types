import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import * as Vue3 from '@vue/runtime-core';
import { arrayProp } from '../../src/prop-types/array';
import { createVue2Component } from '../utilities';
import type { Vue2ComponentWithProp } from '../utilities';

describe('arrayProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<unknown[] | undefined>>().type.toBeAssignableFrom(
      arrayProp().optional,
    );
    expect<Vue2_6.PropOptions<string[] | undefined>>().type.toBeAssignableFrom(
      arrayProp<string>().optional,
    );
    expect<Vue2_6.PropOptions<unknown[]>>().type.not.toBeAssignableFrom(
      arrayProp().optional,
    );
    expect<Vue2_6.PropOptions<string[]>>().type.not.toBeAssignableFrom(
      arrayProp<string>().optional,
    );

    expect(createVue2Component(arrayProp().optional)).type.toBe<
      Vue2ComponentWithProp<unknown[] | undefined>
    >();

    expect(createVue2Component(arrayProp<string>().optional)).type.toBe<
      Vue2ComponentWithProp<string[] | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<unknown[] | undefined>>().type.toBeAssignableFrom(
      arrayProp().optional,
    );
    expect<Vue2_7.PropOptions<string[] | undefined>>().type.toBeAssignableFrom(
      arrayProp<string>().optional,
    );
    expect<Vue2_7.PropOptions<unknown[]>>().type.not.toBeAssignableFrom(
      arrayProp().optional,
    );
    expect<Vue2_7.PropOptions<string[]>>().type.not.toBeAssignableFrom(
      arrayProp<string>().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<unknown[] | undefined>>().type.toBeAssignableFrom(
      arrayProp().optional,
    );
    expect<Vue3.Prop<string[] | undefined>>().type.toBeAssignableFrom(
      arrayProp<string>().optional,
    );
    expect<Vue3.Prop<unknown[]>>().type.not.toBeAssignableFrom(
      arrayProp().optional,
    );
    expect<Vue3.Prop<string[]>>().type.not.toBeAssignableFrom(
      arrayProp<string>().optional,
    );

    const component1 = Vue3.defineComponent({
      props: {
        prop: arrayProp().optional,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component1().prop).type.toBe<unknown[] | undefined>();

    const component2 = Vue3.defineComponent({
      props: {
        prop: arrayProp<string>().optional,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component2().prop).type.toBe<string[] | undefined>();
  });
});

describe('arrayProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<unknown[] | null>>().type.toBeAssignableFrom(
      arrayProp().nullable,
    );
    expect<Vue2_6.PropOptions<string[] | null>>().type.toBeAssignableFrom(
      arrayProp<string>().nullable,
    );
    expect<Vue2_6.PropOptions<unknown[]>>().type.not.toBeAssignableFrom(
      arrayProp().nullable,
    );
    expect<Vue2_6.PropOptions<string[]>>().type.not.toBeAssignableFrom(
      arrayProp<string>().nullable,
    );

    expect(createVue2Component(arrayProp().nullable)).type.toBe<
      Vue2ComponentWithProp<unknown[] | null>
    >();

    expect(createVue2Component(arrayProp<string>().nullable)).type.toBe<
      Vue2ComponentWithProp<string[] | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<unknown[] | null>>().type.toBeAssignableFrom(
      arrayProp().nullable,
    );
    expect<Vue2_7.PropOptions<string[] | null>>().type.toBeAssignableFrom(
      arrayProp<string>().nullable,
    );
    expect<Vue2_7.PropOptions<unknown[]>>().type.not.toBeAssignableFrom(
      arrayProp().nullable,
    );
    expect<Vue2_7.PropOptions<string[]>>().type.not.toBeAssignableFrom(
      arrayProp<string>().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<unknown[] | null>>().type.toBeAssignableFrom(
      arrayProp().nullable,
    );
    expect<Vue3.Prop<string[] | null>>().type.toBeAssignableFrom(
      arrayProp<string>().nullable,
    );
    expect<Vue3.Prop<unknown[]>>().type.not.toBeAssignableFrom(
      arrayProp().nullable,
    );
    expect<Vue3.Prop<string[]>>().type.not.toBeAssignableFrom(
      arrayProp<string>().nullable,
    );

    const component1 = Vue3.defineComponent({
      props: {
        prop: arrayProp().nullable,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component1().prop).type.toBe<unknown[] | null>();

    const component2 = Vue3.defineComponent({
      props: {
        prop: arrayProp<string>().nullable,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component2().prop).type.toBe<string[] | null>();
  });
});

describe('arrayProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<unknown[]>>().type.toBeAssignableFrom(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue2_6.PropOptions<string[]>>().type.not.toBeAssignableFrom(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue2_6.PropOptions<string[]>>().type.toBeAssignableFrom(
      arrayProp<string>().withDefault(() => ['foo', 'bar']),
    );

    expect(
      createVue2Component(
        arrayProp<string>().withDefault(() => ['foo', 'bar']),
      ),
    ).type.toBe<Vue2ComponentWithProp<string[]>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<unknown[]>>().type.toBeAssignableFrom(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue2_7.PropOptions<string[]>>().type.not.toBeAssignableFrom(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue2_7.PropOptions<string[]>>().type.toBeAssignableFrom(
      arrayProp<string>().withDefault(() => ['foo', 'bar']),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<unknown[]>>().type.toBeAssignableFrom(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue3.Prop<string[]>>().type.not.toBeAssignableFrom(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue3.Prop<string[]>>().type.toBeAssignableFrom(
      arrayProp<string>().withDefault(() => ['foo', 'bar']),
    );

    const component1 = Vue3.defineComponent({
      props: {
        prop: arrayProp().withDefault(() => ['foo', 'bar']),
      },
      setup(props) {
        return props;
      },
    });
    expect(new component1().prop).type.toBe<unknown[]>();

    const component2 = Vue3.defineComponent({
      props: {
        prop: arrayProp<string>().withDefault(() => ['foo', 'bar']),
      },
      setup(props) {
        return props;
      },
    });
    expect(new component2().prop).type.toBe<string[]>();
  });
});

describe('arrayProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<unknown[]>>().type.toBeAssignableFrom(
      arrayProp().required,
    );
    expect<Vue2_6.PropOptions<string[]>>().type.toBeAssignableFrom(
      arrayProp<string>().required,
    );
    expect<Vue2_6.PropOptions<number[]>>().type.not.toBeAssignableFrom(
      arrayProp<string>().required,
    );

    expect(createVue2Component(arrayProp().required)).type.toBe<
      Vue2ComponentWithProp<unknown[]>
    >();

    expect(createVue2Component(arrayProp<string>().required)).type.toBe<
      Vue2ComponentWithProp<string[]>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<unknown[]>>().type.toBeAssignableFrom(
      arrayProp().required,
    );
    expect<Vue2_7.PropOptions<string[]>>().type.toBeAssignableFrom(
      arrayProp<string>().required,
    );
    expect<Vue2_7.PropOptions<number[]>>().type.not.toBeAssignableFrom(
      arrayProp<string>().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<unknown[]>>().type.toBeAssignableFrom(
      arrayProp().required,
    );
    expect<Vue3.Prop<string[]>>().type.toBeAssignableFrom(
      arrayProp<string>().required,
    );
    expect<Vue3.Prop<number[]>>().type.not.toBeAssignableFrom(
      arrayProp<string>().required,
    );

    const component1 = Vue3.defineComponent({
      props: {
        prop: arrayProp().required,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component1().prop).type.toBe<unknown[]>();

    const component2 = Vue3.defineComponent({
      props: {
        prop: arrayProp<string>().required,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component2().prop).type.toBe<string[]>();
  });
});
