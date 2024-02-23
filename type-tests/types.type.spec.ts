import { expect } from 'tstyche';
import type { Constructor, OneOfDefaultType } from '../src/types';

declare class User {}
declare const user1: User;

expect<Constructor>().type.toBeAssignable(User);
expect<Constructor>().type.toBeAssignable(Array);
expect<Constructor>().type.toBeAssignable(Object);
expect<Constructor>().type.not.toBeAssignable(undefined);
expect<Constructor>().type.not.toBeAssignable({});

expect<OneOfDefaultType<boolean>>().type.toBeAssignable(true);
expect<OneOfDefaultType<boolean>>().type.not.toBeAssignable(undefined);
expect<OneOfDefaultType<boolean>>().type.not.toBeAssignable(() => true);

expect<OneOfDefaultType<User>>().type.not.toBeAssignable(user1);
expect<OneOfDefaultType<User>>().type.toBeAssignable(() => user1);

expect<OneOfDefaultType<object>>().type.not.toBeAssignable({});
expect<OneOfDefaultType<object>>().type.toBeAssignable(() => ({}));

expect<OneOfDefaultType<unknown[]>>().type.not.toBeAssignable([]);
expect<OneOfDefaultType<unknown[]>>().type.toBeAssignable(() => []);
