import { expect } from 'tstyche';
import { isInstanceOf } from '../../src/validators/isInstanceOf';

declare class User {}

expect(isInstanceOf(Array)(undefined)).type.toEqual<string | undefined>();
expect(isInstanceOf(User)(undefined)).type.toEqual<string | undefined>();
