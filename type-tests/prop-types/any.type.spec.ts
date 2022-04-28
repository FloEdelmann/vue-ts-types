import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { anyProp } from '../../src/prop-types/any';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('anyProp().optional', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<any>>(anyProp().optional);
    expectAssignable<Vue2.PropOptions<number>>(anyProp().optional);
    expectAssignable<Vue2.PropOptions<string>>(anyProp().optional);
    expectAssignable<Vue2.PropOptions<string | undefined>>(anyProp<string>().optional);
    expectNotAssignable<Vue2.PropOptions<string>>(anyProp<string>().optional);

    expectType<Vue2ComponentWithProp<any>>(
      createVue2Component(anyProp().optional),
    );

    expectType<Vue2ComponentWithProp<string | undefined>>(
      createVue2Component(anyProp<string>().optional),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<any>>(anyProp().optional);
    expectAssignable<CompositionApi.PropOptions<number>>(anyProp().optional);
    expectAssignable<CompositionApi.PropOptions<string>>(anyProp().optional);
    expectAssignable<CompositionApi.PropOptions<string | undefined>>(anyProp<string>().optional);
    expectNotAssignable<CompositionApi.PropOptions<string>>(anyProp<string>().optional);
  });
});

describe('anyProp().withDefault', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<any>>(anyProp().withDefault('foo'));
    expectAssignable<Vue2.PropOptions<string>>(anyProp().withDefault('foo'));
    expectAssignable<Vue2.PropOptions<number>>(anyProp().withDefault('foo'));
    expectAssignable<Vue2.PropOptions<string>>(anyProp<string>().withDefault('foo'));
    expectNotAssignable<Vue2.PropOptions<number>>(anyProp<string>().withDefault('foo'));

    expectType<Vue2ComponentWithProp<any>>(
      createVue2Component(anyProp().withDefault('foo')),
    );

    expectType<Vue2ComponentWithProp<string>>(
      createVue2Component(anyProp<string>().withDefault('foo')),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<any>>(anyProp().withDefault('foo'));
    expectAssignable<CompositionApi.PropOptions<string>>(anyProp().withDefault('foo'));
    expectAssignable<CompositionApi.PropOptions<number>>(anyProp().withDefault('foo'));
    expectAssignable<CompositionApi.PropOptions<string>>(anyProp<string>().withDefault('foo'));
    expectNotAssignable<CompositionApi.PropOptions<number>>(anyProp<string>().withDefault('foo'));
  });
});

describe('anyProp().required', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<any>>(anyProp().required);
    expectAssignable<Vue2.PropOptions<string>>(anyProp().required);
    expectAssignable<Vue2.PropOptions<string>>(anyProp<string>().required);
    expectNotAssignable<Vue2.PropOptions<number>>(anyProp<string>().required);

    expectType<Vue2ComponentWithProp<any>>(
      createVue2Component(anyProp().required),
    );

    expectType<Vue2ComponentWithProp<string>>(
      createVue2Component(anyProp<string>().required),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<any>>(anyProp().required);
    expectAssignable<CompositionApi.PropOptions<string>>(anyProp().required);
    expectAssignable<CompositionApi.PropOptions<string>>(anyProp<string>().required);
    expectNotAssignable<CompositionApi.PropOptions<number>>(anyProp<string>().required);
  });
});
