import { vueComponentProp, vueComponentRequiredProp } from '../../src/prop-types/vueComponent';

describe('vueComponentProp', () => {
  it('creates the correct prop options', () => {
    expect(vueComponentProp()).toStrictEqual({
      type: [Object, String],
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('vueComponentRequiredProp', () => {
  it('creates the correct prop options', () => {
    expect(vueComponentRequiredProp()).toStrictEqual({
      type: [Object, String],
      required: true,
      validator: undefined,
    });
  });
});
