import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core/dist/runtime-core';
import { vueComponentProp } from '../../src/prop-types/vueComponent';
import type { VueComponent } from '../../src/prop-types/vueComponent';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

describe('vueComponentProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<VueComponent | undefined>>().type.toBeAssignable(
      vueComponentProp().optional,
    );
    expect<Vue2_6.PropOptions<VueComponent>>().type.not.toBeAssignable(
      vueComponentProp().optional,
    );

    expect(createVue2Component(vueComponentProp().optional)).type.toEqual<
      Vue2ComponentWithProp<VueComponent | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<VueComponent | undefined>>().type.toBeAssignable(
      vueComponentProp().optional,
    );
    expect<Vue2_7.PropOptions<VueComponent>>().type.not.toBeAssignable(
      vueComponentProp().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<VueComponent | undefined>>().type.toBeAssignable(
      vueComponentProp().optional,
    );
    expect<Vue3.Prop<VueComponent>>().type.not.toBeAssignable(
      vueComponentProp().optional,
    );
  });
});

describe('vueComponentProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<VueComponent | null>>().type.toBeAssignable(
      vueComponentProp().nullable,
    );
    expect<Vue2_6.PropOptions<VueComponent>>().type.not.toBeAssignable(
      vueComponentProp().nullable,
    );

    expect(createVue2Component(vueComponentProp().nullable)).type.toEqual<
      Vue2ComponentWithProp<VueComponent | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<VueComponent | null>>().type.toBeAssignable(
      vueComponentProp().nullable,
    );
    expect<Vue2_7.PropOptions<VueComponent>>().type.not.toBeAssignable(
      vueComponentProp().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<VueComponent | null>>().type.toBeAssignable(
      vueComponentProp().nullable,
    );
    expect<Vue3.Prop<VueComponent>>().type.not.toBeAssignable(
      vueComponentProp().nullable,
    );
  });
});

describe('vueComponentProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<VueComponent>>().type.toBeAssignable(
      vueComponentProp().withDefault('foo'),
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignable(
      vueComponentProp().withDefault('foo'),
    );

    expect(
      createVue2Component(vueComponentProp().withDefault('foo')),
    ).type.toEqual<Vue2ComponentWithProp<VueComponent>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<VueComponent>>().type.toBeAssignable(
      vueComponentProp().withDefault('foo'),
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignable(
      vueComponentProp().withDefault('foo'),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<VueComponent>>().type.toBeAssignable(
      vueComponentProp().withDefault('foo'),
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignable(
      vueComponentProp().withDefault('foo'),
    );
  });
});

describe('vueComponentProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<VueComponent>>().type.toBeAssignable(
      vueComponentProp().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignable(
      vueComponentProp().required,
    );

    expect(createVue2Component(vueComponentProp().required)).type.toEqual<
      Vue2ComponentWithProp<VueComponent>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<VueComponent>>().type.toBeAssignable(
      vueComponentProp().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignable(
      vueComponentProp().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<VueComponent>>().type.toBeAssignable(
      vueComponentProp().required,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignable(
      vueComponentProp().required,
    );
  });
});
