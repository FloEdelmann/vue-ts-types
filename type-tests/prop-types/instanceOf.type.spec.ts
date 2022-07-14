import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
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
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<User | undefined>>(instanceOfProp(User).optional);
    expectNotAssignable<Vue2.PropOptions<Account | undefined>>(instanceOfProp(User).optional);

    expectType<Vue2ComponentWithProp<User | undefined>>(
      createVue2Component(instanceOfProp(User).optional),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<User | undefined>>(instanceOfProp(User).optional);
    expectNotAssignable<CompositionApi.PropOptions<Account>>(instanceOfProp(User).optional);
  });
});

describe('instanceOfProp().nullable', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<User | null>>(instanceOfProp(User).nullable);
    expectNotAssignable<Vue2.PropOptions<Account | null>>(instanceOfProp(User).nullable);

    expectType<Vue2ComponentWithProp<User | null>>(
      createVue2Component(instanceOfProp(User).nullable),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<User | null>>(instanceOfProp(User).nullable);
    expectNotAssignable<CompositionApi.PropOptions<Account>>(instanceOfProp(User).nullable);
  });
});

describe('instanceOfProp().withDefault', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<User>>(instanceOfProp(User).withDefault(() => new User()));
    expectNotAssignable<Vue2.PropOptions<Account>>(instanceOfProp(User).withDefault(() => new User()));

    expectType<Vue2ComponentWithProp<User>>(
      createVue2Component(instanceOfProp(User).withDefault(() => new User())),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<User>>(instanceOfProp(User).withDefault(() => new User()));
    expectNotAssignable<CompositionApi.PropOptions<Account>>(instanceOfProp(User).withDefault(() => new User()));
  });
});

describe('instanceOfProp().required', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<User>>(instanceOfProp(User).required);
    expectNotAssignable<Vue2.PropOptions<Account>>(instanceOfProp(User).required);

    expectType<Vue2ComponentWithProp<User>>(
      createVue2Component(instanceOfProp(User).required),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<User>>(instanceOfProp(User).required);
    expectNotAssignable<CompositionApi.PropOptions<Account>>(instanceOfProp(User).required);
  });
});
