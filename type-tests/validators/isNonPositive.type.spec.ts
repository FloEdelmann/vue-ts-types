import { expectType } from 'tsd-lite';
import { isNonPositive } from '../../src/validators/isNonPositive';

expectType<string | undefined>(isNonPositive(undefined));
