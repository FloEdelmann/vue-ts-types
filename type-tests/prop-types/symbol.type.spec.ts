import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { symbolProp } from '../../src/prop-types/symbol';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('symbolProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<symbol | undefined>>().type.toBeAssignable(
      symbolProp().optional,
    );
    expect<Vue2_6.PropOptions<symbol>>().type.not.toBeAssignable(
      symbolProp().optional,
    );

    expect(createVue2Component(symbolProp().optional)).type.toEqual<
      Vue2ComponentWithProp<symbol | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<symbol | undefined>>().type.toBeAssignable(
      symbolProp().optional,
    );
    expect<Vue2_7.PropOptions<symbol>>().type.not.toBeAssignable(
      symbolProp().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<symbol | undefined>>().type.toBeAssignable(
      symbolProp().optional,
    );
    expect<Vue3.Prop<symbol>>().type.not.toBeAssignable(symbolProp().optional);
  });
});

describe('symbolProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<symbol | null>>().type.toBeAssignable(
      symbolProp().nullable,
    );
    expect<Vue2_6.PropOptions<symbol>>().type.not.toBeAssignable(
      symbolProp().nullable,
    );

    expect(createVue2Component(symbolProp().nullable)).type.toEqual<
      Vue2ComponentWithProp<symbol | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<symbol | null>>().type.toBeAssignable(
      symbolProp().nullable,
    );
    expect<Vue2_7.PropOptions<symbol>>().type.not.toBeAssignable(
      symbolProp().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<symbol | null>>().type.toBeAssignable(
      symbolProp().nullable,
    );
    expect<Vue3.Prop<symbol>>().type.not.toBeAssignable(symbolProp().nullable);
  });
});

describe('symbolProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<symbol>>().type.toBeAssignable(
      symbolProp().withDefault(Symbol.for('foo')),
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignable(
      symbolProp().withDefault(Symbol.for('foo')),
    );

    expect(
      createVue2Component(symbolProp().withDefault(Symbol.for('foo'))),
    ).type.toEqual<Vue2ComponentWithProp<symbol>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<symbol>>().type.toBeAssignable(
      symbolProp().withDefault(Symbol.for('foo')),
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignable(
      symbolProp().withDefault(Symbol.for('foo')),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<symbol>>().type.toBeAssignable(
      symbolProp().withDefault(Symbol.for('foo')),
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignable(
      symbolProp().withDefault(Symbol.for('foo')),
    );
  });
});

describe('symbolProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<symbol>>().type.toBeAssignable(
      symbolProp().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignable(
      symbolProp().required,
    );

    expect(createVue2Component(symbolProp().required)).type.toEqual<
      Vue2ComponentWithProp<symbol>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<symbol>>().type.toBeAssignable(
      symbolProp().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignable(
      symbolProp().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<symbol>>().type.toBeAssignable(symbolProp().required);
    expect<Vue3.Prop<string>>().type.not.toBeAssignable(symbolProp().required);
  });
});
