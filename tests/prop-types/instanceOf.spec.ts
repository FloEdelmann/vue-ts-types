import { instanceOfProp, instanceOfDefaultProp, instanceOfRequiredProp } from '../../src/prop-types/instanceOf';

class User {}

describe('instanceOfProp', () => {
  it('creates the correct prop options', () => {
    expect(instanceOfProp(User)).toStrictEqual({
      type: User,
      required: false,
      default: undefined,
      validator: expect.any(Function),
    });
  });
});

describe('instanceOfDefaultProp', () => {
  it('creates the correct prop options', () => {
    expect(instanceOfDefaultProp(User, () => new User())).toStrictEqual({
      type: User,
      required: false,
      default: expect.any(Function),
      validator: expect.any(Function),
    });
  });
});

describe('instanceOfRequiredProp', () => {
  it('creates the correct prop options', () => {
    expect(instanceOfRequiredProp(User)).toStrictEqual({
      type: User,
      required: true,
      validator: expect.any(Function),
    });
  });
});
