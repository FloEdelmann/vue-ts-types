import { describe, expect, it } from 'vitest';
import { isPositive } from '../../src/validators/isPositive';

describe(isPositive, () => {
  it('returns undefined for positive numbers', () => {
    expect(isPositive(0.1)).toBeUndefined();
    expect(isPositive(27)).toBeUndefined();
    expect(isPositive(Number.POSITIVE_INFINITY)).toBeUndefined();
    expect(isPositive(Number.MAX_SAFE_INTEGER)).toBeUndefined();
  });

  it('returns a string for non-positive numbers', () => {
    expect(typeof isPositive(0)).toBe('string');
    expect(typeof isPositive(-3.4)).toBe('string');
    expect(typeof isPositive(Number.NaN)).toBe('string');
    expect(typeof isPositive(Number.MIN_SAFE_INTEGER)).toBe('string');
  });

  it('returns a string for non-numbers', () => {
    expect(typeof isPositive(undefined)).toBe('string');
    expect(typeof isPositive('foo')).toBe('string');
    expect(typeof isPositive({ value: 2 })).toBe('string');
  });
});
