import type { Constructor, DefaultPropOptions, OneOfDefaultType, RequiredPropOptions } from '../types'
import type { Validator } from '../validators'
import { isInstanceOf, vuePropValidator } from '../validators'

export const instanceOfProp = <T extends Constructor>(parent: T, validator?: Validator): DefaultPropOptions<InstanceType<T> | undefined> => ({
  type: parent,
  required: false,
  default: undefined,
  validator: vuePropValidator(validator, isInstanceOf(parent)),
})

export const instanceOfDefaultProp = <T extends Constructor>(parent: T, defaultValue: OneOfDefaultType<InstanceType<T>>, validator?: Validator): DefaultPropOptions<InstanceType<T>> => ({
  type: parent,
  required: false,
  default: defaultValue,
  validator: vuePropValidator(validator, isInstanceOf(parent)),
})

export const instanceOfRequiredProp = <T extends Constructor>(parent: T, validator?: Validator): RequiredPropOptions<InstanceType<T>> => ({
  type: parent,
  required: true,
  validator: vuePropValidator(validator, isInstanceOf(parent)),
})
