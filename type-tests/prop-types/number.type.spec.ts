import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { numberProp } from '../../src/prop-types/number';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('numberProp().optional', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<number | undefined>>(numberProp().optional);
    expectNotAssignable<Vue2.PropOptions<number>>(numberProp().optional);

    expectType<Vue2ComponentWithProp<number | undefined>>(
      createVue2Component(numberProp().optional),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<number | undefined>>(numberProp().optional);
    expectNotAssignable<CompositionApi.PropOptions<number>>(numberProp().optional);
  });
});

describe('numberProp().withDefault', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<number>>(numberProp().withDefault(27));
    expectNotAssignable<Vue2.PropOptions<string>>(numberProp().withDefault(27));

    expectType<Vue2ComponentWithProp<number>>(
      createVue2Component(numberProp().withDefault(27)),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<number>>(numberProp().withDefault(27));
    expectNotAssignable<CompositionApi.PropOptions<string>>(numberProp().withDefault(27));
  });
});

describe('numberProp().required', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<number>>(numberProp().required);
    expectNotAssignable<Vue2.PropOptions<string>>(numberProp().required);

    expectType<Vue2ComponentWithProp<number>>(
      createVue2Component(numberProp().required),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<number>>(numberProp().required);
    expectNotAssignable<CompositionApi.PropOptions<string>>(numberProp().required);
  });
});
