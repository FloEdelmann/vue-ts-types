import { oneOfProp } from '../../src/prop-types/oneOf';

describe('oneOfProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(oneOfProp(['a', 'b', 'c'] as const).optional).toStrictEqual({
      type: String,
      required: false,
      default: undefined,
      validator: expect.any(Function),
    });
  });

  it('has the correct type', () => {
    expect(oneOfProp(['a', 'b', 'c'] as const).optional.type).toStrictEqual(String);
    expect(oneOfProp([1, 2, 3] as const).optional.type).toStrictEqual(Number);
    expect(oneOfProp(['foo', 1, 2, 3] as const).optional.type).toStrictEqual([String, Number]);
    expect(oneOfProp([true, false, 'both'] as const).optional.type).toStrictEqual([Boolean, String]);
    expect(oneOfProp([undefined, null] as const).optional.type).toStrictEqual(undefined);
    expect(oneOfProp([undefined, 'defined'] as const).optional.type).toStrictEqual(String);
  });
});

describe('oneOfProp().nullable', () => {
  it('creates the correct prop options', () => {
    expect(oneOfProp(['a', 'b', 'c'] as const).nullable).toStrictEqual({
      type: String,
      required: false,
      default: null,
      validator: expect.any(Function),
    });
  });

  it('has the correct type', () => {
    expect(oneOfProp(['a', 'b', 'c'] as const).nullable.type).toStrictEqual(String);
    expect(oneOfProp([1, 2, 3] as const).nullable.type).toStrictEqual(Number);
    expect(oneOfProp(['foo', 1, 2, 3] as const).nullable.type).toStrictEqual([String, Number]);
    expect(oneOfProp([true, false, 'both'] as const).nullable.type).toStrictEqual([Boolean, String]);
    expect(oneOfProp([undefined, null] as const).nullable.type).toStrictEqual(undefined);
    expect(oneOfProp([undefined, 'defined'] as const).nullable.type).toStrictEqual(String);
  });
});

describe('oneOfProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(oneOfProp(['a', 'b', 'c'] as const).withDefault('a')).toStrictEqual({
      type: String,
      required: false,
      default: 'a',
      validator: expect.any(Function),
    });
  });
});

describe('oneOfProp().required', () => {
  it('creates the correct prop options', () => {
    expect(oneOfProp(['a', 'b', 'c'] as const).required).toStrictEqual({
      type: String,
      required: true,
      validator: expect.any(Function),
    });
  });
});
