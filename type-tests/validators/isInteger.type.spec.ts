import { expect } from 'tstyche';
import { isInteger } from '../../src/validators/isInteger';

expect(isInteger(undefined)).type.toBe<string | undefined>();
