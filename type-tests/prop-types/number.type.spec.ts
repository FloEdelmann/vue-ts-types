import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { numberProp, numberDefaultProp, numberRequiredProp } from '../../src/prop-types/number';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('numberProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<number | undefined>>(numberProp());
    expectNotAssignable<Vue2.PropOptions<number>>(numberProp());

    expectType<Vue2ComponentWithProp<number | undefined>>(
      createVue2Component(numberProp()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<number | undefined>>(numberProp());
    expectNotAssignable<CompositionApi.PropOptions<number>>(numberProp());
  });
});

describe('numberDefaultProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<number>>(numberDefaultProp(27));
    expectNotAssignable<Vue2.PropOptions<string>>(numberDefaultProp(27));

    expectType<Vue2ComponentWithProp<number>>(
      createVue2Component(numberDefaultProp(27)),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<number>>(numberDefaultProp(27));
    expectNotAssignable<CompositionApi.PropOptions<string>>(numberDefaultProp(27));
  });
});

describe('numberRequiredProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<number>>(numberRequiredProp());
    expectNotAssignable<Vue2.PropOptions<string>>(numberRequiredProp());

    expectType<Vue2ComponentWithProp<number>>(
      createVue2Component(numberRequiredProp()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<number>>(numberRequiredProp());
    expectNotAssignable<CompositionApi.PropOptions<string>>(numberRequiredProp());
  });
});
