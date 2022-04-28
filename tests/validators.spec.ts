import { vuePropValidator, isOneOf, isInteger, isSymbol, isInstanceOf } from '../validators'

describe('validators', () => {
  describe('isInteger', () => {
    it('returns undefined for integers', () => {
      expect(isInteger(3)).toBeUndefined()
      expect(isInteger(0)).toBeUndefined()
      expect(isInteger(-127)).toBeUndefined()
    })

    it('returns a string for non-integer numbers', () => {
      expect(typeof isInteger(3.4)).toBe('string')
      expect(typeof isInteger(Number.NaN)).toBe('string')
      expect(typeof isInteger(Number.POSITIVE_INFINITY)).toBe('string')
    })

    it('returns a string for non-numbers', () => {
      expect(typeof isInteger(undefined)).toBe('string')
      expect(typeof isInteger('foo')).toBe('string')
      expect(typeof isInteger({ value: 2 })).toBe('string')
    })
  })

  describe('isSymbol', () => {
    it('returns undefined for symbols', () => {
      expect(isSymbol(Symbol('foo'))).toBeUndefined()
      expect(isSymbol(Symbol.for('foo'))).toBeUndefined()
    })

    it('returns a string for non-symbols', () => {
      expect(typeof isSymbol(undefined)).toBe('string')
      expect(typeof isSymbol('foo')).toBe('string')
      expect(typeof isSymbol(27)).toBe('string')
      expect(typeof isSymbol({ value: 2 })).toBe('string')
    })
  })
})
