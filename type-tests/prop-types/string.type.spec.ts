import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { stringProp } from '../../src/prop-types/string';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

type Foo = 'a' | 'b' | 'c';

describe('stringProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<string | undefined>>().type.toBeAssignable(
      stringProp().optional,
    );
    expect<Vue2_6.PropOptions<Foo | undefined>>().type.toBeAssignable(
      stringProp<Foo>().optional,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignable(
      stringProp().optional,
    );
    expect<Vue2_6.PropOptions<Foo>>().type.not.toBeAssignable(
      stringProp<Foo>().optional,
    );

    expect(createVue2Component(stringProp().optional)).type.toEqual<
      Vue2ComponentWithProp<string | undefined>
    >();

    expect(createVue2Component(stringProp<Foo>().optional)).type.toEqual<
      Vue2ComponentWithProp<Foo | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<string | undefined>>().type.toBeAssignable(
      stringProp().optional,
    );
    expect<Vue2_7.PropOptions<Foo | undefined>>().type.toBeAssignable(
      stringProp<Foo>().optional,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignable(
      stringProp().optional,
    );
    expect<Vue2_7.PropOptions<Foo>>().type.not.toBeAssignable(
      stringProp<Foo>().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<string | undefined>>().type.toBeAssignable(
      stringProp().optional,
    );
    expect<Vue3.Prop<Foo | undefined>>().type.toBeAssignable(
      stringProp<Foo>().optional,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignable(stringProp().optional);
    expect<Vue3.Prop<Foo>>().type.not.toBeAssignable(
      stringProp<Foo>().optional,
    );
  });
});

describe('stringProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<string | null>>().type.toBeAssignable(
      stringProp().nullable,
    );
    expect<Vue2_6.PropOptions<Foo | null>>().type.toBeAssignable(
      stringProp<Foo>().nullable,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignable(
      stringProp().nullable,
    );
    expect<Vue2_6.PropOptions<Foo>>().type.not.toBeAssignable(
      stringProp<Foo>().nullable,
    );

    expect(createVue2Component(stringProp().nullable)).type.toEqual<
      Vue2ComponentWithProp<string | null>
    >();

    expect(createVue2Component(stringProp<Foo>().nullable)).type.toEqual<
      Vue2ComponentWithProp<Foo | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<string | null>>().type.toBeAssignable(
      stringProp().nullable,
    );
    expect<Vue2_7.PropOptions<Foo | null>>().type.toBeAssignable(
      stringProp<Foo>().nullable,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignable(
      stringProp().nullable,
    );
    expect<Vue2_7.PropOptions<Foo>>().type.not.toBeAssignable(
      stringProp<Foo>().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<string | null>>().type.toBeAssignable(
      stringProp().nullable,
    );
    expect<Vue3.Prop<Foo | null>>().type.toBeAssignable(
      stringProp<Foo>().nullable,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignable(stringProp().nullable);
    expect<Vue3.Prop<Foo>>().type.not.toBeAssignable(
      stringProp<Foo>().nullable,
    );
  });
});

describe('stringProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<string>>().type.toBeAssignable(
      stringProp().withDefault('foo'),
    );
    expect<Vue2_6.PropOptions<Foo>>().type.toBeAssignable(
      stringProp<Foo>().withDefault('a'),
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignable(
      stringProp().withDefault('foo'),
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignable(
      stringProp<Foo>().withDefault('a'),
    );

    expect(createVue2Component(stringProp().withDefault('foo'))).type.toEqual<
      Vue2ComponentWithProp<string>
    >();

    expect(
      createVue2Component(stringProp<Foo>().withDefault('a')),
    ).type.toEqual<Vue2ComponentWithProp<Foo>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<string>>().type.toBeAssignable(
      stringProp().withDefault('foo'),
    );
    expect<Vue2_7.PropOptions<Foo>>().type.toBeAssignable(
      stringProp<Foo>().withDefault('a'),
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignable(
      stringProp().withDefault('foo'),
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignable(
      stringProp<Foo>().withDefault('a'),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<string>>().type.toBeAssignable(
      stringProp().withDefault('foo'),
    );
    expect<Vue3.Prop<Foo>>().type.toBeAssignable(
      stringProp<Foo>().withDefault('a'),
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignable(
      stringProp().withDefault('foo'),
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignable(
      stringProp<Foo>().withDefault('a'),
    );
  });
});

describe('stringProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<string>>().type.toBeAssignable(
      stringProp().required,
    );
    expect<Vue2_6.PropOptions<Foo>>().type.toBeAssignable(
      stringProp<Foo>().required,
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignable(
      stringProp().required,
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignable(
      stringProp<Foo>().required,
    );

    expect(createVue2Component(stringProp().required)).type.toEqual<
      Vue2ComponentWithProp<string>
    >();

    expect(createVue2Component(stringProp<Foo>().required)).type.toEqual<
      Vue2ComponentWithProp<Foo>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<string>>().type.toBeAssignable(
      stringProp().required,
    );
    expect<Vue2_7.PropOptions<Foo>>().type.toBeAssignable(
      stringProp<Foo>().required,
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignable(
      stringProp().required,
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignable(
      stringProp<Foo>().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<string>>().type.toBeAssignable(stringProp().required);
    expect<Vue3.Prop<Foo>>().type.toBeAssignable(stringProp<Foo>().required);
    expect<Vue3.Prop<number>>().type.not.toBeAssignable(stringProp().required);
    expect<Vue3.Prop<number>>().type.not.toBeAssignable(
      stringProp<Foo>().required,
    );
  });
});
