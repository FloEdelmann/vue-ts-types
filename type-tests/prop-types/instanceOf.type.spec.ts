import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
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
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<User | undefined>>(instanceOfProp(User).optional);
    expectNotAssignable<Vue2_6.PropOptions<Account | undefined>>(instanceOfProp(User).optional);

    expectType<Vue2ComponentWithProp<User | undefined>>(
      createVue2Component(instanceOfProp(User).optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<User | undefined>>(instanceOfProp(User).optional);
    expectNotAssignable<Vue2_7.PropOptions<Account>>(instanceOfProp(User).optional);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<User | undefined>>(instanceOfProp(User).optional);
    expectNotAssignable<Vue3.Prop<Account>>(instanceOfProp(User).optional);
  });
});

describe('instanceOfProp().nullable', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<User | undefined>>(instanceOfProp(User).optional);
    expectNotAssignable<Vue2_6.PropOptions<Account | undefined>>(instanceOfProp(User).optional);

    expectType<Vue2ComponentWithProp<User | undefined>>(
      createVue2Component(instanceOfProp(User).optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<User | undefined>>(instanceOfProp(User).optional);
    expectNotAssignable<Vue2_7.PropOptions<Account>>(instanceOfProp(User).optional);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<User | undefined>>(instanceOfProp(User).optional);
    expectNotAssignable<Vue3.Prop<Account>>(instanceOfProp(User).optional);
  });
});

describe('instanceOfProp().withDefault', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<User>>(instanceOfProp(User).withDefault(() => new User()));
    expectNotAssignable<Vue2_6.PropOptions<Account>>(instanceOfProp(User).withDefault(() => new User()));

    expectType<Vue2ComponentWithProp<User>>(
      createVue2Component(instanceOfProp(User).withDefault(() => new User())),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<User>>(instanceOfProp(User).withDefault(() => new User()));
    expectNotAssignable<Vue2_7.PropOptions<Account>>(instanceOfProp(User).withDefault(() => new User()));
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<User>>(instanceOfProp(User).withDefault(() => new User()));
    expectNotAssignable<Vue3.Prop<Account>>(instanceOfProp(User).withDefault(() => new User()));
  });
});

describe('instanceOfProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<User>>(instanceOfProp(User).required);
    expectNotAssignable<Vue2_6.PropOptions<Account>>(instanceOfProp(User).required);

    expectType<Vue2ComponentWithProp<User>>(
      createVue2Component(instanceOfProp(User).required),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<User>>(instanceOfProp(User).required);
    expectNotAssignable<Vue2_7.PropOptions<Account>>(instanceOfProp(User).required);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<User>>(instanceOfProp(User).required);
    expectNotAssignable<Vue3.Prop<Account>>(instanceOfProp(User).required);
  });
});
