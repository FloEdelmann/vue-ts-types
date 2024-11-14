import { describe, expect, it } from 'vitest';
import { anyProp } from '../../src/prop-types/any';

describe('anyProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(anyProp().optional).toStrictEqual({
      type: undefined,
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('anyProp().nullable', () => {
  it('creates the correct prop options', () => {
    expect(anyProp().nullable).toStrictEqual({
      type: undefined,
      required: false,
      default: null,
      validator: undefined,
    });
  });
});

describe('anyProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(anyProp().withDefault('foo')).toStrictEqual({
      type: undefined,
      required: false,
      default: 'foo',
      validator: undefined,
    });
  });
});

describe('anyProp().required', () => {
  it('creates the correct prop options', () => {
    expect(anyProp().required).toStrictEqual({
      type: undefined,
      required: true,
      validator: undefined,
    });
  });
});
