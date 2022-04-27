import type { DefaultPropOptions, RequiredPropOptions } from '../types'
import type { Validator } from '../validators'
import { vuePropValidator } from '../validators'

export const stringProp = (validator?: Validator): DefaultPropOptions<string | undefined> => ({
  type: String,
  required: false,
  default: undefined,
  validator: vuePropValidator(validator),
})

export const stringDefaultProp = (defaultValue: string, validator?: Validator): DefaultPropOptions<string> => ({
  type: String,
  required: false,
  default: defaultValue,
  validator: vuePropValidator(validator),
})

export const stringRequiredProp = (validator?: Validator): RequiredPropOptions<string> => ({
  type: String,
  required: true,
  validator: vuePropValidator(validator),
})
