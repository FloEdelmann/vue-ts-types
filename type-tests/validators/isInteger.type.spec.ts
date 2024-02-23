import { expect } from 'tstyche';
import { isInteger } from '../../src/validators/isInteger';

expect(isInteger(undefined)).type.toEqual<string | undefined>();
