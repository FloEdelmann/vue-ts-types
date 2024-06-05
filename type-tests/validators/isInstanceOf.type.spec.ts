import { expect } from 'tstyche';
import { isInstanceOf } from '../../src/validators/isInstanceOf';

declare class User {}

expect(isInstanceOf(Array)(undefined)).type.toBe<string | undefined>();
expect(isInstanceOf(User)(undefined)).type.toBe<string | undefined>();
