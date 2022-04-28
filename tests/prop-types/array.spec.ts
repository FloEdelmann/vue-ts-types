import { arrayProp, arrayDefaultProp, arrayRequiredProp } from '../../src/prop-types/array';

describe('arrayProp', () => {
  it('creates the correct prop options', () => {
    expect(arrayProp()).toStrictEqual({
      type: Array,
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('arrayDefaultProp', () => {
  it('creates the correct prop options', () => {
    expect(arrayDefaultProp(['foo'])).toStrictEqual({
      type: Array,
      required: false,
      default: expect.any(Function),
      validator: undefined,
    });
  });
});

describe('arrayRequiredProp', () => {
  it('creates the correct prop options', () => {
    expect(arrayRequiredProp()).toStrictEqual({
      type: Array,
      required: true,
      validator: undefined,
    });
  });
});
