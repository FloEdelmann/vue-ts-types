import { describe, expect, it, jest } from '@jest/globals';
import { vuePropValidator } from '../../src/validators';

describe('vuePropValidator', () => {
  const validator1 = jest.fn<() => string | undefined>();
  const validator2 = jest.fn<() => string | undefined>();
  const validator3 = jest
    .fn<() => string | undefined>()
    .mockReturnValue('some error message');
  const validator4 = jest.fn<() => string | undefined>();

  const warnSpy = jest
    .spyOn(console, 'warn')
    .mockImplementation(() => undefined);

  it('returns undefined if no validator is passed', () => {
    expect(vuePropValidator()).toBeUndefined();
    expect(vuePropValidator(undefined)).toBeUndefined();
  });

  it('returns a Vue validator function if a validator is passed', () => {
    expect(vuePropValidator(validator1)).toBeDefined();
    expect(vuePropValidator(undefined, validator1)).toBeDefined();
  });

  describe('returned Vue validator', () => {
    it('returns true if all validators pass', () => {
      expect(vuePropValidator(undefined, validator1, validator2)!('foo')).toBe(
        true,
      );

      expect(vuePropValidator(validator1, validator2)!('foo')).toBe(true);
    });

    it('does not warn all validators pass', () => {
      vuePropValidator(undefined, validator1, validator2)!('foo');
      expect(warnSpy).not.toHaveBeenCalled();
    });

    it('returns false if any validator fails', () => {
      expect(vuePropValidator(undefined, validator3, validator2)!('foo')).toBe(
        false,
      );

      expect(vuePropValidator(validator3, validator2)!('foo')).toBe(false);
    });

    it('warns if any validator fails', () => {
      vuePropValidator(undefined, validator3, validator2)!('foo');
      expect(warnSpy).toHaveBeenCalledWith(
        "some error message (received: 'foo')",
      );
    });

    it('calls all validators in order until one fails', () => {
      vuePropValidator(
        undefined,
        validator1,
        validator2,
        validator3,
        validator4,
      )!('foo');

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
