import { expect } from 'tstyche';
import { isNegative } from '../../src/validators/isNegative';

expect(isNegative(undefined)).type.toEqual<string | undefined>();
