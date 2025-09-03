import { describe, expect, it } from 'vitest';
import { isSymbol } from '../../src/validators/isSymbol';

describe(isSymbol, () => {
  it('returns undefined for symbols', () => {
    expect(isSymbol(Symbol('foo'))).toBeUndefined();
    expect(isSymbol(Symbol.for('foo'))).toBeUndefined();
  });

  it('returns a string for non-symbols', () => {
    expect(isSymbol(undefined)).toBeTypeOf('string');
    expect(isSymbol('foo')).toBeTypeOf('string');
    expect(isSymbol(27)).toBeTypeOf('string');
    expect(isSymbol({ value: 2 })).toBeTypeOf('string');
  });
});
