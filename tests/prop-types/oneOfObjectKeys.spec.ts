import { describe, expect, it, vi } from 'vitest';
import { oneOfObjectKeysProp } from '../../src/prop-types/oneOfObjectKeys';

vi.mock(import('vue'), async () => ({
  ...(await vi.importActual('vue')),
  default: undefined,
}));

const options = { a: 'a', b: 'b', c: 'c' };

describe('oneOfObjectKeysProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(oneOfObjectKeysProp(options).optional).toStrictEqual({
      type: String,
      required: false,
      default: undefined,
      validator: expect.any(Function),
    });
  });
});

describe('oneOfObjectKeysProp().nullable', () => {
  it('creates the correct prop options', () => {
    expect(oneOfObjectKeysProp(options).nullable).toStrictEqual({
      type: String,
      required: false,
      default: null,
      validator: expect.any(Function),
    });
  });
});

describe('oneOfObjectKeysProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(oneOfObjectKeysProp(options).withDefault('a')).toStrictEqual({
      type: String,
      required: false,
      default: 'a',
      validator: expect.any(Function),
    });
  });
});

describe('oneOfObjectKeysProp().required', () => {
  it('creates the correct prop options', () => {
    expect(oneOfObjectKeysProp(options).required).toStrictEqual({
      type: String,
      required: true,
      validator: expect.any(Function),
    });
  });
});
