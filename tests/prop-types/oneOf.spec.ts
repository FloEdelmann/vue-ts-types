import { oneOfProp, oneOfDefaultProp, oneOfRequiredProp } from '../../src/prop-types/oneOf';

describe('oneOfProp', () => {
  it('creates the correct prop options', () => {
    expect(oneOfProp(['a', 'b', 'c'] as const)).toStrictEqual({
      type: String,
      required: false,
      default: undefined,
      validator: expect.any(Function),
    });
  });

  it('has the correct type', () => {
    expect(oneOfProp(['a', 'b', 'c'] as const).type).toStrictEqual(String);
    expect(oneOfProp([1, 2, 3] as const).type).toStrictEqual(Number);
    expect(oneOfProp(['foo', 1, 2, 3] as const).type).toStrictEqual([String, Number]);
    expect(oneOfProp([true, false, 'both'] as const).type).toStrictEqual([Boolean, String]);
    expect(oneOfProp([undefined, null] as const).type).toStrictEqual(undefined);
    expect(oneOfProp([undefined, 'defined'] as const).type).toStrictEqual(String);
  });
});

describe('oneOfDefaultProp', () => {
  it('creates the correct prop options', () => {
    expect(oneOfDefaultProp(['a', 'b', 'c'] as const, 'a')).toStrictEqual({
      type: String,
      required: false,
      default: 'a',
      validator: expect.any(Function),
    });
  });
});

describe('oneOfRequiredProp', () => {
  it('creates the correct prop options', () => {
    expect(oneOfRequiredProp(['a', 'b', 'c'] as const)).toStrictEqual({
      type: String,
      required: true,
      validator: expect.any(Function),
    });
  });
});
