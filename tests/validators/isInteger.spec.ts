import { describe, expect, it } from 'vitest';
import { isInteger } from '../../src/validators/isInteger';

describe(isInteger, () => {
  it('returns undefined for integers', () => {
    expect(isInteger(3)).toBeUndefined();
    expect(isInteger(0)).toBeUndefined();
    expect(isInteger(-127)).toBeUndefined();
  });

  it('returns a string for non-integer numbers', () => {
    expect(typeof isInteger(3.4)).toBe('string');
    expect(typeof isInteger(Number.NaN)).toBe('string');
    expect(typeof isInteger(Number.POSITIVE_INFINITY)).toBe('string');
  });

  it('returns a string for non-numbers', () => {
    expect(typeof isInteger(undefined)).toBe('string');
    expect(typeof isInteger('foo')).toBe('string');
    expect(typeof isInteger({ value: 2 })).toBe('string');
  });
});
