import { expectType } from 'tsd-lite';
import { isInstanceOf, isInteger, isOneOf, isSymbol } from '../src/validators';

declare class User {}

expectType<string | undefined>(isOneOf([])(undefined));
expectType<string | undefined>(isInteger(undefined));
expectType<string | undefined>(isSymbol(undefined));
expectType<string | undefined>(isInstanceOf(Array)(undefined));
expectType<string | undefined>(isInstanceOf(User)(undefined));
