import { vueComponentProp } from '../../src/prop-types/vueComponent';

describe('vueComponentProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(vueComponentProp().optional).toStrictEqual({
      type: [Object, String],
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('vueComponentProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(vueComponentProp().withDefault('foo')).toStrictEqual({
      type: [Object, String],
      required: false,
      default: 'foo',
      validator: undefined,
    });
  });
});

describe('vueComponentProp().required', () => {
  it('creates the correct prop options', () => {
    expect(vueComponentProp().required).toStrictEqual({
      type: [Object, String],
      required: true,
      validator: undefined,
    });
  });
});
