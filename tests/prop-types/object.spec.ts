import { objectProp, objectDefaultProp, objectRequiredProp } from '../../src/prop-types/object';

describe('objectProp', () => {
  it('creates the correct prop options', () => {
    expect(objectProp()).toStrictEqual({
      type: Object,
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('objectDefaultProp', () => {
  it('creates the correct prop options', () => {
    expect(objectDefaultProp({ foo: 'bar' })).toStrictEqual({
      type: Object,
      required: false,
      default: expect.any(Function),
      validator: undefined,
    });
  });
});

describe('objectRequiredProp', () => {
  it('creates the correct prop options', () => {
    expect(objectRequiredProp()).toStrictEqual({
      type: Object,
      required: true,
      validator: undefined,
    });
  });
});
