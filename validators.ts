import Vue from 'vue'
import type { Constructor } from './types'

export type Validator = (value: unknown) => string | undefined
export type VuePropValidator = (value: unknown) => boolean

export function vuePropValidator(userValidator?: Validator, ...typeValidators: Validator[]): VuePropValidator | undefined {
  const validators = userValidator ? [...typeValidators, userValidator] : typeValidators
  if (validators.length === 0) {
    return undefined
  }

  return (value: unknown) => {
    for (const validator of validators) {
      const errorMessage = validator(value)
      if (errorMessage) {
        Vue.util.warn(`${errorMessage} (received: '${value}')`)
        return false
      }
    }

    return true
  }
}

export const isOneOf = (allowedValues: readonly unknown[]): Validator => value => {
  if (!allowedValues.includes(value)) {
    return `value should be one of "${allowedValues.join('", "')}"`
  }
  return undefined
}

export const isInteger: Validator = value => {
  if (typeof value !== 'number' || !Number.isInteger(value)) {
    return 'value should be an integer'
  }
  return undefined
}

export const isSymbol: Validator = value => {
  if (typeof value !== 'symbol') {
    return 'value should be a symbol'
  }
  return undefined
}

export const isInstanceOf = (parent: Constructor): Validator => value => {
  if (!(value instanceof parent)) {
    return `value should be an instance of ${parent.name}`
  }
  return undefined
}
