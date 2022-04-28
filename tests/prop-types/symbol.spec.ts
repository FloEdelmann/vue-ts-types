import { symbolProp, symbolDefaultProp, symbolRequiredProp } from '../../src/prop-types/symbol';

describe('symbolProp', () => {
  it('creates the correct prop options', () => {
    expect(symbolProp()).toStrictEqual({
      type: undefined,
      required: false,
      default: undefined,
      validator: expect.any(Function),
    });
  });
});

describe('symbolDefaultProp', () => {
  it('creates the correct prop options', () => {
    expect(symbolDefaultProp(Symbol.for('foo'))).toStrictEqual({
      type: undefined,
      required: false,
      default: Symbol.for('foo'),
      validator: expect.any(Function),
    });
  });
});

describe('symbolRequiredProp', () => {
  it('creates the correct prop options', () => {
    expect(symbolRequiredProp()).toStrictEqual({
      type: undefined,
      required: true,
      validator: expect.any(Function),
    });
  });
});
