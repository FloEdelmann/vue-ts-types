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
    expect(isPositive(0)).toBeTypeOf('string');
    expect(isPositive(-3.4)).toBeTypeOf('string');
    expect(isPositive(Number.NaN)).toBeTypeOf('string');
    expect(isPositive(Number.MIN_SAFE_INTEGER)).toBeTypeOf('string');
  });

  it('returns a string for non-numbers', () => {
    expect(isPositive(undefined)).toBeTypeOf('string');
    expect(isPositive('foo')).toBeTypeOf('string');
    expect(isPositive({ value: 2 })).toBeTypeOf('string');
  });
});
