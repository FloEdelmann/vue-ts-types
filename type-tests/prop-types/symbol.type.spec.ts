import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { symbolProp } from '../../src/prop-types/symbol';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('symbolProp().optional', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<symbol | undefined>>(symbolProp().optional);
    expectNotAssignable<Vue2.PropOptions<symbol>>(symbolProp().optional);

    expectType<Vue2ComponentWithProp<symbol | undefined>>(
      createVue2Component(symbolProp().optional),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<symbol | undefined>>(symbolProp().optional);
    expectNotAssignable<CompositionApi.PropOptions<symbol>>(symbolProp().optional);
  });
});

describe('symbolProp().withDefault', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<symbol>>(symbolProp().withDefault(Symbol.for('foo')));
    expectNotAssignable<Vue2.PropOptions<string>>(symbolProp().withDefault(Symbol.for('foo')));

    expectType<Vue2ComponentWithProp<symbol>>(
      createVue2Component(symbolProp().withDefault(Symbol.for('foo'))),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<symbol>>(symbolProp().withDefault(Symbol.for('foo')));
    expectNotAssignable<CompositionApi.PropOptions<string>>(symbolProp().withDefault(Symbol.for('foo')));
  });
});

describe('symbolProp().required', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<symbol>>(symbolProp().required);
    expectNotAssignable<Vue2.PropOptions<string>>(symbolProp().required);

    expectType<Vue2ComponentWithProp<symbol>>(
      createVue2Component(symbolProp().required),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<symbol>>(symbolProp().required);
    expectNotAssignable<CompositionApi.PropOptions<string>>(symbolProp().required);
  });
});
