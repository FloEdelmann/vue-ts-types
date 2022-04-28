import { expectType } from 'tsd-lite';
import { isInteger, isSymbol } from '../src/validators';

expectType<string | undefined>(isInteger(undefined));
expectType<string | undefined>(isSymbol(undefined));
