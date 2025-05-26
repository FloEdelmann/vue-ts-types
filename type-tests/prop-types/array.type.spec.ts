import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import * as Vue3 from '@vue/runtime-core';
import { arrayProp } from '../../src/prop-types/array';
import { createVue2Component } from '../utilities';
import type { Vue2ComponentWithProp } from '../utilities';

describe('arrayProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<unknown[] | undefined>>().type.toBeAssignableWith(
      arrayProp().optional,
    );
    expect<Vue2_6.PropOptions<string[] | undefined>>().type.toBeAssignableWith(
      arrayProp<string>().optional,
    );
    expect<Vue2_6.PropOptions<unknown[]>>().type.not.toBeAssignableWith(
      arrayProp().optional,
    );
    expect<Vue2_6.PropOptions<string[]>>().type.not.toBeAssignableWith(
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
    expect<Vue2_7.PropOptions<unknown[] | undefined>>().type.toBeAssignableWith(
      arrayProp().optional,
    );
    expect<Vue2_7.PropOptions<string[] | undefined>>().type.toBeAssignableWith(
      arrayProp<string>().optional,
    );
    expect<Vue2_7.PropOptions<unknown[]>>().type.not.toBeAssignableWith(
      arrayProp().optional,
    );
    expect<Vue2_7.PropOptions<string[]>>().type.not.toBeAssignableWith(
      arrayProp<string>().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<unknown[] | undefined>>().type.toBeAssignableWith(
      arrayProp().optional,
    );
    expect<Vue3.Prop<string[] | undefined>>().type.toBeAssignableWith(
      arrayProp<string>().optional,
    );
    expect<Vue3.Prop<unknown[]>>().type.not.toBeAssignableWith(
      arrayProp().optional,
    );
    expect<Vue3.Prop<string[]>>().type.not.toBeAssignableWith(
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
    expect<Vue2_6.PropOptions<unknown[] | null>>().type.toBeAssignableWith(
      arrayProp().nullable,
    );
    expect<Vue2_6.PropOptions<string[] | null>>().type.toBeAssignableWith(
      arrayProp<string>().nullable,
    );
    expect<Vue2_6.PropOptions<unknown[]>>().type.not.toBeAssignableWith(
      arrayProp().nullable,
    );
    expect<Vue2_6.PropOptions<string[]>>().type.not.toBeAssignableWith(
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
    expect<Vue2_7.PropOptions<unknown[] | null>>().type.toBeAssignableWith(
      arrayProp().nullable,
    );
    expect<Vue2_7.PropOptions<string[] | null>>().type.toBeAssignableWith(
      arrayProp<string>().nullable,
    );
    expect<Vue2_7.PropOptions<unknown[]>>().type.not.toBeAssignableWith(
      arrayProp().nullable,
    );
    expect<Vue2_7.PropOptions<string[]>>().type.not.toBeAssignableWith(
      arrayProp<string>().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<unknown[] | null>>().type.toBeAssignableWith(
      arrayProp().nullable,
    );
    expect<Vue3.Prop<string[] | null>>().type.toBeAssignableWith(
      arrayProp<string>().nullable,
    );
    expect<Vue3.Prop<unknown[]>>().type.not.toBeAssignableWith(
      arrayProp().nullable,
    );
    expect<Vue3.Prop<string[]>>().type.not.toBeAssignableWith(
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
    expect<Vue2_6.PropOptions<unknown[]>>().type.toBeAssignableWith(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue2_6.PropOptions<string[]>>().type.not.toBeAssignableWith(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue2_6.PropOptions<string[]>>().type.toBeAssignableWith(
      arrayProp<string>().withDefault(() => ['foo', 'bar']),
    );

    expect(
      createVue2Component(
        arrayProp<string>().withDefault(() => ['foo', 'bar']),
      ),
    ).type.toBe<Vue2ComponentWithProp<string[]>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<unknown[]>>().type.toBeAssignableWith(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue2_7.PropOptions<string[]>>().type.not.toBeAssignableWith(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue2_7.PropOptions<string[]>>().type.toBeAssignableWith(
      arrayProp<string>().withDefault(() => ['foo', 'bar']),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<unknown[]>>().type.toBeAssignableWith(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue3.Prop<string[]>>().type.not.toBeAssignableWith(
      arrayProp().withDefault(() => ['foo', 'bar']),
    );
    expect<Vue3.Prop<string[]>>().type.toBeAssignableWith(
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
    expect<Vue2_6.PropOptions<unknown[]>>().type.toBeAssignableWith(
      arrayProp().required,
    );
    expect<Vue2_6.PropOptions<string[]>>().type.toBeAssignableWith(
      arrayProp<string>().required,
    );
    expect<Vue2_6.PropOptions<number[]>>().type.not.toBeAssignableWith(
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
    expect<Vue2_7.PropOptions<unknown[]>>().type.toBeAssignableWith(
      arrayProp().required,
    );
    expect<Vue2_7.PropOptions<string[]>>().type.toBeAssignableWith(
      arrayProp<string>().required,
    );
    expect<Vue2_7.PropOptions<number[]>>().type.not.toBeAssignableWith(
      arrayProp<string>().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<unknown[]>>().type.toBeAssignableWith(
      arrayProp().required,
    );
    expect<Vue3.Prop<string[]>>().type.toBeAssignableWith(
      arrayProp<string>().required,
    );
    expect<Vue3.Prop<number[]>>().type.not.toBeAssignableWith(
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
