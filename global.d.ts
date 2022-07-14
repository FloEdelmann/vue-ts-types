declare namespace jest {
  interface Matchers<R> {
    toHaveBeenCalledBefore(mock: jest.Mock, failIfNoSecondInvocation?: boolean): R;
  }
}
