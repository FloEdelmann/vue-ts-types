import { describe, expect, it, vi } from 'vitest';
import { instanceOfProp } from '../../src/prop-types/instanceOf';

vi.mock(import('vue'), async () => ({
  ...(await vi.importActual('vue')),
  default: undefined,
}));

class User {}

describe('instanceOfProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(instanceOfProp(User).optional).toStrictEqual({
      type: User,
      required: false,
      default: undefined,
      validator: expect.any(Function),
    });
  });
});

describe('instanceOfProp().nullable', () => {
  it('creates the correct prop options', () => {
    expect(instanceOfProp(User).nullable).toStrictEqual({
      type: User,
      required: false,
      default: null,
      validator: expect.any(Function),
    });
  });
});

describe('instanceOfProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(instanceOfProp(User).withDefault(() => new User())).toStrictEqual({
      type: User,
      required: false,
      default: expect.any(Function),
      validator: expect.any(Function),
    });
  });
});

describe('instanceOfProp().required', () => {
  it('creates the correct prop options', () => {
    expect(instanceOfProp(User).required).toStrictEqual({
      type: User,
      required: true,
      validator: expect.any(Function),
    });
  });
});
