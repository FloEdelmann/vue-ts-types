import { expect } from 'tstyche';
import { isNonNegative } from '../../src/validators/isNonNegative';

expect(isNonNegative(undefined)).type.toEqual<string | undefined>();
