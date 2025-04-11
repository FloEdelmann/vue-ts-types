import { describe, expect, it } from 'vitest';
import { isOneOf } from '../../src/validators/isOneOf';

describe(isOneOf, () => {
  const validator = isOneOf(['foo', 27, undefined]);

  it('returns undefined if value is included', () => {
    expect(validator('foo')).toBeUndefined();
    expect(validator(27)).toBeUndefined();
    expect(validator(undefined)).toBeUndefined();
  });

  it('returns a string if value is not included', () => {
    expect(typeof validator('')).toBe('string');
    expect(typeof validator(27.1)).toBe('string');
    expect(typeof validator(null)).toBe('string');
  });
});
