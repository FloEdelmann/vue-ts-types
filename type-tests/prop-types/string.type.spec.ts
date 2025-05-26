import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import * as Vue3 from '@vue/runtime-core';
import { stringProp } from '../../src/prop-types/string';
import { createVue2Component } from '../utilities';
import type { Vue2ComponentWithProp } from '../utilities';

type Foo = 'a' | 'b' | 'c';

describe('stringProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<string | undefined>>().type.toBeAssignableWith(
      stringProp().optional,
    );
    expect<Vue2_6.PropOptions<Foo | undefined>>().type.toBeAssignableWith(
      stringProp<Foo>().optional,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableWith(
      stringProp().optional,
    );
    expect<Vue2_6.PropOptions<Foo>>().type.not.toBeAssignableWith(
      stringProp<Foo>().optional,
    );

    expect(createVue2Component(stringProp().optional)).type.toBe<
      Vue2ComponentWithProp<string | undefined>
    >();

    expect(createVue2Component(stringProp<Foo>().optional)).type.toBe<
      Vue2ComponentWithProp<Foo | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<string | undefined>>().type.toBeAssignableWith(
      stringProp().optional,
    );
    expect<Vue2_7.PropOptions<Foo | undefined>>().type.toBeAssignableWith(
      stringProp<Foo>().optional,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableWith(
      stringProp().optional,
    );
    expect<Vue2_7.PropOptions<Foo>>().type.not.toBeAssignableWith(
      stringProp<Foo>().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<string | undefined>>().type.toBeAssignableWith(
      stringProp().optional,
    );
    expect<Vue3.Prop<Foo | undefined>>().type.toBeAssignableWith(
      stringProp<Foo>().optional,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableWith(
      stringProp().optional,
    );
    expect<Vue3.Prop<Foo>>().type.not.toBeAssignableWith(
      stringProp<Foo>().optional,
    );

    const component1 = Vue3.defineComponent({
      props: {
        prop: stringProp().optional,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component1().prop).type.toBe<string | undefined>();

    const component2 = Vue3.defineComponent({
      props: {
        prop: stringProp<Foo>().optional,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component2().prop).type.toBe<Foo | undefined>();
  });
});

describe('stringProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<string | null>>().type.toBeAssignableWith(
      stringProp().nullable,
    );
    expect<Vue2_6.PropOptions<Foo | null>>().type.toBeAssignableWith(
      stringProp<Foo>().nullable,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableWith(
      stringProp().nullable,
    );
    expect<Vue2_6.PropOptions<Foo>>().type.not.toBeAssignableWith(
      stringProp<Foo>().nullable,
    );

    expect(createVue2Component(stringProp().nullable)).type.toBe<
      Vue2ComponentWithProp<string | null>
    >();

    expect(createVue2Component(stringProp<Foo>().nullable)).type.toBe<
      Vue2ComponentWithProp<Foo | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<string | null>>().type.toBeAssignableWith(
      stringProp().nullable,
    );
    expect<Vue2_7.PropOptions<Foo | null>>().type.toBeAssignableWith(
      stringProp<Foo>().nullable,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableWith(
      stringProp().nullable,
    );
    expect<Vue2_7.PropOptions<Foo>>().type.not.toBeAssignableWith(
      stringProp<Foo>().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<string | null>>().type.toBeAssignableWith(
      stringProp().nullable,
    );
    expect<Vue3.Prop<Foo | null>>().type.toBeAssignableWith(
      stringProp<Foo>().nullable,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableWith(
      stringProp().nullable,
    );
    expect<Vue3.Prop<Foo>>().type.not.toBeAssignableWith(
      stringProp<Foo>().nullable,
    );

    const component1 = Vue3.defineComponent({
      props: {
        prop: stringProp().nullable,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component1().prop).type.toBe<string | null>();

    const component2 = Vue3.defineComponent({
      props: {
        prop: stringProp<Foo>().nullable,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component2().prop).type.toBe<Foo | null>();
  });
});

describe('stringProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<string>>().type.toBeAssignableWith(
      stringProp().withDefault('foo'),
    );
    expect<Vue2_6.PropOptions<Foo>>().type.toBeAssignableWith(
      stringProp<Foo>().withDefault('a'),
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignableWith(
      stringProp().withDefault('foo'),
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignableWith(
      stringProp<Foo>().withDefault('a'),
    );

    expect(createVue2Component(stringProp().withDefault('foo'))).type.toBe<
      Vue2ComponentWithProp<string>
    >();

    expect(createVue2Component(stringProp<Foo>().withDefault('a'))).type.toBe<
      Vue2ComponentWithProp<Foo>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<string>>().type.toBeAssignableWith(
      stringProp().withDefault('foo'),
    );
    expect<Vue2_7.PropOptions<Foo>>().type.toBeAssignableWith(
      stringProp<Foo>().withDefault('a'),
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignableWith(
      stringProp().withDefault('foo'),
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignableWith(
      stringProp<Foo>().withDefault('a'),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<string>>().type.toBeAssignableWith(
      stringProp().withDefault('foo'),
    );
    expect<Vue3.Prop<Foo>>().type.toBeAssignableWith(
      stringProp<Foo>().withDefault('a'),
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignableWith(
      stringProp().withDefault('foo'),
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignableWith(
      stringProp<Foo>().withDefault('a'),
    );

    const component1 = Vue3.defineComponent({
      props: {
        prop: stringProp().withDefault('a'),
      },
      setup(props) {
        return props;
      },
    });
    expect(new component1().prop).type.toBe<string>();

    const component2 = Vue3.defineComponent({
      props: {
        prop: stringProp<Foo>().withDefault('a'),
      },
      setup(props) {
        return props;
      },
    });
    expect(new component2().prop).type.toBe<Foo>();
  });
});

describe('stringProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<string>>().type.toBeAssignableWith(
      stringProp().required,
    );
    expect<Vue2_6.PropOptions<Foo>>().type.toBeAssignableWith(
      stringProp<Foo>().required,
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignableWith(
      stringProp().required,
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignableWith(
      stringProp<Foo>().required,
    );

    expect(createVue2Component(stringProp().required)).type.toBe<
      Vue2ComponentWithProp<string>
    >();

    expect(createVue2Component(stringProp<Foo>().required)).type.toBe<
      Vue2ComponentWithProp<Foo>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<string>>().type.toBeAssignableWith(
      stringProp().required,
    );
    expect<Vue2_7.PropOptions<Foo>>().type.toBeAssignableWith(
      stringProp<Foo>().required,
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignableWith(
      stringProp().required,
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignableWith(
      stringProp<Foo>().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<string>>().type.toBeAssignableWith(stringProp().required);
    expect<Vue3.Prop<Foo>>().type.toBeAssignableWith(
      stringProp<Foo>().required,
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignableWith(
      stringProp().required,
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignableWith(
      stringProp<Foo>().required,
    );

    const component1 = Vue3.defineComponent({
      props: {
        prop: stringProp().required,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component1().prop).type.toBe<string>();

    const component2 = Vue3.defineComponent({
      props: {
        prop: stringProp<Foo>().required,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component2().prop).type.toBe<Foo>();
  });
});
