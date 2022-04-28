import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { integerProp } from '../../src/prop-types/integer';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('integerProp().optional', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<number | undefined>>(integerProp().optional);
    expectNotAssignable<Vue2.PropOptions<number>>(integerProp().optional);

    expectType<Vue2ComponentWithProp<number | undefined>>(
      createVue2Component(integerProp().optional),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<number | undefined>>(integerProp().optional);
    expectNotAssignable<CompositionApi.PropOptions<number>>(integerProp().optional);
  });
});

describe('integerProp().withDefault', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<number>>(integerProp().withDefault(27));
    expectNotAssignable<Vue2.PropOptions<string>>(integerProp().withDefault(27));

    expectType<Vue2ComponentWithProp<number>>(
      createVue2Component(integerProp().withDefault(27)),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<number>>(integerProp().withDefault(27));
    expectNotAssignable<CompositionApi.PropOptions<string>>(integerProp().withDefault(27));
  });
});

describe('integerProp().required', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<number>>(integerProp().required);
    expectNotAssignable<Vue2.PropOptions<string>>(integerProp().required);

    expectType<Vue2ComponentWithProp<number>>(
      createVue2Component(integerProp().required),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<number>>(integerProp().required);
    expectNotAssignable<CompositionApi.PropOptions<string>>(integerProp().required);
  });
});
