import { describe, expect, it } from 'vitest';
import { isInstanceOf } from '../../src/validators/isInstanceOf';

describe(isInstanceOf, () => {
  class User {}

  it('returns undefined if value is instance', () => {
    const user1 = new User();

    expect(isInstanceOf(User)(user1)).toBeUndefined();
    expect(isInstanceOf(Array)([])).toBeUndefined();

    expect(isInstanceOf(Object)(user1)).toBeUndefined();
    expect(isInstanceOf(Object)([])).toBeUndefined();
    expect(isInstanceOf(Object)({})).toBeUndefined();
  });

  it('returns a string if value is not instance', () => {
    const user1 = new User();

    expect(typeof isInstanceOf(Array)(user1)).toBe('string');
    expect(typeof isInstanceOf(User)({})).toBe('string');
    expect(typeof isInstanceOf(User)(undefined)).toBe('string');
    expect(typeof isInstanceOf(User)('foo')).toBe('string');
    expect(typeof isInstanceOf(User)(27)).toBe('string');
    expect(typeof isInstanceOf(User)({ value: 2 })).toBe('string');
  });

  it('throws if parent is not a constructor', () => {
    const user1 = new User();

    expect(() => isInstanceOf(undefined as any)(user1)).toThrow(
      "Right-hand side of 'instanceof' is not an object",
    );

    expect(() => isInstanceOf([] as any)(user1)).toThrow(
      "Right-hand side of 'instanceof' is not callable",
    );

    expect(() => isInstanceOf({} as any)(user1)).toThrow(
      "Right-hand side of 'instanceof' is not callable",
    );
  });
});
