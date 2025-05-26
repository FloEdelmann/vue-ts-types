import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import * as Vue3 from '@vue/runtime-core';
import { dateProp } from '../../src/prop-types/date';
import { createVue2Component } from '../utilities';
import type { Vue2ComponentWithProp } from '../utilities';

describe('dateProp().optional', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Date | undefined>>().type.toBeAssignableWith(
      dateProp().optional,
    );
    expect<Vue2_6.PropOptions<Date>>().type.not.toBeAssignableWith(
      dateProp().optional,
    );

    expect(createVue2Component(dateProp().optional)).type.toBe<
      Vue2ComponentWithProp<Date | undefined>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Date | undefined>>().type.toBeAssignableWith(
      dateProp().optional,
    );
    expect<Vue2_7.PropOptions<Date>>().type.not.toBeAssignableWith(
      dateProp().optional,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Date | undefined>>().type.toBeAssignableWith(
      dateProp().optional,
    );
    expect<Vue3.Prop<Date>>().type.not.toBeAssignableWith(dateProp().optional);

    const component = Vue3.defineComponent({
      props: {
        prop: dateProp().optional,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<Date | undefined>();
  });
});

describe('dateProp().nullable', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Date | null>>().type.toBeAssignableWith(
      dateProp().nullable,
    );
    expect<Vue2_6.PropOptions<Date>>().type.not.toBeAssignableWith(
      dateProp().nullable,
    );

    expect(createVue2Component(dateProp().nullable)).type.toBe<
      Vue2ComponentWithProp<Date | null>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Date | null>>().type.toBeAssignableWith(
      dateProp().nullable,
    );
    expect<Vue2_7.PropOptions<Date>>().type.not.toBeAssignableWith(
      dateProp().nullable,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Date | null>>().type.toBeAssignableWith(
      dateProp().nullable,
    );
    expect<Vue3.Prop<Date>>().type.not.toBeAssignableWith(dateProp().nullable);

    const component = Vue3.defineComponent({
      props: {
        prop: dateProp().nullable,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<Date | null>();
  });
});

describe('dateProp().withDefault(() => new Date())', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Date>>().type.toBeAssignableWith(
      dateProp().withDefault(() => new Date()),
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableWith(
      dateProp().withDefault(() => new Date()),
    );

    expect(
      createVue2Component(dateProp().withDefault(() => new Date())),
    ).type.toBe<Vue2ComponentWithProp<Date>>();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Date>>().type.toBeAssignableWith(
      dateProp().withDefault(() => new Date()),
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableWith(
      dateProp().withDefault(() => new Date()),
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Date>>().type.toBeAssignableWith(
      dateProp().withDefault(() => new Date()),
    );
    expect<Vue3.Prop<string>>().type.not.toBeAssignableWith(
      dateProp().withDefault(() => new Date()),
    );

    const component = Vue3.defineComponent({
      props: {
        prop: dateProp().withDefault(() => new Date()),
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<Date>();
  });
});

describe('dateProp().required', () => {
  test('Vue 2.6', () => {
    expect<Vue2_6.PropOptions<Date>>().type.toBeAssignableWith(
      dateProp().required,
    );
    expect<Vue2_6.PropOptions<string>>().type.not.toBeAssignableWith(
      dateProp().required,
    );

    expect(createVue2Component(dateProp().required)).type.toBe<
      Vue2ComponentWithProp<Date>
    >();
  });

  test('Vue 2.7', () => {
    expect<Vue2_7.PropOptions<Date>>().type.toBeAssignableWith(
      dateProp().required,
    );
    expect<Vue2_7.PropOptions<string>>().type.not.toBeAssignableWith(
      dateProp().required,
    );
  });

  test('Vue 3', () => {
    expect<Vue3.Prop<Date>>().type.toBeAssignableWith(dateProp().required);
    expect<Vue3.Prop<string>>().type.not.toBeAssignableWith(
      dateProp().required,
    );

    const component = Vue3.defineComponent({
      props: {
        prop: dateProp().required,
      },
      setup(props) {
        return props;
      },
    });
    expect(new component().prop).type.toBe<Date>();
  });
});
