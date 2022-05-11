import { expectAssignable, expectNotAssignable, expectType } from 'tsd-lite';
import type * as Vue2 from 'vue/types/options';
import type * as CompositionApi from '@vue/composition-api';
import { stringProp } from '../../src/prop-types/string';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

type Foo = 'a' | 'b' | 'c';

describe('stringProp().optional', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<string | undefined>>(stringProp().optional);
    expectAssignable<Vue2.PropOptions<Foo | undefined>>(stringProp<Foo>().optional);
    expectNotAssignable<Vue2.PropOptions<string>>(stringProp().optional);
    expectNotAssignable<Vue2.PropOptions<Foo>>(stringProp<Foo>().optional);

    expectType<Vue2ComponentWithProp<string | undefined>>(
      createVue2Component(stringProp().optional),
    );

    expectType<Vue2ComponentWithProp<Foo | undefined>>(
      createVue2Component(stringProp<Foo>().optional),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<string | undefined>>(stringProp().optional);
    expectAssignable<CompositionApi.PropOptions<Foo | undefined>>(stringProp<Foo>().optional);
    expectNotAssignable<CompositionApi.PropOptions<string>>(stringProp().optional);
    expectNotAssignable<CompositionApi.PropOptions<Foo>>(stringProp<Foo>().optional);
  });
});

describe('stringProp().withDefault', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<string>>(stringProp().withDefault('foo'));
    expectAssignable<Vue2.PropOptions<Foo>>(stringProp<Foo>().withDefault('a'));
    expectNotAssignable<Vue2.PropOptions<number>>(stringProp().withDefault('foo'));
    expectNotAssignable<Vue2.PropOptions<number>>(stringProp<Foo>().withDefault('a'));

    expectType<Vue2ComponentWithProp<string>>(
      createVue2Component(stringProp().withDefault('foo')),
    );

    expectType<Vue2ComponentWithProp<Foo>>(
      createVue2Component(stringProp<Foo>().withDefault('a')),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<string>>(stringProp().withDefault('foo'));
    expectAssignable<CompositionApi.PropOptions<Foo>>(stringProp<Foo>().withDefault('a'));
    expectNotAssignable<CompositionApi.PropOptions<number>>(stringProp().withDefault('foo'));
    expectNotAssignable<CompositionApi.PropOptions<number>>(stringProp<Foo>().withDefault('a'));
  });
});

describe('stringProp().required', () => {
  describe('Vue 2', () => {
    expectAssignable<Vue2.PropOptions<string>>(stringProp().required);
    expectAssignable<Vue2.PropOptions<Foo>>(stringProp<Foo>().required);
    expectNotAssignable<Vue2.PropOptions<number>>(stringProp().required);
    expectNotAssignable<Vue2.PropOptions<number>>(stringProp<Foo>().required);

    expectType<Vue2ComponentWithProp<string>>(
      createVue2Component(stringProp().required),
    );

    expectType<Vue2ComponentWithProp<Foo>>(
      createVue2Component(stringProp<Foo>().required),
    );
  });

  describe('Composition API', () => {
    expectAssignable<CompositionApi.PropOptions<string>>(stringProp().required);
    expectAssignable<CompositionApi.PropOptions<Foo>>(stringProp<Foo>().required);
    expectNotAssignable<CompositionApi.PropOptions<number>>(stringProp().required);
    expectNotAssignable<CompositionApi.PropOptions<number>>(stringProp<Foo>().required);
  });
});
