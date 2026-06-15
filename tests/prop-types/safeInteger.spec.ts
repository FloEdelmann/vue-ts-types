import { describe, expect, it, vi } from 'vitest';
import { safeIntegerProp } from '../../src/prop-types/safeInteger';

vi.mock(import('vue'), async () => ({
  ...(await vi.importActual('vue')),
  default: undefined,
}));

describe('safeIntegerProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(safeIntegerProp().optional).toStrictEqual({
      type: Number,
      required: false,
      default: undefined,
      validator: expect.any(Function),
    });
  });
});

describe('safeIntegerProp().nullable', () => {
  it('creates the correct prop options', () => {
    expect(safeIntegerProp().nullable).toStrictEqual({
      type: Number,
      required: false,
      default: null,
      validator: expect.any(Function),
    });
  });
});

describe('safeIntegerProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(safeIntegerProp().withDefault(27)).toStrictEqual({
      type: Number,
      required: false,
      default: 27,
      validator: expect.any(Function),
    });
  });
});

describe('safeIntegerProp().required', () => {
  it('creates the correct prop options', () => {
    expect(safeIntegerProp().required).toStrictEqual({
      type: Number,
      required: true,
      validator: expect.any(Function),
    });
  });
});
