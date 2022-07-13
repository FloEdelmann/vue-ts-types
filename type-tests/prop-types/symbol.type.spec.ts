import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { symbolProp } from '../../src/prop-types/symbol';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('symbolProp().optional', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<symbol | undefined>>(symbolProp().optional);
    expectNotAssignable<Vue2_6.PropOptions<symbol>>(symbolProp().optional);

    expectType<Vue2ComponentWithProp<symbol | undefined>>(
      createVue2Component(symbolProp().optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<symbol | undefined>>(symbolProp().optional);
    expectNotAssignable<Vue2_7.PropOptions<symbol>>(symbolProp().optional);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<symbol | undefined>>(symbolProp().optional);
    expectNotAssignable<Vue3.Prop<symbol>>(symbolProp().optional);
  });
});

describe('symbolProp().withDefault', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<symbol>>(symbolProp().withDefault(Symbol.for('foo')));
    expectNotAssignable<Vue2_6.PropOptions<string>>(symbolProp().withDefault(Symbol.for('foo')));

    expectType<Vue2ComponentWithProp<symbol>>(
      createVue2Component(symbolProp().withDefault(Symbol.for('foo'))),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<symbol>>(symbolProp().withDefault(Symbol.for('foo')));
    expectNotAssignable<Vue2_7.PropOptions<string>>(symbolProp().withDefault(Symbol.for('foo')));
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<symbol>>(symbolProp().withDefault(Symbol.for('foo')));
    expectNotAssignable<Vue3.Prop<string>>(symbolProp().withDefault(Symbol.for('foo')));
  });
});

describe('symbolProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<symbol>>(symbolProp().required);
    expectNotAssignable<Vue2_6.PropOptions<string>>(symbolProp().required);

    expectType<Vue2ComponentWithProp<symbol>>(
      createVue2Component(symbolProp().required),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<symbol>>(symbolProp().required);
    expectNotAssignable<Vue2_7.PropOptions<string>>(symbolProp().required);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<symbol>>(symbolProp().required);
    expectNotAssignable<Vue3.Prop<string>>(symbolProp().required);
  });
});
