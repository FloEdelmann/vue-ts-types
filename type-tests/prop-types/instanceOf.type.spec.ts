import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { instanceOfProp } from '../../src/prop-types/instanceOf';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

class User {
  name = '';
}
class Account {
  email = '';
}

describe('instanceOfProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<User | undefined>>().type.toBeAssignableWith(
      instanceOfProp(User).optional,
    );
    expect<
      Vue2_6.PropOptions<Account | undefined>
    >().type.not.toBeAssignableWith(instanceOfProp(User).optional);

    expect(createVue2Component(instanceOfProp(User).optional)).type.toBe<
      Vue2ComponentWithProp<User | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<User | undefined>>().type.toBeAssignableWith(
      instanceOfProp(User).optional,
    );
    expect<Vue2_7.PropOptions<Account>>().type.not.toBeAssignableWith(
      instanceOfProp(User).optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<User | undefined>>().type.toBeAssignableWith(
      instanceOfProp(User).optional,
    );
    expect<Vue3.Prop<Account>>().type.not.toBeAssignableWith(
      instanceOfProp(User).optional,
    );
  });
});

describe('instanceOfProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<User | undefined>>().type.toBeAssignableWith(
      instanceOfProp(User).optional,
    );
    expect<
      Vue2_6.PropOptions<Account | undefined>
    >().type.not.toBeAssignableWith(instanceOfProp(User).optional);

    expect(createVue2Component(instanceOfProp(User).optional)).type.toBe<
      Vue2ComponentWithProp<User | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<User | undefined>>().type.toBeAssignableWith(
      instanceOfProp(User).optional,
    );
    expect<Vue2_7.PropOptions<Account>>().type.not.toBeAssignableWith(
      instanceOfProp(User).optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<User | undefined>>().type.toBeAssignableWith(
      instanceOfProp(User).optional,
    );
    expect<Vue3.Prop<Account>>().type.not.toBeAssignableWith(
      instanceOfProp(User).optional,
    );
  });
});

describe('instanceOfProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<User>>().type.toBeAssignableWith(
      instanceOfProp(User).withDefault(() => new User()),
    );
    expect<Vue2_6.PropOptions<Account>>().type.not.toBeAssignableWith(
      instanceOfProp(User).withDefault(() => new User()),
    );

    expect(
      createVue2Component(instanceOfProp(User).withDefault(() => new User())),
    ).type.toBe<Vue2ComponentWithProp<User>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<User>>().type.toBeAssignableWith(
      instanceOfProp(User).withDefault(() => new User()),
    );
    expect<Vue2_7.PropOptions<Account>>().type.not.toBeAssignableWith(
      instanceOfProp(User).withDefault(() => new User()),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<User>>().type.toBeAssignableWith(
      instanceOfProp(User).withDefault(() => new User()),
    );
    expect<Vue3.Prop<Account>>().type.not.toBeAssignableWith(
      instanceOfProp(User).withDefault(() => new User()),
    );
  });
});

describe('instanceOfProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<User>>().type.toBeAssignableWith(
      instanceOfProp(User).required,
    );
    expect<Vue2_6.PropOptions<Account>>().type.not.toBeAssignableWith(
      instanceOfProp(User).required,
    );

    expect(createVue2Component(instanceOfProp(User).required)).type.toBe<
      Vue2ComponentWithProp<User>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<User>>().type.toBeAssignableWith(
      instanceOfProp(User).required,
    );
    expect<Vue2_7.PropOptions<Account>>().type.not.toBeAssignableWith(
      instanceOfProp(User).required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<User>>().type.toBeAssignableWith(
      instanceOfProp(User).required,
    );
    expect<Vue3.Prop<Account>>().type.not.toBeAssignableWith(
      instanceOfProp(User).required,
    );
  });
});
