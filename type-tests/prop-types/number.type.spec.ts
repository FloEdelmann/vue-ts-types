import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { numberProp } from '../../src/prop-types/number';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

type Foo = 1 | 2 | 3;

describe('numberProp().optional', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<number | undefined>>(numberProp().optional);
    expectNotAssignable<Vue2_6.PropOptions<number>>(numberProp().optional);

    expectType<Vue2ComponentWithProp<number | undefined>>(
      createVue2Component(numberProp().optional),
    );

    expectType<Vue2ComponentWithProp<Foo | undefined>>(
      createVue2Component(numberProp<Foo>().optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<number | undefined>>(numberProp().optional);
    expectAssignable<Vue2_7.PropOptions<Foo | undefined>>(numberProp<Foo>().optional);
    expectNotAssignable<Vue2_7.PropOptions<number>>(numberProp().optional);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<number | undefined>>(numberProp().optional);
    expectAssignable<Vue3.Prop<Foo | undefined>>(numberProp<Foo>().optional);
    expectNotAssignable<Vue3.Prop<number>>(numberProp().optional);
  });
});

describe('numberProp().nullable', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<number | null>>(numberProp().nullable);
    expectAssignable<Vue2_6.PropOptions<Foo | null>>(numberProp<Foo>().nullable);
    expectNotAssignable<Vue2_6.PropOptions<number>>(numberProp().nullable);
    expectNotAssignable<Vue2_6.PropOptions<Foo>>(numberProp<Foo>().nullable);

    expectType<Vue2ComponentWithProp<number | null>>(
      createVue2Component(numberProp().nullable),
    );

    expectType<Vue2ComponentWithProp<Foo | null>>(
      createVue2Component(numberProp<Foo>().nullable),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<number | null>>(numberProp().nullable);
    expectAssignable<Vue2_7.PropOptions<Foo | null>>(numberProp<Foo>().nullable);
    expectNotAssignable<Vue2_7.PropOptions<number>>(numberProp().nullable);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<number | null>>(numberProp().nullable);
    expectAssignable<Vue3.Prop<Foo | null>>(numberProp<Foo>().nullable);
    expectNotAssignable<Vue3.Prop<number>>(numberProp().nullable);
    expectNotAssignable<Vue3.Prop<Foo>>(numberProp<Foo>().nullable);
  });
});

describe('numberProp().withDefault', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<number>>(numberProp().withDefault(27));
    expectAssignable<Vue2_6.PropOptions<Foo>>(numberProp<Foo>().withDefault(1));
    expectNotAssignable<Vue2_6.PropOptions<string>>(numberProp().withDefault(27));

    expectType<Vue2ComponentWithProp<number>>(
      createVue2Component(numberProp().withDefault(27)),
    );

    expectType<Vue2ComponentWithProp<Foo>>(
      createVue2Component(numberProp<Foo>().withDefault(1)),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<number>>(numberProp().withDefault(27));
    expectAssignable<Vue2_7.PropOptions<Foo>>(numberProp<Foo>().withDefault(1));
    expectNotAssignable<Vue2_7.PropOptions<string>>(numberProp().withDefault(27));
    expectNotAssignable<Vue2_7.PropOptions<string>>(numberProp<Foo>().withDefault(1));
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<number>>(numberProp().withDefault(27));
    expectAssignable<Vue3.Prop<Foo>>(numberProp<Foo>().withDefault(1));
    expectNotAssignable<Vue3.Prop<string>>(numberProp().withDefault(27));
    expectNotAssignable<Vue3.Prop<string>>(numberProp<Foo>().withDefault(1));
  });
});

describe('numberProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<number>>(numberProp().required);
    expectAssignable<Vue2_6.PropOptions<Foo>>(numberProp<Foo>().required);
    expectNotAssignable<Vue2_6.PropOptions<string>>(numberProp().required);
    expectNotAssignable<Vue2_6.PropOptions<string>>(numberProp<Foo>().required);

    expectType<Vue2ComponentWithProp<number>>(
      createVue2Component(numberProp().required),
    );

    expectType<Vue2ComponentWithProp<Foo>>(
      createVue2Component(numberProp<Foo>().required),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<number>>(numberProp().required);
    expectAssignable<Vue2_7.PropOptions<Foo>>(numberProp<Foo>().required);
    expectNotAssignable<Vue2_7.PropOptions<string>>(numberProp().required);
    expectNotAssignable<Vue2_7.PropOptions<string>>(numberProp<Foo>().required);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<number>>(numberProp().required);
    expectAssignable<Vue3.Prop<Foo>>(numberProp<Foo>().required);
    expectNotAssignable<Vue3.Prop<string>>(numberProp().required);
    expectNotAssignable<Vue3.Prop<string>>(numberProp<Foo>().required);
  });
});
