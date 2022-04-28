import { oneOfObjectKeysProp, oneOfObjectKeysDefaultProp, oneOfObjectKeysRequiredProp } from '../../src/prop-types/oneOfObjectKeys';

const options = { a: 'a', b: 'b', c: 'c' };

describe('oneOfObjectKeysProp', () => {
  it('creates the correct prop options', () => {
    expect(oneOfObjectKeysProp(options)).toStrictEqual({
      type: String,
      required: false,
      default: undefined,
      validator: expect.any(Function),
    });
  });
});

describe('oneOfObjectKeysDefaultProp', () => {
  it('creates the correct prop options', () => {
    expect(oneOfObjectKeysDefaultProp(options, 'a')).toStrictEqual({
      type: String,
      required: false,
      default: 'a',
      validator: expect.any(Function),
    });
  });
});

describe('oneOfObjectKeysRequiredProp', () => {
  it('creates the correct prop options', () => {
    expect(oneOfObjectKeysRequiredProp(options)).toStrictEqual({
      type: String,
      required: true,
      validator: expect.any(Function),
    });
  });
});
