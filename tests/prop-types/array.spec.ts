import { arrayProp } from '../../src/prop-types/array';

describe('arrayProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(arrayProp().optional).toStrictEqual({
      type: Array,
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('arrayProp().nullable', () => {
  it('creates the correct prop options', () => {
    expect(arrayProp().nullable).toStrictEqual({
      type: Array,
      required: false,
      default: null,
      validator: undefined,
    });
  });
});

const defaultGenerator = () => ['foo'];

describe('arrayProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(arrayProp().withDefault(defaultGenerator)).toStrictEqual({
      type: Array,
      required: false,
      default: defaultGenerator,
      validator: undefined,
    });
  });
});

describe('arrayProp().required', () => {
  it('creates the correct prop options', () => {
    expect(arrayProp().required).toStrictEqual({
      type: Array,
      required: true,
      validator: undefined,
    });
  });
});
