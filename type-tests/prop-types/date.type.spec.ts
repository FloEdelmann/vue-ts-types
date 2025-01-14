import { describe, expect, test } from 'tstyche';
import type * as Vue2_6 from 'vue2-6/types/options';
import type * as Vue2_7 from 'vue2-7/types/options';
import type * as Vue3 from '@vue/runtime-core';
import { dateProp } from '../../src/prop-types/date';
import { createVue2Component } from '../utils';
import type { Vue2ComponentWithProp } from '../utils';

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
  });
});

describe('dateProp().withDefault(false)', () => {
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
  });
});
