import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { stringProp } from '../../src/prop-types/string';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

type Foo = 'a' | 'b' | 'c';

describe('stringProp().optional', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<string | undefined>>(stringProp().optional);
    expectAssignable<Vue2_6.PropOptions<Foo | undefined>>(stringProp<Foo>().optional);
    expectNotAssignable<Vue2_6.PropOptions<string>>(stringProp().optional);
    expectNotAssignable<Vue2_6.PropOptions<Foo>>(stringProp<Foo>().optional);

    expectType<Vue2ComponentWithProp<string | undefined>>(
      createVue2Component(stringProp().optional),
    );

    expectType<Vue2ComponentWithProp<Foo | undefined>>(
      createVue2Component(stringProp<Foo>().optional),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<string | undefined>>(stringProp().optional);
    expectAssignable<Vue2_7.PropOptions<Foo | undefined>>(stringProp<Foo>().optional);
    expectNotAssignable<Vue2_7.PropOptions<string>>(stringProp().optional);
    expectNotAssignable<Vue2_7.PropOptions<Foo>>(stringProp<Foo>().optional);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<string | undefined>>(stringProp().optional);
    expectAssignable<Vue3.Prop<Foo | undefined>>(stringProp<Foo>().optional);
    expectNotAssignable<Vue3.Prop<string>>(stringProp().optional);
    expectNotAssignable<Vue3.Prop<Foo>>(stringProp<Foo>().optional);
  });
});

describe('stringProp().nullable', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<string | null>>(stringProp().nullable);
    expectAssignable<Vue2_6.PropOptions<Foo | null>>(stringProp<Foo>().nullable);
    expectNotAssignable<Vue2_6.PropOptions<string>>(stringProp().nullable);
    expectNotAssignable<Vue2_6.PropOptions<Foo>>(stringProp<Foo>().nullable);

    expectType<Vue2ComponentWithProp<string | null>>(
      createVue2Component(stringProp().nullable),
    );

    expectType<Vue2ComponentWithProp<Foo | null>>(
      createVue2Component(stringProp<Foo>().nullable),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<string | null>>(stringProp().nullable);
    expectAssignable<Vue2_7.PropOptions<Foo | null>>(stringProp<Foo>().nullable);
    expectNotAssignable<Vue2_7.PropOptions<string>>(stringProp().nullable);
    expectNotAssignable<Vue2_7.PropOptions<Foo>>(stringProp<Foo>().nullable);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<string | null>>(stringProp().nullable);
    expectAssignable<Vue3.Prop<Foo | null>>(stringProp<Foo>().nullable);
    expectNotAssignable<Vue3.Prop<string>>(stringProp().nullable);
    expectNotAssignable<Vue3.Prop<Foo>>(stringProp<Foo>().nullable);
  });
});

describe('stringProp().withDefault', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<string>>(stringProp().withDefault('foo'));
    expectAssignable<Vue2_6.PropOptions<Foo>>(stringProp<Foo>().withDefault('a'));
    expectNotAssignable<Vue2_6.PropOptions<number>>(stringProp().withDefault('foo'));
    expectNotAssignable<Vue2_6.PropOptions<number>>(stringProp<Foo>().withDefault('a'));

    expectType<Vue2ComponentWithProp<string>>(
      createVue2Component(stringProp().withDefault('foo')),
    );

    expectType<Vue2ComponentWithProp<Foo>>(
      createVue2Component(stringProp<Foo>().withDefault('a')),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<string>>(stringProp().withDefault('foo'));
    expectAssignable<Vue2_7.PropOptions<Foo>>(stringProp<Foo>().withDefault('a'));
    expectNotAssignable<Vue2_7.PropOptions<number>>(stringProp().withDefault('foo'));
    expectNotAssignable<Vue2_7.PropOptions<number>>(stringProp<Foo>().withDefault('a'));
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<string>>(stringProp().withDefault('foo'));
    expectAssignable<Vue3.Prop<Foo>>(stringProp<Foo>().withDefault('a'));
    expectNotAssignable<Vue3.Prop<number>>(stringProp().withDefault('foo'));
    expectNotAssignable<Vue3.Prop<number>>(stringProp<Foo>().withDefault('a'));
  });
});

describe('stringProp().required', () => {
  describe('Vue 2.6', () => {
    expectAssignable<Vue2_6.PropOptions<string>>(stringProp().required);
    expectAssignable<Vue2_6.PropOptions<Foo>>(stringProp<Foo>().required);
    expectNotAssignable<Vue2_6.PropOptions<number>>(stringProp().required);
    expectNotAssignable<Vue2_6.PropOptions<number>>(stringProp<Foo>().required);

    expectType<Vue2ComponentWithProp<string>>(
      createVue2Component(stringProp().required),
    );

    expectType<Vue2ComponentWithProp<Foo>>(
      createVue2Component(stringProp<Foo>().required),
    );
  });

  describe('Vue 2.7', () => {
    expectAssignable<Vue2_7.PropOptions<string>>(stringProp().required);
    expectAssignable<Vue2_7.PropOptions<Foo>>(stringProp<Foo>().required);
    expectNotAssignable<Vue2_7.PropOptions<number>>(stringProp().required);
    expectNotAssignable<Vue2_7.PropOptions<number>>(stringProp<Foo>().required);
  });

  describe('Vue 3', () => {
    expectAssignable<Vue3.Prop<string>>(stringProp().required);
    expectAssignable<Vue3.Prop<Foo>>(stringProp<Foo>().required);
    expectNotAssignable<Vue3.Prop<number>>(stringProp().required);
    expectNotAssignable<Vue3.Prop<number>>(stringProp<Foo>().required);
  });
});
