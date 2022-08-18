import { expectType } from 'tsd-lite';
import { isNonNegative } from '../../src/validators/isNonNegative';

expectType<string | undefined>(isNonNegative(undefined));
