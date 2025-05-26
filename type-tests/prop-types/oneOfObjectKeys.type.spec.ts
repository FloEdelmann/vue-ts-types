import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import * as Vue3 from '@vue/runtime-core';
import { oneOfObjectKeysProp } from '../../src/prop-types/oneOfObjectKeys';
import { createVue2Component } from '../utilities';
import type { Vue2ComponentWithProp } from '../utilities';

const options = { a: 'a', b: 'b', c: 'c' };
type Options = 'a' | 'b' | 'c';

describe('oneOfObjectKeysProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Options | undefined>>().type.toBeAssignableWith(
      oneOfObjectKeysProp(options).optional,
    );

    expect(
      createVue2Component(oneOfObjectKeysProp(options).optional),
    ).type.toBe<Vue2ComponentWithProp<Options | undefined>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Options | undefined>>().type.toBeAssignableWith(
      oneOfObjectKeysProp(options).optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Options | undefined>>().type.toBeAssignableWith(
      oneOfObjectKeysProp(options).optional,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: oneOfObjectKeysProp(options).optional,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<Options | undefined>();
  });
});

describe('oneOfObjectKeysProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Options | null>>().type.toBeAssignableWith(
      oneOfObjectKeysProp(options).nullable,
    );

    expect(
      createVue2Component(oneOfObjectKeysProp(options).nullable),
    ).type.toBe<Vue2ComponentWithProp<Options | null>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Options | null>>().type.toBeAssignableWith(
      oneOfObjectKeysProp(options).nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Options | null>>().type.toBeAssignableWith(
      oneOfObjectKeysProp(options).nullable,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: oneOfObjectKeysProp(options).nullable,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<Options | null>();
  });
});

describe('oneOfObjectKeysProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Options>>().type.toBeAssignableWith(
      oneOfObjectKeysProp(options).withDefault('a'),
    );

    expect(
      createVue2Component(oneOfObjectKeysProp(options).withDefault('a')),
    ).type.toBe<Vue2ComponentWithProp<Options>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Options>>().type.toBeAssignableWith(
      oneOfObjectKeysProp(options).withDefault('a'),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Options>>().type.toBeAssignableWith(
      oneOfObjectKeysProp(options).withDefault('a'),
    );

    const component = Vue3.defineComponent({
      props: {
        prop: oneOfObjectKeysProp(options).withDefault('a'),
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<Options>();
  });
});

describe('oneOfObjectKeysProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Options>>().type.toBeAssignableWith(
      oneOfObjectKeysProp(options).required,
    );

    expect(
      createVue2Component(oneOfObjectKeysProp(options).required),
    ).type.toBe<Vue2ComponentWithProp<Options>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Options>>().type.toBeAssignableWith(
      oneOfObjectKeysProp(options).required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Options>>().type.toBeAssignableWith(
      oneOfObjectKeysProp(options).required,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: oneOfObjectKeysProp(options).required,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<Options>();
  });
});
