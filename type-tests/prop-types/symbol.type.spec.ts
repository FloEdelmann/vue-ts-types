import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { symbolProp, symbolDefaultProp, symbolRequiredProp } from '../../src/prop-types/symbol';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('symbolProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<symbol | undefined>>(symbolProp());
    expectNotAssignable<Vue2.PropOptions<symbol>>(symbolProp());

    expectType<Vue2ComponentWithProp<symbol | undefined>>(
      createVue2Component(symbolProp()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<symbol | undefined>>(symbolProp());
    expectNotAssignable<CompositionApi.PropOptions<symbol>>(symbolProp());
  });
});

describe('symbolDefaultProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<symbol>>(symbolDefaultProp(Symbol.for('foo')));
    expectNotAssignable<Vue2.PropOptions<string>>(symbolDefaultProp(Symbol.for('foo')));

    expectType<Vue2ComponentWithProp<symbol>>(
      createVue2Component(symbolDefaultProp(Symbol.for('foo'))),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<symbol>>(symbolDefaultProp(Symbol.for('foo')));
    expectNotAssignable<CompositionApi.PropOptions<string>>(symbolDefaultProp(Symbol.for('foo')));
  });
});

describe('symbolRequiredProp', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<symbol>>(symbolRequiredProp());
    expectNotAssignable<Vue2.PropOptions<string>>(symbolRequiredProp());

    expectType<Vue2ComponentWithProp<symbol>>(
      createVue2Component(symbolRequiredProp()),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<symbol>>(symbolRequiredProp());
    expectNotAssignable<CompositionApi.PropOptions<string>>(symbolRequiredProp());
  });
});
