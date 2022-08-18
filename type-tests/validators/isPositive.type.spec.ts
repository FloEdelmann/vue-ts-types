import { expectType } from 'tsd-lite';
import { isPositive } from '../../src/validators/isPositive';

expectType<string | undefined>(isPositive(undefined));
