import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import { numberProp } from '../../src/prop-types/number';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('numberProp().optional', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<number | undefined>>(numberProp().optional);
    expectNotAssignable<Vue2_6.PropOptions<number>>(numberProp().optional);

    expectType<Vue2ComponentWithProp<number | undefined>>(
      createVue2Component(numberProp().optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<number | undefined>>(numberProp().optional);
    expectNotAssignable<Vue2_7.PropOptions<number>>(numberProp().optional);
  });
});

describe('numberProp().withDefault', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<number>>(numberProp().withDefault(27));
    expectNotAssignable<Vue2_6.PropOptions<string>>(numberProp().withDefault(27));

    expectType<Vue2ComponentWithProp<number>>(
      createVue2Component(numberProp().withDefault(27)),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<number>>(numberProp().withDefault(27));
    expectNotAssignable<Vue2_7.PropOptions<string>>(numberProp().withDefault(27));
  });
});

describe('numberProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<number>>(numberProp().required);
    expectNotAssignable<Vue2_6.PropOptions<string>>(numberProp().required);

    expectType<Vue2ComponentWithProp<number>>(
      createVue2Component(numberProp().required),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<number>>(numberProp().required);
    expectNotAssignable<Vue2_7.PropOptions<string>>(numberProp().required);
  });
});
