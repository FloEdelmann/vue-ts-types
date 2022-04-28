import { stringProp, stringDefaultProp, stringRequiredProp } from '../../src/prop-types/string';

describe('stringProp', () => {
  it('creates the correct prop options', () => {
    expect(stringProp()).toStrictEqual({
      type: String,
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('stringDefaultProp', () => {
  it('creates the correct prop options', () => {
    expect(stringDefaultProp('foo')).toStrictEqual({
      type: String,
      required: false,
      default: 'foo',
      validator: undefined,
    });
  });
});

describe('stringRequiredProp', () => {
  it('creates the correct prop options', () => {
    expect(stringRequiredProp()).toStrictEqual({
      type: String,
      required: true,
      validator: undefined,
    });
  });
});
