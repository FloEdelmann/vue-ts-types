import { expect } from 'tstyche';
import { isSymbol } from '../../src/validators/isSymbol';

expect(isSymbol(undefined)).type.toEqual<string | undefined>();
