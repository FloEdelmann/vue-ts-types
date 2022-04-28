import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { arrayProp, arrayDefaultProp, arrayRequiredProp } from '../../src/prop-types/array';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('arrayProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<unknown[] | undefined>>(arrayProp());
    expectAssignable<Vue2.PropOptions<string[] | undefined>>(arrayProp<string>());
    expectNotAssignable<Vue2.PropOptions<unknown[]>>(arrayProp());
    expectNotAssignable<Vue2.PropOptions<string[]>>(arrayProp<string>());

    expectType<Vue2ComponentWithProp<unknown[] | undefined>>(
      createVue2Component(arrayProp()),
    );

    expectType<Vue2ComponentWithProp<string[] | undefined>>(
      createVue2Component(arrayProp<string>()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<unknown[] | undefined>>(arrayProp());
    expectAssignable<CompositionApi.PropOptions<string[] | undefined>>(arrayProp<string>());
    expectNotAssignable<CompositionApi.PropOptions<unknown[]>>(arrayProp());
    expectNotAssignable<CompositionApi.PropOptions<string[]>>(arrayProp<string>());
  });
});

describe('arrayDefaultProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<string[]>>(arrayDefaultProp(['foo', 'bar']));
    expectNotAssignable<Vue2.PropOptions<number[]>>(arrayDefaultProp(['foo', 'bar']));

    expectType<Vue2ComponentWithProp<string[]>>(
      createVue2Component(arrayDefaultProp(['foo', 'bar'])),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<string[]>>(arrayDefaultProp(['foo', 'bar']));
    expectNotAssignable<CompositionApi.PropOptions<number[]>>(arrayDefaultProp(['foo', 'bar']));
  });
});

describe('arrayRequiredProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<unknown[]>>(arrayRequiredProp());
    expectAssignable<Vue2.PropOptions<string[]>>(arrayRequiredProp<string>());
    expectNotAssignable<Vue2.PropOptions<number[]>>(arrayRequiredProp<string>());

    expectType<Vue2ComponentWithProp<unknown[]>>(
      createVue2Component(arrayRequiredProp()),
    );

    expectType<Vue2ComponentWithProp<string[]>>(
      createVue2Component(arrayRequiredProp<string>()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<unknown[]>>(arrayRequiredProp());
    expectAssignable<CompositionApi.PropOptions<string[]>>(arrayRequiredProp<string>());
    expectNotAssignable<CompositionApi.PropOptions<number[]>>(arrayRequiredProp<string>());
  });
});
