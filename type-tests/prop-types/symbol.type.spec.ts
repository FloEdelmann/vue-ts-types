import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import * as Vue3 from '@vue/runtime-core';
import { symbolProp } from '../../src/prop-types/symbol';
import { createVue2Component } from '../utilities';
import type { Vue2ComponentWithProp } from '../utilities';

describe('symbolProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<symbol | undefined>>().type.toBeAssignableWith(
      symbolProp().optional,
    );
    expect<Vue2_6.PropOptions<symbol>>().type.not.toBeAssignableWith(
      symbolProp().optional,
    );

    expect(createVue2Component(symbolProp().optional)).type.toBe<
      Vue2ComponentWithProp<symbol | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<symbol | undefined>>().type.toBeAssignableWith(
      symbolProp().optional,
    );
    expect<Vue2_7.PropOptions<symbol>>().type.not.toBeAssignableWith(
      symbolProp().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<symbol | undefined>>().type.toBeAssignableWith(
      symbolProp().optional,
    );
    expect<Vue3.Prop<symbol>>().type.not.toBeAssignableWith(
      symbolProp().optional,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: symbolProp().optional,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<symbol | undefined>();
  });
});

describe('symbolProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<symbol | null>>().type.toBeAssignableWith(
      symbolProp().nullable,
    );
    expect<Vue2_6.PropOptions<symbol>>().type.not.toBeAssignableWith(
      symbolProp().nullable,
    );

    expect(createVue2Component(symbolProp().nullable)).type.toBe<
      Vue2ComponentWithProp<symbol | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<symbol | null>>().type.toBeAssignableWith(
      symbolProp().nullable,
    );
    expect<Vue2_7.PropOptions<symbol>>().type.not.toBeAssignableWith(
      symbolProp().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<symbol | null>>().type.toBeAssignableWith(
      symbolProp().nullable,
    );
    expect<Vue3.Prop<symbol>>().type.not.toBeAssignableWith(
      symbolProp().nullable,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: symbolProp().nullable,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<symbol | null>();
  });
});

describe('symbolProp().withDefault', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<symbol>>().type.toBeAssignableWith(
      symbolProp().withDefault(Symbol.for('foo')),
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableWith(
      symbolProp().withDefault(Symbol.for('foo')),
    );

    expect(
      createVue2Component(symbolProp().withDefault(Symbol.for('foo'))),
    ).type.toBe<Vue2ComponentWithProp<symbol>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<symbol>>().type.toBeAssignableWith(
      symbolProp().withDefault(Symbol.for('foo')),
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableWith(
      symbolProp().withDefault(Symbol.for('foo')),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<symbol>>().type.toBeAssignableWith(
      symbolProp().withDefault(Symbol.for('foo')),
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableWith(
      symbolProp().withDefault(Symbol.for('foo')),
    );

    const component = Vue3.defineComponent({
      props: {
        prop: symbolProp().withDefault(Symbol.for('foo')),
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<symbol>();
  });
});

describe('symbolProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<symbol>>().type.toBeAssignableWith(
      symbolProp().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableWith(
      symbolProp().required,
    );

    expect(createVue2Component(symbolProp().required)).type.toBe<
      Vue2ComponentWithProp<symbol>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<symbol>>().type.toBeAssignableWith(
      symbolProp().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableWith(
      symbolProp().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<symbol>>().type.toBeAssignableWith(symbolProp().required);
    expect<Vue3.Prop<string>>().type.not.toBeAssignableWith(
      symbolProp().required,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: symbolProp().required,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<symbol>();
  });
});
