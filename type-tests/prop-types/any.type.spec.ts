import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { anyProp } from '../../src/prop-types/any';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('anyProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions>().type.toBeAssignable(anyProp().optional);
    expect<Vue2_6.PropOptions<number>>().type.toBeAssignable(
      anyProp().optional,
    );
    expect<Vue2_6.PropOptions<string>>().type.toBeAssignable(
      anyProp().optional,
    );
    expect<Vue2_6.PropOptions<string | undefined>>().type.toBeAssignable(
      anyProp<string>().optional,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignable(
      anyProp<string>().optional,
    );

    expect(createVue2Component(anyProp().optional)).type.toEqual<
      Vue2ComponentWithProp<any>
    >();

    expect(createVue2Component(anyProp<string>().optional)).type.toEqual<
      Vue2ComponentWithProp<string | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions>().type.toBeAssignable(anyProp().optional);
    expect<Vue2_7.PropOptions<number>>().type.toBeAssignable(
      anyProp().optional,
    );
    expect<Vue2_7.PropOptions<string>>().type.toBeAssignable(
      anyProp().optional,
    );
    expect<Vue2_7.PropOptions<string | undefined>>().type.toBeAssignable(
      anyProp<string>().optional,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignable(
      anyProp<string>().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<any>>().type.toBeAssignable(anyProp().optional);
    expect<Vue3.Prop<number>>().type.toBeAssignable(anyProp().optional);
    expect<Vue3.Prop<string>>().type.toBeAssignable(anyProp().optional);
    expect<Vue3.Prop<string | undefined>>().type.toBeAssignable(
      anyProp<string>().optional,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignable(
      anyProp<string>().optional,
    );
  });
});

describe('anyProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions>().type.toBeAssignable(anyProp().nullable);
    expect<Vue2_6.PropOptions<number>>().type.toBeAssignable(
      anyProp().nullable,
    );
    expect<Vue2_6.PropOptions<string>>().type.toBeAssignable(
      anyProp().nullable,
    );
    expect<Vue2_6.PropOptions<string | null>>().type.toBeAssignable(
      anyProp<string>().nullable,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignable(
      anyProp<string>().nullable,
    );

    expect(createVue2Component(anyProp().nullable)).type.toEqual<
      Vue2ComponentWithProp<any>
    >();

    expect(createVue2Component(anyProp<string>().nullable)).type.toEqual<
      Vue2ComponentWithProp<string | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions>().type.toBeAssignable(anyProp().nullable);
    expect<Vue2_7.PropOptions<number>>().type.toBeAssignable(
      anyProp().nullable,
    );
    expect<Vue2_7.PropOptions<string>>().type.toBeAssignable(
      anyProp().nullable,
    );
    expect<Vue2_7.PropOptions<string | null>>().type.toBeAssignable(
      anyProp<string>().nullable,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignable(
      anyProp<string>().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<any>>().type.toBeAssignable(anyProp().nullable);
    expect<Vue3.Prop<number>>().type.toBeAssignable(anyProp().nullable);
    expect<Vue3.Prop<string>>().type.toBeAssignable(anyProp().nullable);
    expect<Vue3.Prop<string | null>>().type.toBeAssignable(
      anyProp<string>().nullable,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignable(
      anyProp<string>().nullable,
    );
  });
});

describe('anyProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions>().type.toBeAssignable(
      anyProp().withDefault('foo'),
    );
    expect<Vue2_6.PropOptions<string>>().type.toBeAssignable(
      anyProp().withDefault('foo'),
    );
    expect<Vue2_6.PropOptions<number>>().type.toBeAssignable(
      anyProp().withDefault('foo'),
    );
    expect<Vue2_6.PropOptions<string>>().type.toBeAssignable(
      anyProp<string>().withDefault('foo'),
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignable(
      anyProp<string>().withDefault('foo'),
    );

    expect(createVue2Component(anyProp().withDefault('foo'))).type.toEqual<
      Vue2ComponentWithProp<any>
    >();

    expect(
      createVue2Component(anyProp<string>().withDefault('foo')),
    ).type.toEqual<Vue2ComponentWithProp<string>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions>().type.toBeAssignable(
      anyProp().withDefault('foo'),
    );
    expect<Vue2_7.PropOptions<string>>().type.toBeAssignable(
      anyProp().withDefault('foo'),
    );
    expect<Vue2_7.PropOptions<number>>().type.toBeAssignable(
      anyProp().withDefault('foo'),
    );
    expect<Vue2_7.PropOptions<string>>().type.toBeAssignable(
      anyProp<string>().withDefault('foo'),
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignable(
      anyProp<string>().withDefault('foo'),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<any>>().type.toBeAssignable(anyProp().withDefault('foo'));
    expect<Vue3.Prop<string>>().type.toBeAssignable(
      anyProp().withDefault('foo'),
    );
    expect<Vue3.Prop<number>>().type.toBeAssignable(
      anyProp().withDefault('foo'),
    );
    expect<Vue3.Prop<string>>().type.toBeAssignable(
      anyProp<string>().withDefault('foo'),
    );
    expect<Vue3.Prop<number>>().type.not.toBeAssignable(
      anyProp<string>().withDefault('foo'),
    );
  });
});

describe('anyProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions>().type.toBeAssignable(anyProp().required);
    expect<Vue2_6.PropOptions<string>>().type.toBeAssignable(
      anyProp().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.toBeAssignable(
      anyProp<string>().required,
    );
    expect<Vue2_6.PropOptions<number>>().type.not.toBeAssignable(
      anyProp<string>().required,
    );

    expect(createVue2Component(anyProp().required)).type.toEqual<
      Vue2ComponentWithProp<any>
    >();

    expect(createVue2Component(anyProp<string>().required)).type.toEqual<
      Vue2ComponentWithProp<string>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions>().type.toBeAssignable(anyProp().required);
    expect<Vue2_7.PropOptions<string>>().type.toBeAssignable(
      anyProp().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.toBeAssignable(
      anyProp<string>().required,
    );
    expect<Vue2_7.PropOptions<number>>().type.not.toBeAssignable(
      anyProp<string>().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<any>>().type.toBeAssignable(anyProp().required);
    expect<Vue3.Prop<string>>().type.toBeAssignable(anyProp().required);
    expect<Vue3.Prop<string>>().type.toBeAssignable(anyProp<string>().required);
    expect<Vue3.Prop<number>>().type.not.toBeAssignable(
      anyProp<string>().required,
    );
  });
});
