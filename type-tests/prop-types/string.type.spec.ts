import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { stringProp } from '../../src/prop-types/string';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('stringProp().optional', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<string | undefined>>(stringProp().optional);
    expectNotAssignable<Vue2.PropOptions<string>>(stringProp().optional);

    expectType<Vue2ComponentWithProp<string | undefined>>(
      createVue2Component(stringProp().optional),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<string | undefined>>(stringProp().optional);
    expectNotAssignable<CompositionApi.PropOptions<string>>(stringProp().optional);
  });
});

describe('stringProp().withDefault', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<string>>(stringProp().withDefault('foo'));
    expectNotAssignable<Vue2.PropOptions<number>>(stringProp().withDefault('foo'));

    expectType<Vue2ComponentWithProp<string>>(
      createVue2Component(stringProp().withDefault('foo')),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<string>>(stringProp().withDefault('foo'));
    expectNotAssignable<CompositionApi.PropOptions<number>>(stringProp().withDefault('foo'));
  });
});

describe('stringProp().required', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<string>>(stringProp().required);
    expectNotAssignable<Vue2.PropOptions<number>>(stringProp().required);

    expectType<Vue2ComponentWithProp<string>>(
      createVue2Component(stringProp().required),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<string>>(stringProp().required);
    expectNotAssignable<CompositionApi.PropOptions<number>>(stringProp().required);
  });
});
