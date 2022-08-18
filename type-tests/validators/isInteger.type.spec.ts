import { expectType } from 'tsd-lite';
import { isInteger } from '../../src/validators/isInteger';

expectType<string | undefined>(isInteger(undefined));
