import { expect } from 'tstyche';
import type { Constructor, OneOfDefaultType } from '../src/types';

declare class User {}
declare const user1: User;

expect<Constructor>().type.toBeAssignableFrom(User);
expect<Constructor>().type.toBeAssignableFrom(Array);
expect<Constructor>().type.toBeAssignableFrom(Object);
expect<Constructor>().type.not.toBeAssignableFrom(undefined);
expect<Constructor>().type.not.toBeAssignableFrom({});

expect<OneOfDefaultType<boolean>>().type.toBeAssignableFrom(true);
expect<OneOfDefaultType<boolean>>().type.not.toBeAssignableFrom(undefined);
expect<OneOfDefaultType<boolean>>().type.not.toBeAssignableFrom(() => true);

expect<OneOfDefaultType<User>>().type.not.toBeAssignableFrom(user1);
expect<OneOfDefaultType<User>>().type.toBeAssignableFrom(() => user1);

expect<OneOfDefaultType<object>>().type.not.toBeAssignableFrom({});
expect<OneOfDefaultType<object>>().type.toBeAssignableFrom(() => ({}));

expect<OneOfDefaultType<unknown[]>>().type.not.toBeAssignableFrom([]);
expect<OneOfDefaultType<unknown[]>>().type.toBeAssignableFrom(() => []);
