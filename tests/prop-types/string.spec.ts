import { describe, expect, it } from '@jest/globals';
import { stringProp } from '../../src/prop-types/string';

describe('stringProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(stringProp().optional).toStrictEqual({
      type: String,
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('stringProp().nullable', () => {
  it('creates the correct prop options', () => {
    expect(stringProp().nullable).toStrictEqual({
      type: String,
      required: false,
      default: null,
      validator: undefined,
    });
  });
});

describe('stringProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(stringProp().withDefault('foo')).toStrictEqual({
      type: String,
      required: false,
      default: 'foo',
      validator: undefined,
    });
  });
});

describe('stringProp().required', () => {
  it('creates the correct prop options', () => {
    expect(stringProp().required).toStrictEqual({
      type: String,
      required: true,
      validator: undefined,
    });
  });
});
