import type { DefaultPropOptions, RequiredPropOptions } from '../types'
import type { Validator } from '../validators'
import { vuePropValidator } from '../validators'

export const vueComponentProp = (validator?: Validator): DefaultPropOptions<object | string | undefined> => ({
  type: [Object, String],
  required: false,
  default: undefined,
  validator: vuePropValidator(validator),
})

export const vueComponentRequiredProp = (validator?: Validator): RequiredPropOptions<object | string> => ({
  type: [Object, String],
  required: true,
  validator: vuePropValidator(validator),
})
