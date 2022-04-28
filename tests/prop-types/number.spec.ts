import { numberProp, numberDefaultProp, numberRequiredProp } from '../../src/prop-types/number';

describe('numberProp', () => {
  it('creates the correct prop options', () => {
    expect(numberProp()).toStrictEqual({
      type: Number,
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('numberDefaultProp', () => {
  it('creates the correct prop options', () => {
    expect(numberDefaultProp(27)).toStrictEqual({
      type: Number,
      required: false,
      default: 27,
      validator: undefined,
    });
  });
});

describe('numberRequiredProp', () => {
  it('creates the correct prop options', () => {
    expect(numberRequiredProp()).toStrictEqual({
      type: Number,
      required: true,
      validator: undefined,
    });
  });
});
