import { integerProp } from '../../src/prop-types/integer';

describe('integerProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(integerProp().optional).toStrictEqual({
      type: Number,
      required: false,
      default: undefined,
      validator: expect.any(Function),
    });
  });
});

describe('integerProp().nullable', () => {
  it('creates the correct prop options', () => {
    expect(integerProp().nullable).toStrictEqual({
      type: Number,
      required: false,
      default: null,
      validator: expect.any(Function),
    });
  });
});

describe('integerProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(integerProp().withDefault(27)).toStrictEqual({
      type: Number,
      required: false,
      default: 27,
      validator: expect.any(Function),
    });
  });
});

describe('integerProp().required', () => {
  it('creates the correct prop options', () => {
    expect(integerProp().required).toStrictEqual({
      type: Number,
      required: true,
      validator: expect.any(Function),
    });
  });
});
