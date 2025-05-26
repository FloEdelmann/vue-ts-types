import { describe, expect, it } from 'vitest';
import { isSymbol } from '../../src/validators/isSymbol';

describe(isSymbol, () => {
  it('returns undefined for symbols', () => {
    expect(isSymbol(Symbol('foo'))).toBeUndefined();
    expect(isSymbol(Symbol.for('foo'))).toBeUndefined();
  });

  it('returns a string for non-symbols', () => {
    expect(typeof isSymbol(undefined)).toBe('string');
    expect(typeof isSymbol('foo')).toBe('string');
    expect(typeof isSymbol(27)).toBe('string');
    expect(typeof isSymbol({ value: 2 })).toBe('string');
  });
});
