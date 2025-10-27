import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import * as Vue3 from '@vue/runtime-core';
import { vueComponentProp } from '../../src/prop-types/vueComponent';
import type { VueComponent } from '../../src/prop-types/vueComponent';
import { createVue2Component } from '../utilities';
import type { Vue2ComponentWithProp } from '../utilities';

describe('vueComponentProp().optional', () => {
  test('Vue 2.6', () => {
    expect<
      Vue2_6.PropOptions<VueComponent | undefined>
    >().type.toBeAssignableFrom(vueComponentProp().optional);
    expect<Vue2_6.PropOptions<VueComponent>>().type.not.toBeAssignableFrom(
      vueComponentProp().optional,
    );

    expect(createVue2Component(vueComponentProp().optional)).type.toBe<
      Vue2ComponentWithProp<VueComponent | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<
      Vue2_7.PropOptions<VueComponent | undefined>
    >().type.toBeAssignableFrom(vueComponentProp().optional);
    expect<Vue2_7.PropOptions<VueComponent>>().type.not.toBeAssignableFrom(
      vueComponentProp().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<VueComponent | undefined>>().type.toBeAssignableFrom(
      vueComponentProp().optional,
    );
    expect<Vue3.Prop<VueComponent>>().type.not.toBeAssignableFrom(
      vueComponentProp().optional,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: vueComponentProp().optional,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<VueComponent | undefined>();
  });
});

describe('vueComponentProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<VueComponent | null>>().type.toBeAssignableFrom(
      vueComponentProp().nullable,
    );
    expect<Vue2_6.PropOptions<VueComponent>>().type.not.toBeAssignableFrom(
      vueComponentProp().nullable,
    );

    expect(createVue2Component(vueComponentProp().nullable)).type.toBe<
      Vue2ComponentWithProp<VueComponent | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<VueComponent | null>>().type.toBeAssignableFrom(
      vueComponentProp().nullable,
    );
    expect<Vue2_7.PropOptions<VueComponent>>().type.not.toBeAssignableFrom(
      vueComponentProp().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<VueComponent | null>>().type.toBeAssignableFrom(
      vueComponentProp().nullable,
    );
    expect<Vue3.Prop<VueComponent>>().type.not.toBeAssignableFrom(
      vueComponentProp().nullable,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: vueComponentProp().nullable,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<VueComponent | null>();
  });
});

describe('vueComponentProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<VueComponent>>().type.toBeAssignableFrom(
      vueComponentProp().withDefault('foo'),
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableFrom(
      vueComponentProp().withDefault('foo'),
    );

    expect(
      createVue2Component(vueComponentProp().withDefault('foo')),
    ).type.toBe<Vue2ComponentWithProp<VueComponent>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<VueComponent>>().type.toBeAssignableFrom(
      vueComponentProp().withDefault('foo'),
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableFrom(
      vueComponentProp().withDefault('foo'),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<VueComponent>>().type.toBeAssignableFrom(
      vueComponentProp().withDefault('foo'),
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableFrom(
      vueComponentProp().withDefault('foo'),
    );

    const component = Vue3.defineComponent({
      props: {
        prop: vueComponentProp().withDefault('foo'),
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<VueComponent>();
  });
});

describe('vueComponentProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<VueComponent>>().type.toBeAssignableFrom(
      vueComponentProp().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableFrom(
      vueComponentProp().required,
    );

    expect(createVue2Component(vueComponentProp().required)).type.toBe<
      Vue2ComponentWithProp<VueComponent>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<VueComponent>>().type.toBeAssignableFrom(
      vueComponentProp().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableFrom(
      vueComponentProp().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<VueComponent>>().type.toBeAssignableFrom(
      vueComponentProp().required,
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableFrom(
      vueComponentProp().required,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: vueComponentProp().required,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<VueComponent>();
  });
});
