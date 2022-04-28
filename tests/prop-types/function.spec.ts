import { functionProp, functionRequiredProp } from '../../src/prop-types/function';

describe('functionProp', () => {
  it('creates the correct prop options', () => {
    expect(functionProp()).toStrictEqual({
      type: Function,
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('functionRequiredProp', () => {
  it('creates the correct prop options', () => {
    expect(functionRequiredProp()).toStrictEqual({
      type: Function,
      required: true,
      validator: undefined,
    });
  });
});
