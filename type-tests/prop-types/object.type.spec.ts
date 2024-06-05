import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { objectProp } from '../../src/prop-types/object';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

interface User {
  name: string;
}

describe('objectProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<object | undefined>>().type.toBeAssignableWith(
      objectProp().optional,
    );
    expect<Vue2_6.PropOptions<User | undefined>>().type.toBeAssignableWith(
      objectProp<User>().optional,
    );
    expect<Vue2_6.PropOptions<User>>().type.not.toBeAssignableWith(
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
    expect<Vue2_7.PropOptions<object | undefined>>().type.toBeAssignableWith(
      objectProp().optional,
    );
    expect<Vue2_7.PropOptions<User | undefined>>().type.toBeAssignableWith(
      objectProp<User>().optional,
    );
    expect<Vue2_7.PropOptions<User>>().type.not.toBeAssignableWith(
      objectProp<User>().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<object | undefined>>().type.toBeAssignableWith(
      objectProp().optional,
    );
    expect<Vue3.Prop<User | undefined>>().type.toBeAssignableWith(
      objectProp<User>().optional,
    );
    expect<Vue3.Prop<User>>().type.not.toBeAssignableWith(
      objectProp<User>().optional,
    );
  });
});

describe('objectProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<object | null>>().type.toBeAssignableWith(
      objectProp().nullable,
    );
    expect<Vue2_6.PropOptions<User | null>>().type.toBeAssignableWith(
      objectProp<User>().nullable,
    );
    expect<Vue2_6.PropOptions<User>>().type.not.toBeAssignableWith(
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
    expect<Vue2_7.PropOptions<object | null>>().type.toBeAssignableWith(
      objectProp().nullable,
    );
    expect<Vue2_7.PropOptions<User | null>>().type.toBeAssignableWith(
      objectProp<User>().nullable,
    );
    expect<Vue2_7.PropOptions<User>>().type.not.toBeAssignableWith(
      objectProp<User>().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<object | null>>().type.toBeAssignableWith(
      objectProp().nullable,
    );
    expect<Vue3.Prop<User | null>>().type.toBeAssignableWith(
      objectProp<User>().nullable,
    );
    expect<Vue3.Prop<User>>().type.not.toBeAssignableWith(
      objectProp<User>().nullable,
    );
  });
});

const userGenerator = () => ({ name: 'bar' });

describe('objectProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<User>>().type.toBeAssignableWith(
      objectProp<User>().withDefault(userGenerator),
    );

    expect(
      createVue2Component(objectProp<User>().withDefault(userGenerator)),
    ).type.toBe<Vue2ComponentWithProp<User>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<User>>().type.toBeAssignableWith(
      objectProp<User>().withDefault(userGenerator),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<User>>().type.toBeAssignableWith(
      objectProp<User>().withDefault(userGenerator),
    );
  });
});

describe('objectProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<object>>().type.toBeAssignableWith(
      objectProp().required,
    );
    expect<Vue2_6.PropOptions<User>>().type.toBeAssignableWith(
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
    expect<Vue2_7.PropOptions<object>>().type.toBeAssignableWith(
      objectProp().required,
    );
    expect<Vue2_7.PropOptions<User>>().type.toBeAssignableWith(
      objectProp<User>().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<object>>().type.toBeAssignableWith(objectProp().required);
    expect<Vue3.Prop<User>>().type.toBeAssignableWith(
      objectProp<User>().required,
    );
  });
});
