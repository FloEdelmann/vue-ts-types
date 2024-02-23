import { expect } from 'tstyche';
import { isPositive } from '../../src/validators/isPositive';

expect(isPositive(undefined)).type.toEqual<string | undefined>();
