import { expect } from 'tstyche';
import { isNonPositive } from '../../src/validators/isNonPositive';

expect(isNonPositive(undefined)).type.toBe<string | undefined>();
