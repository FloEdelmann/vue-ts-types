import type { DefaultPropOptions, RequiredPropOptions } from '../types'
import type { Validator } from '../validators'
import { vuePropValidator } from '../validators'

export const numberProp = (validator?: Validator): DefaultPropOptions<number | undefined> => ({
  type: Number,
  required: false,
  default: undefined,
  validator: vuePropValidator(validator),
})

export const numberDefaultProp = (defaultValue: number, validator?: Validator): DefaultPropOptions<number> => ({
  type: Number,
  required: false,
  default: defaultValue,
  validator: vuePropValidator(validator),
})

export const numberRequiredProp = (validator?: Validator): RequiredPropOptions<number> => ({
  type: Number,
  required: true,
  validator: vuePropValidator(validator),
})
