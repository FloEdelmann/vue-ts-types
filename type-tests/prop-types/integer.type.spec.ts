import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import { integerProp } from '../../src/prop-types/integer';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('integerProp().optional', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<number | undefined>>(integerProp().optional);
    expectNotAssignable<Vue2_6.PropOptions<number>>(integerProp().optional);

    expectType<Vue2ComponentWithProp<number | undefined>>(
      createVue2Component(integerProp().optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<number | undefined>>(integerProp().optional);
    expectNotAssignable<Vue2_7.PropOptions<number>>(integerProp().optional);
  });
});

describe('integerProp().withDefault', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<number>>(integerProp().withDefault(27));
    expectNotAssignable<Vue2_6.PropOptions<string>>(integerProp().withDefault(27));

    expectType<Vue2ComponentWithProp<number>>(
      createVue2Component(integerProp().withDefault(27)),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<number>>(integerProp().withDefault(27));
    expectNotAssignable<Vue2_7.PropOptions<string>>(integerProp().withDefault(27));
  });
});

describe('integerProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<number>>(integerProp().required);
    expectNotAssignable<Vue2_6.PropOptions<string>>(integerProp().required);

    expectType<Vue2ComponentWithProp<number>>(
      createVue2Component(integerProp().required),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<number>>(integerProp().required);
    expectNotAssignable<Vue2_7.PropOptions<string>>(integerProp().required);
  });
});
