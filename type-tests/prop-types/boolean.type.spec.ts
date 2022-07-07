import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import { booleanProp } from '../../src/prop-types/boolean';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('booleanProp().optional', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<boolean | undefined>>(booleanProp().optional);
    expectNotAssignable<Vue2_6.PropOptions<boolean>>(booleanProp().optional);

    expectType<Vue2ComponentWithProp<boolean | undefined>>(
      createVue2Component(booleanProp().optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<boolean | undefined>>(booleanProp().optional);
    expectNotAssignable<Vue2_7.PropOptions<boolean>>(booleanProp().optional);
  });
});

describe('booleanProp().withDefault(false)', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<boolean>>(booleanProp().withDefault(false));
    expectNotAssignable<Vue2_6.PropOptions<string>>(booleanProp().withDefault(false));

    expectType<Vue2ComponentWithProp<boolean>>(
      createVue2Component(booleanProp().withDefault(false)),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<boolean>>(booleanProp().withDefault(false));
    expectNotAssignable<Vue2_7.PropOptions<string>>(booleanProp().withDefault(false));
  });
});

describe('booleanProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<boolean>>(booleanProp().required);
    expectNotAssignable<Vue2_6.PropOptions<string>>(booleanProp().required);

    expectType<Vue2ComponentWithProp<boolean>>(
      createVue2Component(booleanProp().required),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<boolean>>(booleanProp().required);
    expectNotAssignable<Vue2_7.PropOptions<string>>(booleanProp().required);
  });
});
