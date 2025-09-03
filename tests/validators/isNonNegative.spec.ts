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
    expect(isNonNegative(-3.4)).toBeTypeOf('string');
    expect(isNonNegative(Number.NaN)).toBeTypeOf('string');
    expect(isNonNegative(Number.MIN_SAFE_INTEGER)).toBeTypeOf('string');
  });

  it('returns a string for non-numbers', () => {
    expect(isNonNegative(undefined)).toBeTypeOf('string');
    expect(isNonNegative('foo')).toBeTypeOf('string');
    expect(isNonNegative({ value: 2 })).toBeTypeOf('string');
  });
});
