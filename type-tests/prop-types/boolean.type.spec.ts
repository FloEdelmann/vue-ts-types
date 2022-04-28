import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { booleanProp } from '../../src/prop-types/boolean';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('booleanProp().optional', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<boolean | undefined>>(booleanProp().optional);
    expectNotAssignable<Vue2.PropOptions<boolean>>(booleanProp().optional);

    expectType<Vue2ComponentWithProp<boolean | undefined>>(
      createVue2Component(booleanProp().optional),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<boolean | undefined>>(booleanProp().optional);
    expectNotAssignable<CompositionApi.PropOptions<boolean>>(booleanProp().optional);
  });
});

describe('booleanProp().withDefault(false)', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<boolean>>(booleanProp().withDefault(false));
    expectNotAssignable<Vue2.PropOptions<string>>(booleanProp().withDefault(false));

    expectType<Vue2ComponentWithProp<boolean>>(
      createVue2Component(booleanProp().withDefault(false)),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<boolean>>(booleanProp().withDefault(false));
    expectNotAssignable<CompositionApi.PropOptions<string>>(booleanProp().withDefault(false));
  });
});

describe('booleanProp().required', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<boolean>>(booleanProp().required);
    expectNotAssignable<Vue2.PropOptions<string>>(booleanProp().required);

    expectType<Vue2ComponentWithProp<boolean>>(
      createVue2Component(booleanProp().required),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<boolean>>(booleanProp().required);
    expectNotAssignable<CompositionApi.PropOptions<string>>(booleanProp().required);
  });
});
