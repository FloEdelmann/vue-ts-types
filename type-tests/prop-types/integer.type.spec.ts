import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { integerProp, integerDefaultProp, integerRequiredProp } from '../../src/prop-types/integer';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('integerProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<number | undefined>>(integerProp());
    expectNotAssignable<Vue2.PropOptions<number>>(integerProp());

    expectType<Vue2ComponentWithProp<number | undefined>>(
      createVue2Component(integerProp()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<number | undefined>>(integerProp());
    expectNotAssignable<CompositionApi.PropOptions<number>>(integerProp());
  });
});

describe('integerDefaultProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<number>>(integerDefaultProp(27));
    expectNotAssignable<Vue2.PropOptions<string>>(integerDefaultProp(27));

    expectType<Vue2ComponentWithProp<number>>(
      createVue2Component(integerDefaultProp(27)),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<number>>(integerDefaultProp(27));
    expectNotAssignable<CompositionApi.PropOptions<string>>(integerDefaultProp(27));
  });
});

describe('integerRequiredProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<number>>(integerRequiredProp());
    expectNotAssignable<Vue2.PropOptions<string>>(integerRequiredProp());

    expectType<Vue2ComponentWithProp<number>>(
      createVue2Component(integerRequiredProp()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<number>>(integerRequiredProp());
    expectNotAssignable<CompositionApi.PropOptions<string>>(integerRequiredProp());
  });
});
