import type { DefaultPropOptions, OneOfDefaultType, PropConstructor, RequiredPropOptions } from '../types'
import type { Validator } from '../validators'
import { isOneOf, vuePropValidator } from '../validators'

// inspired by https://github.com/dwightjack/vue-types/blob/4.1.1/src/validators/oneof.ts
const getOneOfType = <T extends readonly unknown[]>(values: T): PropConstructor<T[number]>[] | undefined => {
  const allowedTypes: PropConstructor<T[number]>[] = [...new Set(
    values.flatMap(value => {
      if (value === null || value === undefined) {
        return []
      }
      return (value as any).constructor as PropConstructor<T>
    }),
  )]

  return allowedTypes.length > 0 ? allowedTypes : undefined
}

export const oneOfProp = <T extends readonly unknown[]>(allowedValues: T, validator?: Validator): DefaultPropOptions<T[number] | undefined> => ({
  type: getOneOfType(allowedValues),
  required: false,
  default: undefined,
  validator: vuePropValidator(validator, isOneOf(allowedValues)),
})

export const oneOfDefaultProp = <T extends readonly unknown[]>(allowedValues: T, defaultValue: OneOfDefaultType<T[number]>, validator?: Validator): DefaultPropOptions<T[number]> => ({
  type: getOneOfType(allowedValues),
  required: false,
  default: defaultValue,
  validator: vuePropValidator(validator, isOneOf(allowedValues)),
})

export const oneOfRequiredProp = <T extends readonly unknown[]>(allowedValues: T, validator?: Validator): RequiredPropOptions<T[number]> => ({
  type: getOneOfType(allowedValues),
  required: true,
  validator: vuePropValidator(validator, isOneOf(allowedValues)),
})
