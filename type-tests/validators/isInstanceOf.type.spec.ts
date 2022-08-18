import { expectType } from 'tsd-lite';
import { isInstanceOf } from '../../src/validators/isInstanceOf';

declare class User {}

expectType<string | undefined>(isInstanceOf(Array)(undefined));
expectType<string | undefined>(isInstanceOf(User)(undefined));
