import { describe, expect, it } from 'vitest';
import { isSafeInteger } from '../../src/validators/isSafeInteger';

describe(isSafeInteger, () => {
  it('returns undefined for safe integers', () => {
    expect(isSafeInteger(3)).toBeUndefined();
    expect(isSafeInteger(0)).toBeUndefined();
    expect(isSafeInteger(-127)).toBeUndefined();
    expect(isSafeInteger(Number.MAX_SAFE_INTEGER)).toBeUndefined();
  });

  it('returns a string for unsafe integers', () => {
    expect(isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBeTypeOf('string');
    expect(isSafeInteger(2 ** 53)).toBeTypeOf('string');
  });

  it('returns a string for non-integer numbers', () => {
    expect(isSafeInteger(3.4)).toBeTypeOf('string');
    expect(isSafeInteger(NaN)).toBeTypeOf('string');
    expect(isSafeInteger(Infinity)).toBeTypeOf('string');
  });

  it('returns a string for non-numbers', () => {
    expect(isSafeInteger(undefined)).toBeTypeOf('string');
    expect(isSafeInteger('foo')).toBeTypeOf('string');
    expect(isSafeInteger({ value: 2 })).toBeTypeOf('string');
  });
});
