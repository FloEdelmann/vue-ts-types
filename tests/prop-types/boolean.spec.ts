import { booleanProp, booleanDefaultProp, booleanRequiredProp } from '../../src/prop-types/boolean';

describe('booleanProp', () => {
  it('creates the correct prop options', () => {
    expect(booleanProp()).toStrictEqual({
      type: Boolean,
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('booleanDefaultProp', () => {
  it('creates the correct prop options', () => {
    expect(booleanDefaultProp(false)).toStrictEqual({
      type: Boolean,
      required: false,
      default: false,
      validator: undefined,
    });
  });
});

describe('booleanRequiredProp', () => {
  it('creates the correct prop options', () => {
    expect(booleanRequiredProp()).toStrictEqual({
      type: Boolean,
      required: true,
      validator: undefined,
    });
  });
});
