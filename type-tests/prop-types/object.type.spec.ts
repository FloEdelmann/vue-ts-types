import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import { objectProp } from '../../src/prop-types/object';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

interface User {
  name: string;
}

describe('objectProp().optional', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<object | undefined>>(objectProp().optional);
    expectAssignable<Vue2_6.PropOptions<User | undefined>>(objectProp<User>().optional);
    expectNotAssignable<Vue2_6.PropOptions<User>>(objectProp<User>().optional);

    expectType<Vue2ComponentWithProp<object | undefined>>(
      createVue2Component(objectProp().optional),
    );

    expectType<Vue2ComponentWithProp<User | undefined>>(
      createVue2Component(objectProp<User>().optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<object | undefined>>(objectProp().optional);
    expectAssignable<Vue2_7.PropOptions<User | undefined>>(objectProp<User>().optional);
    expectNotAssignable<Vue2_7.PropOptions<User>>(objectProp<User>().optional);
  });
});

const userGenerator = () => ({ name: 'bar' });

describe('objectProp().withDefault', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<User>>(objectProp<User>().withDefault(userGenerator));

    expectType<Vue2ComponentWithProp<User>>(
      createVue2Component(objectProp<User>().withDefault(userGenerator)),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<User>>(objectProp<User>().withDefault(userGenerator));
  });
});

describe('objectProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<object>>(objectProp().required);
    expectAssignable<Vue2_6.PropOptions<User>>(objectProp<User>().required);

    expectType<Vue2ComponentWithProp<object>>(
      createVue2Component(objectProp().required),
    );

    expectType<Vue2ComponentWithProp<User>>(
      createVue2Component(objectProp<User>().required),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<object>>(objectProp().required);
    expectAssignable<Vue2_7.PropOptions<User>>(objectProp<User>().required);
  });
});
