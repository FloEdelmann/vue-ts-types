import { describe, expect, it } from 'vitest';
import { isInteger } from '../../src/validators/isInteger';

describe(isInteger, () => {
  it('returns undefined for integers', () => {
    expect(isInteger(3)).toBeUndefined();
    expect(isInteger(0)).toBeUndefined();
    expect(isInteger(-127)).toBeUndefined();
  });

  it('returns a string for non-integer numbers', () => {
    expect(isInteger(3.4)).toBeTypeOf('string');
    expect(isInteger(Number.NaN)).toBeTypeOf('string');
    expect(isInteger(Number.POSITIVE_INFINITY)).toBeTypeOf('string');
  });

  it('returns a string for non-numbers', () => {
    expect(isInteger(undefined)).toBeTypeOf('string');
    expect(isInteger('foo')).toBeTypeOf('string');
    expect(isInteger({ value: 2 })).toBeTypeOf('string');
  });
});
