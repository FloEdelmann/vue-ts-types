import { isInstanceOf, isInteger, isOneOf, isSymbol, vuePropValidator } from '../src/validators';

describe('vuePropValidator', () => {
  const validator1 = jest.fn();
  const validator2 = jest.fn();
  const validator3 = jest.fn().mockReturnValue('some error message');
  const validator4 = jest.fn();

  const warnSpy = jest.spyOn(console, 'warn').mockImplementation();

  it('returns undefined if no validator is passed', () => {
    expect(vuePropValidator()).toBeUndefined();
    expect(vuePropValidator(undefined)).toBeUndefined();
  });

  it('returns a Vue validator function if a validator is passed', () => {
    expect(vuePropValidator(validator1)).not.toBeUndefined();
    expect(vuePropValidator(undefined, validator1)).not.toBeUndefined();
  });

  describe('returned Vue validator', () => {
    it('returns true if all validators pass', () => {
      expect(
        vuePropValidator(undefined, validator1, validator2)!('foo'),
      ).toBe(true);

      expect(
        vuePropValidator(validator1, validator2)!('foo'),
      ).toBe(true);
    });

    it('does not warn all validators pass', () => {
      vuePropValidator(undefined, validator1, validator2)!('foo');
      expect(warnSpy).not.toHaveBeenCalled();
    });

    it('returns false if any validator fails', () => {
      expect(
        vuePropValidator(undefined, validator3, validator2)!('foo'),
      ).toBe(false);

      expect(
        vuePropValidator(validator3, validator2)!('foo'),
      ).toBe(false);
    });

    it('warns if any validator fails', () => {
      vuePropValidator(undefined, validator3, validator2)!('foo');
      expect(warnSpy).toHaveBeenCalledWith('some error message (received: \'foo\')');
    });

    it('calls all validators in order until one fails', () => {
      vuePropValidator(undefined, validator1, validator2, validator3, validator4)!('foo');

      expect(validator1).toHaveBeenCalledWith('foo');
      expect(validator1).toHaveBeenCalledBefore(validator2);
      expect(validator2).toHaveBeenCalledWith('foo');
      expect(validator2).toHaveBeenCalledBefore(validator3);
      expect(validator3).toHaveBeenCalledWith('foo');
      expect(validator4).not.toHaveBeenCalled();
    });

    it('calls the user validator last', () => {
      vuePropValidator(validator4, validator1, validator2)!('foo');

      expect(validator1).toHaveBeenCalledBefore(validator2);
      expect(validator2).toHaveBeenCalledBefore(validator4);
    });
  });
});

describe('isOneOf', () => {
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

describe('isInteger', () => {
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

describe('isSymbol', () => {
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

describe('isInstanceOf', () => {
  class User {}

  it('returns undefined if value is instance', () => {
    const user1 = new User();

    expect(isInstanceOf(User)(user1)).toBeUndefined();
    expect(isInstanceOf(Array)([])).toBeUndefined();

    expect(isInstanceOf(Object)(user1)).toBeUndefined();
    expect(isInstanceOf(Object)([])).toBeUndefined();
    expect(isInstanceOf(Object)({})).toBeUndefined();
  });

  it('returns a string if value is not instance', () => {
    const user1 = new User();

    expect(typeof isInstanceOf(Array)(user1)).toBe('string');
    expect(typeof isInstanceOf(User)({})).toBe('string');
    expect(typeof isInstanceOf(User)(undefined)).toBe('string');
    expect(typeof isInstanceOf(User)('foo')).toBe('string');
    expect(typeof isInstanceOf(User)(27)).toBe('string');
    expect(typeof isInstanceOf(User)({ value: 2 })).toBe('string');
  });

  it('throws if parent is not a constructor', () => {
    const user1 = new User();

    expect(
      () => isInstanceOf(undefined as any)(user1),
    ).toThrow('Right-hand side of \'instanceof\' is not an object');

    expect(
      () => isInstanceOf([] as any)(user1),
    ).toThrow('Right-hand side of \'instanceof\' is not callable');

    expect(
      () => isInstanceOf({} as any)(user1),
    ).toThrow('Right-hand side of \'instanceof\' is not callable');
  });
});
