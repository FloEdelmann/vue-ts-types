import { oneOfTypesProp, oneOfTypesDefaultProp, oneOfTypesRequiredProp } from '../../src/prop-types/oneOfTypes';

describe('oneOfTypesProp', () => {
  it('creates the correct prop options', () => {
    expect(oneOfTypesProp<number | string>([Number, String])).toStrictEqual({
      type: [Number, String],
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('oneOfTypesDefaultProp', () => {
  it('creates the correct prop options', () => {
    expect(oneOfTypesDefaultProp<number | string>([Number, String], 'a')).toStrictEqual({
      type: [Number, String],
      required: false,
      default: 'a',
      validator: undefined,
    });
  });
});

describe('oneOfTypesRequiredProp', () => {
  it('creates the correct prop options', () => {
    expect(oneOfTypesRequiredProp<number | string>([Number, String])).toStrictEqual({
      type: [Number, String],
      required: true,
      validator: undefined,
    });
  });
});
