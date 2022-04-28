import { anyProp, anyDefaultProp, anyRequiredProp } from '../../src/prop-types/any';

describe('anyProp', () => {
  it('creates the correct prop options', () => {
    expect(anyProp()).toStrictEqual({
      type: undefined,
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('anyDefaultProp', () => {
  it('creates the correct prop options', () => {
    expect(anyDefaultProp('foo')).toStrictEqual({
      type: undefined,
      required: false,
      default: 'foo',
      validator: undefined,
    });
  });
});

describe('anyRequiredProp', () => {
  it('creates the correct prop options', () => {
    expect(anyRequiredProp()).toStrictEqual({
      type: undefined,
      required: true,
      validator: undefined,
    });
  });
});
