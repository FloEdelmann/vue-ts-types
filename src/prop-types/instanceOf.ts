import type { Constructor, PropOptionsGenerator } from '../types';
import { propOptionsGenerator } from '../util';
import type { Validator } from '../validators';
import { isInstanceOf } from '../validators';

export const instanceOfProp = <T extends Constructor>(parent: T, validator?: Validator): PropOptionsGenerator<InstanceType<T>> =>
  propOptionsGenerator<InstanceType<T>>(parent, validator, isInstanceOf(parent));
