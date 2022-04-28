import { integerProp, integerDefaultProp, integerRequiredProp } from '../../src/prop-types/integer';

describe('integerProp', () => {
  it('creates the correct prop options', () => {
    expect(integerProp()).toStrictEqual({
      type: Number,
      required: false,
      default: undefined,
      validator: expect.any(Function),
    });
  });
});

describe('integerDefaultProp', () => {
  it('creates the correct prop options', () => {
    expect(integerDefaultProp(27)).toStrictEqual({
      type: Number,
      required: false,
      default: 27,
      validator: expect.any(Function),
    });
  });
});

describe('integerRequiredProp', () => {
  it('creates the correct prop options', () => {
    expect(integerRequiredProp()).toStrictEqual({
      type: Number,
      required: true,
      validator: expect.any(Function),
    });
  });
});
