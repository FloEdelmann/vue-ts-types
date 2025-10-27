import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import * as Vue3 from '@vue/runtime-core';
import { instanceOfProp } from '../../src/prop-types/instanceOf';
import { createVue2Component } from '../utilities';
import type { Vue2ComponentWithProp } from '../utilities';

class User {
  name = '';
}
class Account {
  email = '';
}

describe('instanceOfProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<User | undefined>>().type.toBeAssignableFrom(
      instanceOfProp(User).optional,
    );
    expect<
      Vue2_6.PropOptions<Account | undefined>
    >().type.not.toBeAssignableFrom(instanceOfProp(User).optional);

    expect(createVue2Component(instanceOfProp(User).optional)).type.toBe<
      Vue2ComponentWithProp<User | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<User | undefined>>().type.toBeAssignableFrom(
      instanceOfProp(User).optional,
    );
    expect<Vue2_7.PropOptions<Account>>().type.not.toBeAssignableFrom(
      instanceOfProp(User).optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<User | undefined>>().type.toBeAssignableFrom(
      instanceOfProp(User).optional,
    );
    expect<Vue3.Prop<Account>>().type.not.toBeAssignableFrom(
      instanceOfProp(User).optional,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: instanceOfProp(User).optional,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<User | undefined>();
  });
});

describe('instanceOfProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<User | undefined>>().type.toBeAssignableFrom(
      instanceOfProp(User).optional,
    );
    expect<
      Vue2_6.PropOptions<Account | undefined>
    >().type.not.toBeAssignableFrom(instanceOfProp(User).optional);

    expect(createVue2Component(instanceOfProp(User).optional)).type.toBe<
      Vue2ComponentWithProp<User | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<User | undefined>>().type.toBeAssignableFrom(
      instanceOfProp(User).optional,
    );
    expect<Vue2_7.PropOptions<Account>>().type.not.toBeAssignableFrom(
      instanceOfProp(User).optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<User | undefined>>().type.toBeAssignableFrom(
      instanceOfProp(User).optional,
    );
    expect<Vue3.Prop<Account>>().type.not.toBeAssignableFrom(
      instanceOfProp(User).optional,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: instanceOfProp(User).nullable,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<User | null>();
  });
});

describe('instanceOfProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<User>>().type.toBeAssignableFrom(
      instanceOfProp(User).withDefault(() => new User()),
    );
    expect<Vue2_6.PropOptions<Account>>().type.not.toBeAssignableFrom(
      instanceOfProp(User).withDefault(() => new User()),
    );

    expect(
      createVue2Component(instanceOfProp(User).withDefault(() => new User())),
    ).type.toBe<Vue2ComponentWithProp<User>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<User>>().type.toBeAssignableFrom(
      instanceOfProp(User).withDefault(() => new User()),
    );
    expect<Vue2_7.PropOptions<Account>>().type.not.toBeAssignableFrom(
      instanceOfProp(User).withDefault(() => new User()),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<User>>().type.toBeAssignableFrom(
      instanceOfProp(User).withDefault(() => new User()),
    );
    expect<Vue3.Prop<Account>>().type.not.toBeAssignableFrom(
      instanceOfProp(User).withDefault(() => new User()),
    );

    const component = Vue3.defineComponent({
      props: {
        prop: instanceOfProp(User).withDefault(() => new User()),
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<User>();
  });
});

describe('instanceOfProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<User>>().type.toBeAssignableFrom(
      instanceOfProp(User).required,
    );
    expect<Vue2_6.PropOptions<Account>>().type.not.toBeAssignableFrom(
      instanceOfProp(User).required,
    );

    expect(createVue2Component(instanceOfProp(User).required)).type.toBe<
      Vue2ComponentWithProp<User>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<User>>().type.toBeAssignableFrom(
      instanceOfProp(User).required,
    );
    expect<Vue2_7.PropOptions<Account>>().type.not.toBeAssignableFrom(
      instanceOfProp(User).required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<User>>().type.toBeAssignableFrom(
      instanceOfProp(User).required,
    );
    expect<Vue3.Prop<Account>>().type.not.toBeAssignableFrom(
      instanceOfProp(User).required,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: instanceOfProp(User).required,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<User>();
  });
});
