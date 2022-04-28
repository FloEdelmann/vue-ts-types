import { expectAssignable, expectNotAssignable } from 'tsd-lite';
import type { Constructor, OneOfDefaultType } from '../src/types';

declare class User {}
declare const user1: User;

expectAssignable<Constructor>(User);
expectAssignable<Constructor>(Array);
expectAssignable<Constructor>(Object);
expectNotAssignable<Constructor>(undefined);
expectNotAssignable<Constructor>({});

expectAssignable<OneOfDefaultType<boolean>>(true);
expectNotAssignable<OneOfDefaultType<boolean>>(undefined);
expectNotAssignable<OneOfDefaultType<boolean>>(() => true);

expectNotAssignable<OneOfDefaultType<User>>(user1);
expectAssignable<OneOfDefaultType<User>>(() => user1);

expectNotAssignable<OneOfDefaultType<object>>({});
expectAssignable<OneOfDefaultType<object>>(() => ({}));

expectNotAssignable<OneOfDefaultType<unknown[]>>([]);
expectAssignable<OneOfDefaultType<unknown[]>>(() => []);
