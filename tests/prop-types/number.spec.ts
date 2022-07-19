import { numberProp } from '../../src/prop-types/number';

describe('numberProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(numberProp().optional).toStrictEqual({
      type: Number,
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('numberProp().nullable', () => {
  it('creates the correct prop options', () => {
    expect(numberProp().nullable).toStrictEqual({
      type: Number,
      required: false,
      default: null,
      validator: undefined,
    });
  });
});

describe('numberProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(numberProp().withDefault(27)).toStrictEqual({
      type: Number,
      required: false,
      default: 27,
      validator: undefined,
    });
  });
});

describe('numberProp().required', () => {
  it('creates the correct prop options', () => {
    expect(numberProp().required).toStrictEqual({
      type: Number,
      required: true,
      validator: undefined,
    });
  });
});
