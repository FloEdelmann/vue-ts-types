import { expect } from 'tstyche';
import { isNonNegative } from '../../src/validators/isNonNegative';

expect(isNonNegative(undefined)).type.toBe<string | undefined>();
