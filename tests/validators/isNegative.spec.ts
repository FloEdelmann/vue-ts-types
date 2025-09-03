import { describe, expect, it } from 'vitest';
import { isNegative } from '../../src/validators/isNegative';

describe(isNegative, () => {
  it('returns undefined for negative numbers', () => {
    expect(isNegative(-0.1)).toBeUndefined();
    expect(isNegative(-27)).toBeUndefined();
    expect(isNegative(Number.NEGATIVE_INFINITY)).toBeUndefined();
    expect(isNegative(Number.MIN_SAFE_INTEGER)).toBeUndefined();
  });

  it('returns a string for non-positive numbers', () => {
    expect(isNegative(0)).toBeTypeOf('string');
    expect(isNegative(3.4)).toBeTypeOf('string');
    expect(isNegative(Number.NaN)).toBeTypeOf('string');
    expect(isNegative(Number.MAX_SAFE_INTEGER)).toBeTypeOf('string');
  });

  it('returns a string for non-numbers', () => {
    expect(isNegative(undefined)).toBeTypeOf('string');
    expect(isNegative('foo')).toBeTypeOf('string');
    expect(isNegative({ value: 2 })).toBeTypeOf('string');
  });
});
