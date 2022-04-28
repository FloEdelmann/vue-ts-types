import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { booleanProp, booleanDefaultProp, booleanRequiredProp } from '../../src/prop-types/boolean';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('booleanProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<boolean | undefined>>(booleanProp());
    expectNotAssignable<Vue2.PropOptions<boolean>>(booleanProp());

    expectType<Vue2ComponentWithProp<boolean | undefined>>(
      createVue2Component(booleanProp()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<boolean | undefined>>(booleanProp());
    expectNotAssignable<CompositionApi.PropOptions<boolean>>(booleanProp());
  });
});

describe('booleanDefaultProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<boolean>>(booleanDefaultProp(false));
    expectNotAssignable<Vue2.PropOptions<string>>(booleanDefaultProp(false));

    expectType<Vue2ComponentWithProp<boolean>>(
      createVue2Component(booleanDefaultProp(false)),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<boolean>>(booleanDefaultProp(false));
    expectNotAssignable<CompositionApi.PropOptions<string>>(booleanDefaultProp(false));
  });
});

describe('booleanRequiredProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<boolean>>(booleanRequiredProp());
    expectNotAssignable<Vue2.PropOptions<string>>(booleanRequiredProp());

    expectType<Vue2ComponentWithProp<boolean>>(
      createVue2Component(booleanRequiredProp()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<boolean>>(booleanRequiredProp());
    expectNotAssignable<CompositionApi.PropOptions<string>>(booleanRequiredProp());
  });
});
