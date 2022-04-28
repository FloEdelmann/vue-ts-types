import { oneOfObjectKeysProp } from '../../src/prop-types/oneOfObjectKeys';

const options = { a: 'a', b: 'b', c: 'c' };

describe('oneOfObjectKeysProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(oneOfObjectKeysProp(options).optional).toStrictEqual({
      type: String,
      required: false,
      default: undefined,
      validator: expect.any(Function),
    });
  });
});

describe('oneOfObjectKeysProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(oneOfObjectKeysProp(options).withDefault('a')).toStrictEqual({
      type: String,
      required: false,
      default: 'a',
      validator: expect.any(Function),
    });
  });
});

describe('oneOfObjectKeysProp().required', () => {
  it('creates the correct prop options', () => {
    expect(oneOfObjectKeysProp(options).required).toStrictEqual({
      type: String,
      required: true,
      validator: expect.any(Function),
    });
  });
});
