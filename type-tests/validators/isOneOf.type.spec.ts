import { expectType } from 'tsd-lite';
import { isOneOf } from '../../src/validators/isOneOf';

expectType<string | undefined>(isOneOf([])(undefined));
