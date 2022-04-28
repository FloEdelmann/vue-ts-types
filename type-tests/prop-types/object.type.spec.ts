import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { objectProp } from '../../src/prop-types/object';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

interface User {
  name: string;
}

describe('objectProp().optional', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<object | undefined>>(objectProp().optional);
    expectAssignable<Vue2.PropOptions<User | undefined>>(objectProp<User>().optional);
    expectNotAssignable<Vue2.PropOptions<User>>(objectProp<User>().optional);

    expectType<Vue2ComponentWithProp<object | undefined>>(
      createVue2Component(objectProp().optional),
    );

    expectType<Vue2ComponentWithProp<User | undefined>>(
      createVue2Component(objectProp<User>().optional),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<object | undefined>>(objectProp().optional);
    expectAssignable<CompositionApi.PropOptions<User | undefined>>(objectProp<User>().optional);
    expectNotAssignable<CompositionApi.PropOptions<User>>(objectProp<User>().optional);
  });
});

const userGenerator = () => ({ name: 'bar' });

describe('objectProp().withDefault', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<User>>(objectProp<User>().withDefault(userGenerator));

    expectType<Vue2ComponentWithProp<User>>(
      createVue2Component(objectProp<User>().withDefault(userGenerator)),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<User>>(objectProp<User>().withDefault(userGenerator));
  });
});

describe('objectProp().required', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<object>>(objectProp().required);
    expectAssignable<Vue2.PropOptions<User>>(objectProp<User>().required);

    expectType<Vue2ComponentWithProp<object>>(
      createVue2Component(objectProp().required),
    );

    expectType<Vue2ComponentWithProp<User>>(
      createVue2Component(objectProp<User>().required),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<object>>(objectProp().required);
    expectAssignable<CompositionApi.PropOptions<User>>(objectProp<User>().required);
  });
});
