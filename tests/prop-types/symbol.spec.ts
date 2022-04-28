import { symbolProp } from '../../src/prop-types/symbol';

describe('symbolProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(symbolProp().optional).toStrictEqual({
      type: undefined,
      required: false,
      default: undefined,
      validator: expect.any(Function),
    });
  });
});

describe('symbolProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(symbolProp().withDefault(Symbol.for('foo'))).toStrictEqual({
      type: undefined,
      required: false,
      default: Symbol.for('foo'),
      validator: expect.any(Function),
    });
  });
});

describe('symbolProp().required', () => {
  it('creates the correct prop options', () => {
    expect(symbolProp().required).toStrictEqual({
      type: undefined,
      required: true,
      validator: expect.any(Function),
    });
  });
});
