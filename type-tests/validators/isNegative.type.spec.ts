import { expectType } from 'tsd-lite';
import { isNegative } from '../../src/validators/isNegative';

expectType<string | undefined>(isNegative(undefined));
