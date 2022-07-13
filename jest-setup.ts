/**
 * @fileoverview copied from https://github.com/jest-community/jest-extended/blob/v3.0.1/src/matchers/toHaveBeenCalledBefore.js
 */

const isJestMockOrSpy = (value: any): value is jest.Mock => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return !!(value && value._isMockFunction === true && typeof value.mock === 'object');
};

const mockCheckFailMessage = (utils: jest.MatcherContext['utils'], value: unknown, isReceivedValue: boolean) => () => {
  const valueKind = isReceivedValue ? 'Received' : 'Expected';
  const valueKindPrintFunction = isReceivedValue ? utils.printReceived : utils.printExpected;

  return (
    `${utils.matcherHint('.toHaveBeenCalledBefore')}\n\n` +
    `Matcher error: ${valueKindPrintFunction(valueKind.toLowerCase())} must be a mock or spy function` +
    `\n\n${utils.printWithType(valueKind, value, valueKindPrintFunction)}`
  );
};

const predicate = (firstInvocationCallOrder: number[], secondInvocationCallOrder: number[], failIfNoSecondInvocation: boolean) => {
  if (firstInvocationCallOrder.length === 0) {
    return false;
  }
  if (secondInvocationCallOrder.length === 0) {
    return !failIfNoSecondInvocation;
  }

  const firstSmallest = Math.min(...firstInvocationCallOrder);
  const secondSmallest = Math.min(...secondInvocationCallOrder);

  return firstSmallest < secondSmallest;
};

function toHaveBeenCalledBefore(this: jest.MatcherContext, actual: unknown, expected: unknown, failIfNoSecondInvocation = true): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  if (!isJestMockOrSpy(actual)) {
    return { pass: false, message: mockCheckFailMessage(this.utils, actual, true) };
  }

  if (!isJestMockOrSpy(expected)) {
    return { pass: false, message: mockCheckFailMessage(this.utils, expected, false) };
  }

  const firstInvocationCallOrder = actual.mock.invocationCallOrder;
  const secondInvocationCallOrder = expected.mock.invocationCallOrder;
  const pass = predicate(firstInvocationCallOrder, secondInvocationCallOrder, failIfNoSecondInvocation);

  const passMessage =
    `${matcherHint('.not.toHaveBeenCalledBefore')}\n\n` +
    'Expected first mock to not have been called before, invocationCallOrder:\n' +
    `  ${printExpected(firstInvocationCallOrder)}\n` +
    'Received second mock with invocationCallOrder:\n' +
    `  ${printReceived(secondInvocationCallOrder)}`;

  const failMessage =
    `${matcherHint('.toHaveBeenCalledBefore')}\n\n` +
    'Expected first mock to have been called before, invocationCallOrder:\n' +
    `  ${printExpected(firstInvocationCallOrder)}\n` +
    'Received second mock with invocationCallOrder:\n' +
    `  ${printReceived(secondInvocationCallOrder)}`;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}

expect.extend({ toHaveBeenCalledBefore });
