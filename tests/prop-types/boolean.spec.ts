import { booleanProp } from '../../src/prop-types/boolean';

describe('booleanProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(booleanProp().optional).toStrictEqual({
      type: Boolean,
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('booleanProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(booleanProp().withDefault(false)).toStrictEqual({
      type: Boolean,
      required: false,
      default: false,
      validator: undefined,
    });
  });
});

describe('booleanProp().required', () => {
  it('creates the correct prop options', () => {
    expect(booleanProp().required).toStrictEqual({
      type: Boolean,
      required: true,
      validator: undefined,
    });
  });
});
