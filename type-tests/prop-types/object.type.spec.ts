import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { objectProp, objectDefaultProp, objectRequiredProp } from '../../src/prop-types/object';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

interface User {
  name: string;
}

describe('objectProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<object | undefined>>(objectProp());
    expectAssignable<Vue2.PropOptions<User | undefined>>(objectProp<User>());
    expectNotAssignable<Vue2.PropOptions<User>>(objectProp<User>());

    expectType<Vue2ComponentWithProp<object | undefined>>(
      createVue2Component(objectProp()),
    );

    expectType<Vue2ComponentWithProp<User | undefined>>(
      createVue2Component(objectProp<User>()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<object | undefined>>(objectProp());
    expectAssignable<CompositionApi.PropOptions<User | undefined>>(objectProp<User>());
    expectNotAssignable<CompositionApi.PropOptions<User>>(objectProp<User>());
  });
});

describe('objectDefaultProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<User>>(objectDefaultProp({ name: 'foo' }));
    expectNotAssignable<Vue2.PropOptions<User>>(objectDefaultProp({ foo: 'bar' }));

    expectType<Vue2ComponentWithProp<User>>(
      createVue2Component(objectDefaultProp({ name: 'foo' })),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<User>>(objectDefaultProp({ name: 'foo' }));
    expectNotAssignable<CompositionApi.PropOptions<User>>(objectDefaultProp({ foo: 'bar' }));
  });
});

describe('objectRequiredProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<object>>(objectRequiredProp());
    expectAssignable<Vue2.PropOptions<User>>(objectRequiredProp<User>());

    expectType<Vue2ComponentWithProp<object>>(
      createVue2Component(objectRequiredProp()),
    );

    expectType<Vue2ComponentWithProp<User>>(
      createVue2Component(objectRequiredProp<User>()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<object>>(objectRequiredProp());
    expectAssignable<CompositionApi.PropOptions<User>>(objectRequiredProp<User>());
  });
});
