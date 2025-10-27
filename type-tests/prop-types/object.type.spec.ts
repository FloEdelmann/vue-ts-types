import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import * as Vue3 from '@vue/runtime-core';
import { objectProp } from '../../src/prop-types/object';
import { createVue2Component } from '../utilities';
import type { Vue2ComponentWithProp } from '../utilities';

interface User {
  name: string;
}

describe('objectProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<object | undefined>>().type.toBeAssignableFrom(
      objectProp().optional,
    );
    expect<Vue2_6.PropOptions<User | undefined>>().type.toBeAssignableFrom(
      objectProp<User>().optional,
    );
    expect<Vue2_6.PropOptions<User>>().type.not.toBeAssignableFrom(
      objectProp<User>().optional,
    );

    expect(createVue2Component(objectProp().optional)).type.toBe<
      Vue2ComponentWithProp<object | undefined>
    >();

    expect(createVue2Component(objectProp<User>().optional)).type.toBe<
      Vue2ComponentWithProp<User | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<object | undefined>>().type.toBeAssignableFrom(
      objectProp().optional,
    );
    expect<Vue2_7.PropOptions<User | undefined>>().type.toBeAssignableFrom(
      objectProp<User>().optional,
    );
    expect<Vue2_7.PropOptions<User>>().type.not.toBeAssignableFrom(
      objectProp<User>().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<object | undefined>>().type.toBeAssignableFrom(
      objectProp().optional,
    );
    expect<Vue3.Prop<User | undefined>>().type.toBeAssignableFrom(
      objectProp<User>().optional,
    );
    expect<Vue3.Prop<User>>().type.not.toBeAssignableFrom(
      objectProp<User>().optional,
    );

    const component1 = Vue3.defineComponent({
      props: {
        prop: objectProp().optional,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component1().prop).type.toBe<object | undefined>();

    const component2 = Vue3.defineComponent({
      props: {
        prop: objectProp<User>().optional,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component2().prop).type.toBe<User | undefined>();
  });
});

describe('objectProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<object | null>>().type.toBeAssignableFrom(
      objectProp().nullable,
    );
    expect<Vue2_6.PropOptions<User | null>>().type.toBeAssignableFrom(
      objectProp<User>().nullable,
    );
    expect<Vue2_6.PropOptions<User>>().type.not.toBeAssignableFrom(
      objectProp<User>().nullable,
    );

    expect(createVue2Component(objectProp().nullable)).type.toBe<
      Vue2ComponentWithProp<object | null>
    >();

    expect(createVue2Component(objectProp<User>().nullable)).type.toBe<
      Vue2ComponentWithProp<User | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<object | null>>().type.toBeAssignableFrom(
      objectProp().nullable,
    );
    expect<Vue2_7.PropOptions<User | null>>().type.toBeAssignableFrom(
      objectProp<User>().nullable,
    );
    expect<Vue2_7.PropOptions<User>>().type.not.toBeAssignableFrom(
      objectProp<User>().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<object | null>>().type.toBeAssignableFrom(
      objectProp().nullable,
    );
    expect<Vue3.Prop<User | null>>().type.toBeAssignableFrom(
      objectProp<User>().nullable,
    );
    expect<Vue3.Prop<User>>().type.not.toBeAssignableFrom(
      objectProp<User>().nullable,
    );

    const component1 = Vue3.defineComponent({
      props: {
        prop: objectProp().nullable,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component1().prop).type.toBe<object | null>();

    const component2 = Vue3.defineComponent({
      props: {
        prop: objectProp<User>().nullable,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component2().prop).type.toBe<User | null>();
  });
});

const userGenerator = () => ({ name: 'bar' });

describe('objectProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<User>>().type.toBeAssignableFrom(
      objectProp<User>().withDefault(userGenerator),
    );

    expect(
      createVue2Component(objectProp<User>().withDefault(userGenerator)),
    ).type.toBe<Vue2ComponentWithProp<User>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<User>>().type.toBeAssignableFrom(
      objectProp<User>().withDefault(userGenerator),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<User>>().type.toBeAssignableFrom(
      objectProp<User>().withDefault(userGenerator),
    );

    const component = Vue3.defineComponent({
      props: {
        prop: objectProp<User>().withDefault(userGenerator),
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<User>();
  });
});

describe('objectProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<object>>().type.toBeAssignableFrom(
      objectProp().required,
    );
    expect<Vue2_6.PropOptions<User>>().type.toBeAssignableFrom(
      objectProp<User>().required,
    );

    expect(createVue2Component(objectProp().required)).type.toBe<
      Vue2ComponentWithProp<object>
    >();

    expect(createVue2Component(objectProp<User>().required)).type.toBe<
      Vue2ComponentWithProp<User>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<object>>().type.toBeAssignableFrom(
      objectProp().required,
    );
    expect<Vue2_7.PropOptions<User>>().type.toBeAssignableFrom(
      objectProp<User>().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<object>>().type.toBeAssignableFrom(objectProp().required);
    expect<Vue3.Prop<User>>().type.toBeAssignableFrom(
      objectProp<User>().required,
    );

    const component1 = Vue3.defineComponent({
      props: {
        prop: objectProp().required,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component1().prop).type.toBe<object>();

    const component2 = Vue3.defineComponent({
      props: {
        prop: objectProp<User>().required,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component2().prop).type.toBe<User>();
  });
});
