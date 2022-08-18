import type { Constructor } from '../types';
import type { Validator } from '.';

/** Validator that only allows instances of the given parent. */
export const isInstanceOf = (parent: Constructor): Validator => value => {
  if (!(value instanceof parent)) {
    return `value should be an instance of ${parent.name}`;
  }
  return undefined;
};
