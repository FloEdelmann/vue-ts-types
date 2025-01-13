import { describe, expect, it } from 'vitest';
import { dateProp } from '../../src/prop-types/date';

describe('dateProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(dateProp().optional).toStrictEqual({
      type: Date,
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('dateProp().nullable', () => {
  it('creates the correct prop options', () => {
    expect(dateProp().nullable).toStrictEqual({
      type: Date,
      required: false,
      default: null,
      validator: undefined,
    });
  });
});

describe('dateProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(dateProp().withDefault(() => new Date())).toStrictEqual({
      type: Date,
      required: false,
      default: expect.any(Function),
      validator: undefined,
    });
  });
});

describe('dateProp().required', () => {
  it('creates the correct prop options', () => {
    expect(dateProp().required).toStrictEqual({
      type: Date,
      required: true,
      validator: undefined,
    });
  });
});
