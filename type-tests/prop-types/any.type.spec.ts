import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import * as Vue3 from '@vue/runtime-core';
import { anyProp } from '../../src/prop-types/any';
import { createVue2Component } from '../utilities';
import type { Vue2ComponentWithProp } from '../utilities';

describe('anyProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions>().type.toBeAssignableFrom(anyProp().optional);
    expect<Vue2_6.PropOptions<number>>().type.toBeAssignableFrom(
      anyProp().optional,
    );
    expect<Vue2_6.PropOptions<string>>().type.toBeAssignableFrom(
      anyProp().optional,
    );
    expect<Vue2_6.PropOptions<string | undefined>>().type.toBeAssignableFrom(
      anyProp<string>().optional,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableFrom(
      anyProp<string>().optional,
    );

    expect(createVue2Component(anyProp().optional)).type.toBe<
      Vue2ComponentWithProp<any>
    >();

    expect(createVue2Component(anyProp<string>().optional)).type.toBe<
      Vue2ComponentWithProp<string | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions>().type.toBeAssignableFrom(anyProp().optional);
    expect<Vue2_7.PropOptions<number>>().type.toBeAssignableFrom(
      anyProp().optional,
    );
    expect<Vue2_7.PropOptions<string>>().type.toBeAssignableFrom(
      anyProp().optional,
    );
    expect<Vue2_7.PropOptions<string | undefined>>().type.toBeAssignableFrom(
      anyProp<string>().optional,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableFrom(
      anyProp<string>().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<any>>().type.toBeAssignableFrom(anyProp().optional);
    expect<Vue3.Prop<number>>().type.toBeAssignableFrom(anyProp().optional);
    expect<Vue3.Prop<string>>().type.toBeAssignableFrom(anyProp().optional);
    expect<Vue3.Prop<string | undefined>>().type.toBeAssignableFrom(
      anyProp<string>().optional,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableFrom(
      anyProp<string>().optional,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: anyProp().optional,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<any>();
  });
});

describe('anyProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions>().type.toBeAssignableFrom(anyProp().nullable);
    expect<Vue2_6.PropOptions<number>>().type.toBeAssignableFrom(
      anyProp().nullable,
    );
    expect<Vue2_6.PropOptions<string>>().type.toBeAssignableFrom(
      anyProp().nullable,
    );
    expect<Vue2_6.PropOptions<string | null>>().type.toBeAssignableFrom(
      anyProp<string>().nullable,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableFrom(
      anyProp<string>().nullable,
    );

    expect(createVue2Component(anyProp().nullable)).type.toBe<
      Vue2ComponentWithProp<any>
    >();

    expect(createVue2Component(anyProp<string>().nullable)).type.toBe<
      Vue2ComponentWithProp<string | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions>().type.toBeAssignableFrom(anyProp().nullable);
    expect<Vue2_7.PropOptions<number>>().type.toBeAssignableFrom(
      anyProp().nullable,
    );
    expect<Vue2_7.PropOptions<string>>().type.toBeAssignableFrom(
      anyProp().nullable,
    );
    expect<Vue2_7.PropOptions<string | null>>().type.toBeAssignableFrom(
      anyProp<string>().nullable,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableFrom(
      anyProp<string>().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<any>>().type.toBeAssignableFrom(anyProp().nullable);
    expect<Vue3.Prop<number>>().type.toBeAssignableFrom(anyProp().nullable);
    expect<Vue3.Prop<string>>().type.toBeAssignableFrom(anyProp().nullable);
    expect<Vue3.Prop<string | null>>().type.toBeAssignableFrom(
      anyProp<string>().nullable,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableFrom(
      anyProp<string>().nullable,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: anyProp().nullable,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<any>();
  });
});

describe('anyProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions>().type.toBeAssignableFrom(
      anyProp().withDefault('foo'),
    );
    expect<Vue2_6.PropOptions<string>>().type.toBeAssignableFrom(
      anyProp().withDefault('foo'),
    );
    expect<Vue2_6.PropOptions<number>>().type.toBeAssignableFrom(
      anyProp().withDefault('foo'),
    );
    expect<Vue2_6.PropOptions<string>>().type.toBeAssignableFrom(
      anyProp<string>().withDefault('foo'),
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignableFrom(
      anyProp<string>().withDefault('foo'),
    );

    expect(createVue2Component(anyProp().withDefault('foo'))).type.toBe<
      Vue2ComponentWithProp<any>
    >();

    expect(createVue2Component(anyProp<string>().withDefault('foo'))).type.toBe<
      Vue2ComponentWithProp<string>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions>().type.toBeAssignableFrom(
      anyProp().withDefault('foo'),
    );
    expect<Vue2_7.PropOptions<string>>().type.toBeAssignableFrom(
      anyProp().withDefault('foo'),
    );
    expect<Vue2_7.PropOptions<number>>().type.toBeAssignableFrom(
      anyProp().withDefault('foo'),
    );
    expect<Vue2_7.PropOptions<string>>().type.toBeAssignableFrom(
      anyProp<string>().withDefault('foo'),
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignableFrom(
      anyProp<string>().withDefault('foo'),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<any>>().type.toBeAssignableFrom(
      anyProp().withDefault('foo'),
    );
    expect<Vue3.Prop<string>>().type.toBeAssignableFrom(
      anyProp().withDefault('foo'),
    );
    expect<Vue3.Prop<number>>().type.toBeAssignableFrom(
      anyProp().withDefault('foo'),
    );
    expect<Vue3.Prop<string>>().type.toBeAssignableFrom(
      anyProp<string>().withDefault('foo'),
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignableFrom(
      anyProp<string>().withDefault('foo'),
    );

    const component = Vue3.defineComponent({
      props: {
        prop: anyProp().withDefault('foo'),
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<any>();
  });
});

describe('anyProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions>().type.toBeAssignableFrom(anyProp().required);
    expect<Vue2_6.PropOptions<string>>().type.toBeAssignableFrom(
      anyProp().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.toBeAssignableFrom(
      anyProp<string>().required,
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignableFrom(
      anyProp<string>().required,
    );

    expect(createVue2Component(anyProp().required)).type.toBe<
      Vue2ComponentWithProp<any>
    >();

    expect(createVue2Component(anyProp<string>().required)).type.toBe<
      Vue2ComponentWithProp<string>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions>().type.toBeAssignableFrom(anyProp().required);
    expect<Vue2_7.PropOptions<string>>().type.toBeAssignableFrom(
      anyProp().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.toBeAssignableFrom(
      anyProp<string>().required,
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignableFrom(
      anyProp<string>().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<any>>().type.toBeAssignableFrom(anyProp().required);
    expect<Vue3.Prop<string>>().type.toBeAssignableFrom(anyProp().required);
    expect<Vue3.Prop<string>>().type.toBeAssignableFrom(
      anyProp<string>().required,
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignableFrom(
      anyProp<string>().required,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: anyProp().required,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<any>();
  });
});
