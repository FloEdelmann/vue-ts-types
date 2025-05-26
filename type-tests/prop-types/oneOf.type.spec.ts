import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import * as Vue3 from '@vue/runtime-core';
import { oneOfProp } from '../../src/prop-types/oneOf';
import { createVue2Component } from '../utilities';
import type { Vue2ComponentWithProp } from '../utilities';

const options = ['a', 'b', 'c'] as const;
type Options = 'a' | 'b' | 'c';

describe('oneOfProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<string | undefined>>().type.toBeAssignableWith(
      oneOfProp(['a', 'b', 'c']).optional,
    );
    expect<Vue2_6.PropOptions<Options | undefined>>().type.toBeAssignableWith(
      oneOfProp(options).optional,
    );

    expect(createVue2Component(oneOfProp(options).optional)).type.toBe<
      Vue2ComponentWithProp<Options | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<string | undefined>>().type.toBeAssignableWith(
      oneOfProp(['a', 'b', 'c']).optional,
    );
    expect<Vue2_7.PropOptions<Options | undefined>>().type.toBeAssignableWith(
      oneOfProp(options).optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<string | undefined>>().type.toBeAssignableWith(
      oneOfProp(['a', 'b', 'c']).optional,
    );
    expect<Vue3.Prop<Options | undefined>>().type.toBeAssignableWith(
      oneOfProp(options).optional,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: oneOfProp(options).optional,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<Options | undefined>();
  });
});

describe('oneOfProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<string | null>>().type.toBeAssignableWith(
      oneOfProp(['a', 'b', 'c']).nullable,
    );
    expect<Vue2_6.PropOptions<Options | null>>().type.toBeAssignableWith(
      oneOfProp(options).nullable,
    );

    expect(createVue2Component(oneOfProp(options).nullable)).type.toBe<
      Vue2ComponentWithProp<Options | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<string | null>>().type.toBeAssignableWith(
      oneOfProp(['a', 'b', 'c']).nullable,
    );
    expect<Vue2_7.PropOptions<Options | null>>().type.toBeAssignableWith(
      oneOfProp(options).nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<string | null>>().type.toBeAssignableWith(
      oneOfProp(['a', 'b', 'c']).nullable,
    );
    expect<Vue3.Prop<Options | null>>().type.toBeAssignableWith(
      oneOfProp(options).nullable,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: oneOfProp(options).nullable,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<Options | null>();
  });
});

describe('oneOfProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Options>>().type.toBeAssignableWith(
      oneOfProp(options).withDefault('a'),
    );

    expect(createVue2Component(oneOfProp(options).withDefault('a'))).type.toBe<
      Vue2ComponentWithProp<Options>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Options>>().type.toBeAssignableWith(
      oneOfProp(options).withDefault('a'),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Options>>().type.toBeAssignableWith(
      oneOfProp(options).withDefault('a'),
    );

    const component = Vue3.defineComponent({
      props: {
        prop: oneOfProp(options).withDefault('a'),
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<Options>();
  });
});

describe('oneOfProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Options>>().type.toBeAssignableWith(
      oneOfProp(options).required,
    );

    expect(createVue2Component(oneOfProp(options).required)).type.toBe<
      Vue2ComponentWithProp<Options>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Options>>().type.toBeAssignableWith(
      oneOfProp(options).required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Options>>().type.toBeAssignableWith(
      oneOfProp(options).required,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: oneOfProp(options).required,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<Options>();
  });
});
