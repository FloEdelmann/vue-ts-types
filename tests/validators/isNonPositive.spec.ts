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
    expect(isNonPositive(3.4)).toBeTypeOf('string');
    expect(isNonPositive(Number.NaN)).toBeTypeOf('string');
    expect(isNonPositive(Number.MAX_SAFE_INTEGER)).toBeTypeOf('string');
  });

  it('returns a string for non-numbers', () => {
    expect(isNonPositive(undefined)).toBeTypeOf('string');
    expect(isNonPositive('foo')).toBeTypeOf('string');
    expect(isNonPositive({ value: 2 })).toBeTypeOf('string');
  });
});
