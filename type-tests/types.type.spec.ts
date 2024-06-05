import { expect } from 'tstyche';
import type { Constructor, OneOfDefaultType } from '../src/types';

declare class User {}
declare const user1: User;

expect<Constructor>().type.toBeAssignableWith(User);
expect<Constructor>().type.toBeAssignableWith(Array);
expect<Constructor>().type.toBeAssignableWith(Object);
expect<Constructor>().type.not.toBeAssignableWith(undefined);
expect<Constructor>().type.not.toBeAssignableWith({});

expect<OneOfDefaultType<boolean>>().type.toBeAssignableWith(true);
expect<OneOfDefaultType<boolean>>().type.not.toBeAssignableWith(undefined);
expect<OneOfDefaultType<boolean>>().type.not.toBeAssignableWith(() => true);

expect<OneOfDefaultType<User>>().type.not.toBeAssignableWith(user1);
expect<OneOfDefaultType<User>>().type.toBeAssignableWith(() => user1);

expect<OneOfDefaultType<object>>().type.not.toBeAssignableWith({});
expect<OneOfDefaultType<object>>().type.toBeAssignableWith(() => ({}));

expect<OneOfDefaultType<unknown[]>>().type.not.toBeAssignableWith([]);
expect<OneOfDefaultType<unknown[]>>().type.toBeAssignableWith(() => []);
