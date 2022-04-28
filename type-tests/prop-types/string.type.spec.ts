import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { stringProp, stringDefaultProp, stringRequiredProp } from '../../src/prop-types/string';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('stringProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<string | undefined>>(stringProp());
    expectNotAssignable<Vue2.PropOptions<string>>(stringProp());

    expectType<Vue2ComponentWithProp<string | undefined>>(
      createVue2Component(stringProp()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<string | undefined>>(stringProp());
    expectNotAssignable<CompositionApi.PropOptions<string>>(stringProp());
  });
});

describe('stringDefaultProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<string>>(stringDefaultProp('foo'));
    expectNotAssignable<Vue2.PropOptions<number>>(stringDefaultProp('foo'));

    expectType<Vue2ComponentWithProp<string>>(
      createVue2Component(stringDefaultProp('foo')),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<string>>(stringDefaultProp('foo'));
    expectNotAssignable<CompositionApi.PropOptions<number>>(stringDefaultProp('foo'));
  });
});

describe('stringRequiredProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<string>>(stringRequiredProp());
    expectNotAssignable<Vue2.PropOptions<number>>(stringRequiredProp());

    expectType<Vue2ComponentWithProp<string>>(
      createVue2Component(stringRequiredProp()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<string>>(stringRequiredProp());
    expectNotAssignable<CompositionApi.PropOptions<number>>(stringRequiredProp());
  });
});
