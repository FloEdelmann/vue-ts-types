import { expectType } from 'tsd-lite';
import { isSymbol } from '../../src/validators/isSymbol';

expectType<string | undefined>(isSymbol(undefined));
