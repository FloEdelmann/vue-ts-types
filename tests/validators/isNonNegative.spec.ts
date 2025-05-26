import { describe, expect, it } from 'vitest';
import { isNonNegative } from '../../src/validators/isNonNegative';

describe(isNonNegative, () => {
  it('returns undefined for non-negative numbers', () => {
    expect(isNonNegative(0)).toBeUndefined();
    expect(isNonNegative(27)).toBeUndefined();
    expect(isNonNegative(Number.POSITIVE_INFINITY)).toBeUndefined();
    expect(isNonNegative(Number.MAX_SAFE_INTEGER)).toBeUndefined();
  });

  it('returns a string for negative numbers', () => {
    expect(typeof isNonNegative(-3.4)).toBe('string');
    expect(typeof isNonNegative(Number.NaN)).toBe('string');
    expect(typeof isNonNegative(Number.MIN_SAFE_INTEGER)).toBe('string');
  });

  it('returns a string for non-numbers', () => {
    expect(typeof isNonNegative(undefined)).toBe('string');
    expect(typeof isNonNegative('foo')).toBe('string');
    expect(typeof isNonNegative({ value: 2 })).toBe('string');
  });
});
