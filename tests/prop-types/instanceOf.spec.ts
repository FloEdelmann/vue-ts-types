import { instanceOfProp } from '../../src/prop-types/instanceOf';

class User {}

describe('instanceOfProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(instanceOfProp(User).optional).toStrictEqual({
      type: User,
      required: false,
      default: undefined,
      validator: expect.any(Function),
    });
  });
});

describe('instanceOfProp().withDefault', () => {
  it('creates the correct prop options', () => {
    expect(instanceOfProp(User).withDefault(() => new User())).toStrictEqual({
      type: User,
      required: false,
      default: expect.any(Function),
      validator: expect.any(Function),
    });
  });
});

describe('instanceOfProp().required', () => {
  it('creates the correct prop options', () => {
    expect(instanceOfProp(User).required).toStrictEqual({
      type: User,
      required: true,
      validator: expect.any(Function),
    });
  });
});
