import { objectProp } from '../../src/prop-types/object';

describe('objectProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(objectProp().optional).toStrictEqual({
      type: Object,
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

const defaultGenerator = () => ({ foo: 'bar' });

describe('objectProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(objectProp().withDefault(defaultGenerator)).toStrictEqual({
      type: Object,
      required: false,
      default: defaultGenerator,
      validator: undefined,
    });
  });
});

describe('objectProp().required', () => {
  it('creates the correct prop options', () => {
    expect(objectProp().required).toStrictEqual({
      type: Object,
      required: true,
      validator: undefined,
    });
  });
});
