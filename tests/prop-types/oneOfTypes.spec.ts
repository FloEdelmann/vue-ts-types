import { oneOfTypesProp } from '../../src/prop-types/oneOfTypes';

describe('oneOfTypesProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(oneOfTypesProp<number | string>([Number, String]).optional).toStrictEqual({
      type: [Number, String],
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('oneOfTypesProp().nullable', () => {
  it('creates the correct prop options', () => {
    expect(oneOfTypesProp<number | string>([Number, String]).nullable).toStrictEqual({
      type: [Number, String],
      required: false,
      default: null,
      validator: undefined,
    });
  });
});

describe('oneOfTypesProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(oneOfTypesProp<number | string>([Number, String]).withDefault('a')).toStrictEqual({
      type: [Number, String],
      required: false,
      default: 'a',
      validator: undefined,
    });
  });
});

describe('oneOfTypesProp().required', () => {
  it('creates the correct prop options', () => {
    expect(oneOfTypesProp<number | string>([Number, String]).required).toStrictEqual({
      type: [Number, String],
      required: true,
      validator: undefined,
    });
  });
});
