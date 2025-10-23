import { describe, expect, it, vi } from 'vitest';
import { functionProp } from '../../src/prop-types/function';

vi.mock(import('vue'), async () => ({
  ...(await vi.importActual('vue')),
  default: undefined,
}));

describe('functionProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(functionProp().optional).toStrictEqual({
      type: Function,
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('functionProp().nullable', () => {
  it('creates the correct prop options', () => {
    expect(functionProp().nullable).toStrictEqual({
      type: Function,
      required: false,
      default: null,
      validator: undefined,
    });
  });
});

describe('functionProp().required', () => {
  it('creates the correct prop options', () => {
    expect(functionProp().required).toStrictEqual({
      type: Function,
      required: true,
      validator: undefined,
    });
  });
});
