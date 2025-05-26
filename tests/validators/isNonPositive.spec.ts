import { describe, expect, it } from 'vitest';
import { isNonPositive } from '../../src/validators/isNonPositive';

describe(isNonPositive, () => {
  it('returns undefined for non-positive numbers', () => {
    expect(isNonPositive(0)).toBeUndefined();
    expect(isNonPositive(-27)).toBeUndefined();
    expect(isNonPositive(Number.NEGATIVE_INFINITY)).toBeUndefined();
    expect(isNonPositive(Number.MIN_SAFE_INTEGER)).toBeUndefined();
  });

  it('returns a string for non-positive numbers', () => {
    expect(typeof isNonPositive(3.4)).toBe('string');
    expect(typeof isNonPositive(Number.NaN)).toBe('string');
    expect(typeof isNonPositive(Number.MAX_SAFE_INTEGER)).toBe('string');
  });

  it('returns a string for non-numbers', () => {
    expect(typeof isNonPositive(undefined)).toBe('string');
    expect(typeof isNonPositive('foo')).toBe('string');
    expect(typeof isNonPositive({ value: 2 })).toBe('string');
  });
});
