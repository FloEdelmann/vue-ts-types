import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { arrayProp } from '../../src/prop-types/array';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('arrayProp().optional', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<unknown[] | undefined>>(arrayProp().optional);
    expectAssignable<Vue2.PropOptions<string[] | undefined>>(arrayProp<string>().optional);
    expectNotAssignable<Vue2.PropOptions<unknown[]>>(arrayProp().optional);
    expectNotAssignable<Vue2.PropOptions<string[]>>(arrayProp<string>().optional);

    expectType<Vue2ComponentWithProp<unknown[] | undefined>>(
      createVue2Component(arrayProp().optional),
    );

    expectType<Vue2ComponentWithProp<string[] | undefined>>(
      createVue2Component(arrayProp<string>().optional),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<unknown[] | undefined>>(arrayProp().optional);
    expectAssignable<CompositionApi.PropOptions<string[] | undefined>>(arrayProp<string>().optional);
    expectNotAssignable<CompositionApi.PropOptions<unknown[]>>(arrayProp().optional);
    expectNotAssignable<CompositionApi.PropOptions<string[]>>(arrayProp<string>().optional);
  });
});

describe('arrayProp().nullable', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<unknown[] | null>>(arrayProp().nullable);
    expectAssignable<Vue2.PropOptions<string[] | null>>(arrayProp<string>().nullable);
    expectNotAssignable<Vue2.PropOptions<unknown[]>>(arrayProp().nullable);
    expectNotAssignable<Vue2.PropOptions<string[]>>(arrayProp<string>().nullable);

    expectType<Vue2ComponentWithProp<unknown[] | null>>(
      createVue2Component(arrayProp().nullable),
    );

    expectType<Vue2ComponentWithProp<string[] | null>>(
      createVue2Component(arrayProp<string>().nullable),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<unknown[] | null>>(arrayProp().nullable);
    expectAssignable<CompositionApi.PropOptions<string[] | null>>(arrayProp<string>().nullable);
    expectNotAssignable<CompositionApi.PropOptions<unknown[]>>(arrayProp().nullable);
    expectNotAssignable<CompositionApi.PropOptions<string[]>>(arrayProp<string>().nullable);
  });
});

describe('arrayProp().withDefault', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<unknown[]>>(arrayProp().withDefault(() => ['foo', 'bar']));
    expectNotAssignable<Vue2.PropOptions<string[]>>(arrayProp().withDefault(() => ['foo', 'bar']));
    expectAssignable<Vue2.PropOptions<string[]>>(arrayProp<string>().withDefault(() => ['foo', 'bar']));

    expectType<Vue2ComponentWithProp<string[]>>(
      createVue2Component(arrayProp<string>().withDefault(() => ['foo', 'bar'])),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<unknown[]>>(arrayProp().withDefault(() => ['foo', 'bar']));
    expectNotAssignable<CompositionApi.PropOptions<string[]>>(arrayProp().withDefault(() => ['foo', 'bar']));
    expectAssignable<CompositionApi.PropOptions<string[]>>(arrayProp<string>().withDefault(() => ['foo', 'bar']));
  });
});

describe('arrayProp().required', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<unknown[]>>(arrayProp().required);
    expectAssignable<Vue2.PropOptions<string[]>>(arrayProp<string>().required);
    expectNotAssignable<Vue2.PropOptions<number[]>>(arrayProp<string>().required);

    expectType<Vue2ComponentWithProp<unknown[]>>(
      createVue2Component(arrayProp().required),
    );

    expectType<Vue2ComponentWithProp<string[]>>(
      createVue2Component(arrayProp<string>().required),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<unknown[]>>(arrayProp().required);
    expectAssignable<CompositionApi.PropOptions<string[]>>(arrayProp<string>().required);
    expectNotAssignable<CompositionApi.PropOptions<number[]>>(arrayProp<string>().required);
  });
});
