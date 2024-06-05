import { expect } from 'tstyche';
import { isOneOf } from '../../src/validators/isOneOf';

expect(isOneOf([])(undefined)).type.toBe<string | undefined>();
