import { expect } from 'tstyche';
import { isSymbol } from '../../src/validators/isSymbol';

expect(isSymbol(undefined)).type.toBe<string | undefined>();
