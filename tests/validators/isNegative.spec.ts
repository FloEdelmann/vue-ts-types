import { describe, expect, it } from 'vitest';
import { isNegative } from '../../src/validators/isNegative';

describe('isNegative', () => {
  it('returns undefined for negative numbers', () => {
    expect(isNegative(-0.1)).toBeUndefined();
    expect(isNegative(-27)).toBeUndefined();
    expect(isNegative(Number.NEGATIVE_INFINITY)).toBeUndefined();
    expect(isNegative(Number.MIN_SAFE_INTEGER)).toBeUndefined();
  });

  it('returns a string for non-positive numbers', () => {
    expect(typeof isNegative(0)).toBe('string');
    expect(typeof isNegative(3.4)).toBe('string');
    expect(typeof isNegative(Number.NaN)).toBe('string');
    expect(typeof isNegative(Number.MAX_SAFE_INTEGER)).toBe('string');
  });

  it('returns a string for non-numbers', () => {
    expect(typeof isNegative(undefined)).toBe('string');
    expect(typeof isNegative('foo')).toBe('string');
    expect(typeof isNegative({ value: 2 })).toBe('string');
  });
});
