import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { anyProp, anyDefaultProp, anyRequiredProp } from '../../src/prop-types/any';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('anyProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<any>>(anyProp());
    expectAssignable<Vue2.PropOptions<number>>(anyProp());
    expectAssignable<Vue2.PropOptions<string>>(anyProp());
    expectAssignable<Vue2.PropOptions<string | undefined>>(anyProp<string>());
    expectNotAssignable<Vue2.PropOptions<string>>(anyProp<string>());

    expectType<Vue2ComponentWithProp<any>>(
      createVue2Component(anyProp()),
    );

    expectType<Vue2ComponentWithProp<string | undefined>>(
      createVue2Component(anyProp<string>()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<any>>(anyProp());
    expectAssignable<CompositionApi.PropOptions<number>>(anyProp());
    expectAssignable<CompositionApi.PropOptions<string>>(anyProp());
    expectAssignable<CompositionApi.PropOptions<string | undefined>>(anyProp<string>());
    expectNotAssignable<CompositionApi.PropOptions<string>>(anyProp<string>());
  });
});

describe('anyDefaultProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<any>>(anyDefaultProp('foo'));
    expectAssignable<Vue2.PropOptions<string>>(anyDefaultProp('foo'));
    expectAssignable<Vue2.PropOptions<string>>(anyDefaultProp<string>('foo'));
    expectNotAssignable<Vue2.PropOptions<number>>(anyDefaultProp('foo'));
    expectNotAssignable<Vue2.PropOptions<number>>(anyDefaultProp<string>('foo'));

    expectType<Vue2ComponentWithProp<'foo'>>(
      createVue2Component(anyDefaultProp('foo')),
    );

    expectType<Vue2ComponentWithProp<string>>(
      createVue2Component(anyDefaultProp<string>('foo')),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<any>>(anyDefaultProp('foo'));
    expectAssignable<CompositionApi.PropOptions<string>>(anyDefaultProp('foo'));
    expectAssignable<CompositionApi.PropOptions<string>>(anyDefaultProp<string>('foo'));
    expectNotAssignable<CompositionApi.PropOptions<number>>(anyDefaultProp('foo'));
    expectNotAssignable<CompositionApi.PropOptions<number>>(anyDefaultProp<string>('foo'));
  });
});

describe('anyRequiredProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<any>>(anyRequiredProp());
    expectAssignable<Vue2.PropOptions<string>>(anyRequiredProp());
    expectAssignable<Vue2.PropOptions<string>>(anyRequiredProp<string>());
    expectNotAssignable<Vue2.PropOptions<number>>(anyRequiredProp<string>());

    expectType<Vue2ComponentWithProp<any>>(
      createVue2Component(anyRequiredProp()),
    );

    expectType<Vue2ComponentWithProp<string>>(
      createVue2Component(anyRequiredProp<string>()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<any>>(anyRequiredProp());
    expectAssignable<CompositionApi.PropOptions<string>>(anyRequiredProp());
    expectAssignable<CompositionApi.PropOptions<string>>(anyRequiredProp<string>());
    expectNotAssignable<CompositionApi.PropOptions<number>>(anyRequiredProp<string>());
  });
});
