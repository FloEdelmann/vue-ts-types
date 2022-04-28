import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { instanceOfProp, instanceOfDefaultProp, instanceOfRequiredProp } from '../../src/prop-types/instanceOf';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

class User {
  name = '';
}
class Account {
  email = '';
}

describe('instanceOfProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<User | undefined>>(instanceOfProp(User));
    expectNotAssignable<Vue2.PropOptions<Account | undefined>>(instanceOfProp(User));

    expectType<Vue2ComponentWithProp<User | undefined>>(
      createVue2Component(instanceOfProp(User)),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<User | undefined>>(instanceOfProp(User));
    expectNotAssignable<CompositionApi.PropOptions<Account>>(instanceOfProp(User));
  });
});

describe('instanceOfDefaultProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<User>>(instanceOfDefaultProp(User, () => new User()));
    expectNotAssignable<Vue2.PropOptions<Account>>(instanceOfDefaultProp(User, () => new User()));

    expectType<Vue2ComponentWithProp<User>>(
      createVue2Component(instanceOfDefaultProp(User, () => new User())),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<User>>(instanceOfDefaultProp(User, () => new User()));
    expectNotAssignable<CompositionApi.PropOptions<Account>>(instanceOfDefaultProp(User, () => new User()));
  });
});

describe('instanceOfRequiredProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<User>>(instanceOfRequiredProp(User));
    expectNotAssignable<Vue2.PropOptions<Account>>(instanceOfRequiredProp(User));

    expectType<Vue2ComponentWithProp<User>>(
      createVue2Component(instanceOfRequiredProp(User)),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<User>>(instanceOfRequiredProp(User));
    expectNotAssignable<CompositionApi.PropOptions<Account>>(instanceOfRequiredProp(User));
  });
});
