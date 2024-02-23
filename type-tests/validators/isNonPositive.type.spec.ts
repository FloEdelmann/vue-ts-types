import { expect } from 'tstyche';
import { isNonPositive } from '../../src/validators/isNonPositive';

expect(isNonPositive(undefined)).type.toEqual<string | undefined>();
