# vue-ts-types

> Lightweight TypeScript-first [Vue prop type](https://vuejs.org/guide/components/props.html#prop-validation) definitions

[![npm](https://img.shields.io/npm/v/vue-ts-types?color=red)](https://www.npmjs.com/package/vue-ts-types) [![GitHub](https://img.shields.io/github/package-json/v/FloEdelmann/vue-ts-types?color=blue&logo=github)](https://github.com/FloEdelmann/vue-ts-types)

## Example

```ts
import Vue from 'vue';
import { booleanProp, stringProp, arrayProp, functionProp, oneOfProp } from 'vue-ts-types';

Vue.component('MyComponent', {
  props: {
    disabled: booleanProp().withDefault(false),
    title: stringProp().optional,
    items: arrayProp<string>().required,
    callback: functionProp<() => void>().optional,
    color: oneOfProp(['red', 'green', 'blue'] as const).withDefault('red'),
  },
  mounted() {
    this.disabled // type: boolean
    this.title    // type: string | undefined
    this.items    // type: string[]
    this.callback // type: (() => void) | undefined
    this.color    // type: 'red' | 'green' | 'blue'
  },
});
```

## Installation

```bash
npm install vue-ts-types
```

## Usage

Each of the prop functions returns an object with the following properties:

* `.optional`: Use this to mark the prop as not required with a default value of `undefined`. Also includes `undefined` in the resulting prop type.
* `.required`: Use this to mark the prop as required without a default value.
* `.withDefault(value)`: Use this to set a default value for the prop. Note that the value has to fit the prop type. For non-primitive types, the value has to be a function that returns the default value.

### Custom validator functions

Custom validator functions can be passed to any of the prop types. They are called with the value of the prop (type `unknown`) and should return a validation error message, or undefined if the value is valid. Validator functions do not influence type inference.

```ts
import { numberProp } from 'vue-ts-types';

type Validator = (value: unknown) => string | undefined;

const isPositive: Validator = value => {
  if (typeof value === 'number' && value > 0) {
    return undefined;
  }
  return 'Value must be a positive number.';
}

numberProp(isPositive).optional
  // → prop type: number | undefined
```

### `stringProp(validator?: Validator)`

Allows any string. No further runtime validation is performed by default.

```ts
stringProp().optional
  // → prop type: string | undefined
stringProp().required
  // → prop type: string
stringProp().withDefault('foo')
  // → prop type: string
```

### `booleanProp(validator?: Validator)`

Allows any boolean (validated at runtime and compile time).

```ts
booleanProp().optional
  // → prop type: boolean | undefined
booleanProp().required
  // → prop type: boolean
booleanProp().withDefault(false)
  // → prop type: boolean
```

### `numberProp(validator?: Validator)`

Allows any number (validated at runtime and compile time).

```ts
numberProp().optional
  // → prop type: number | undefined
numberProp().required
  // → prop type: number
numberProp().withDefault(3.1415)
  // → prop type: number
```

### `integerProp(validator?: Validator)`

Allows any integer (validated at runtime).

```ts
integerProp().optional
  // → prop type: number | undefined
integerProp().required
  // → prop type: number
integerProp().withDefault(42)
  // → prop type: number
```

### `symbolProp(validator?: Validator)`

Allows any symbol (validated at runtime and compile time).

```ts
symbolProp().optional
  // → prop type: symbol | undefined
symbolProp().required
  // → prop type: symbol
symbolProp().withDefault(Symbol('foo'))
  // → prop type: symbol
```

### `vueComponentProp(validator?: Validator)`

Allows any Vue component instance, name or options object. No built-in runtime validation is performed by default.

```ts
vueComponentProp().optional
  // → prop type: ComponentOptions<Vue> | VueConstructor<Vue> | string | undefined
vueComponentProp().required
  // → prop type: ComponentOptions<Vue> | VueConstructor<Vue> | string
vueComponentProp().withDefault('close-icon')
  // → prop type: ComponentOptions<Vue> | VueConstructor<Vue> | string
```

### `anyProp<T>(validator?: Validator)`

Allows any type. No built-in runtime validation is performed by default.  
Type parameter `T` can be used to restrict the type at compile time.

```ts
anyProp().optional
  // → prop type: any
anyProp().required
  // → prop type: any
anyProp().withDefault('foo')
  // → prop type: any

anyProp<string>().optional
  // → prop type: string | undefined
anyProp<string>().required
  // → prop type: string
anyProp<string>().withDefault('foo')
  // → prop type: string
```

### `arrayProp<T>(validator?: Validator)`

Allows any array. No further runtime validation is performed by default.  
Type parameter `T` can be used to restrict the type of the array items at compile time.

```ts
arrayProp().optional
  // → prop type: unknown[] | undefined
arrayProp().required
  // → prop type: unknown[]
arrayProp().withDefault(() => [])
  // → prop type: unknown[]

arrayProp<string>().optional
  // → prop type: string[] | undefined
arrayProp<string>().required
  // → prop type: string[]
arrayProp<string>().withDefault(() => ['foo', 'bar'])
  // → prop type: string[]
```

### `objectProp<T>(validator?: Validator)`

Allows any object. No further runtime validation is performed by default.  
Type parameter `T` can be used to restrict the type at compile time.

```ts
objectProp().optional
  // → prop type: object | undefined
objectProp().required
  // → prop type: object
objectProp().withDefault(() => ({}))
  // → prop type: object

interface User {
  name: string;
}

objectProp<User>().optional
  // → prop type: User | undefined
objectProp<User>().required
  // → prop type: User
objectProp<User>().withDefault(() => ({ name: 'John' }))
  // → prop type: User
```

### `functionProp<T>(validator?: Validator)`

Allows any function. No further runtime validation is performed by default.  
Type parameter `T` can be used to restrict the type to a specific function signature at compile time.

**Note:** There is no `.withDefault()` function for this prop type.

```ts
functionProp().optional
  // → prop type: Function | undefined
functionProp().required
  // → prop type: Function

type MyFunc = (a: number, b: string) => boolean;

functionProp<MyFunc>().optional
  // → prop type: MyFunc | undefined
functionProp<MyFunc>().required
  // → prop type: MyFunc
```

### `oneOfProp<T>(allowedValues: readonly any[], validator?: Validator)`

Allows any of the specified allowed values (validated at runtime and compile time).  
Type parameter `T` can be used to adjust the inferred type at compile time, this is usually not necessary.

**Note:** Proper type checking is only possible if the allowed values are readonly, usually through `as const`.

```ts
oneOfProp(['foo', 'bar'] as const).optional
  // → prop type: 'foo' | 'bar' | undefined
oneOfProp(['foo', 'bar'] as const).required
  // → prop type: 'foo' | 'bar'
oneOfProp(['foo', 'bar'] as const).withDefault('foo')
  // → prop type: 'foo' | 'bar'
```

### `oneOfObjectKeysProp<T>(object: object, validator?: Validator)`

Allows any of the keys of the specified object (validated at runtime and compile time).  
Type parameter `T` can be used to adjust the inferred type at compile time, this is usually not necessary.

```ts
oneOfObjectKeysProp({ foo: 1, bar: 2 }).optional
  // → prop type: 'foo' | 'bar' | undefined
oneOfObjectKeysProp({ foo: 1, bar: 2 }).required
  // → prop type: 'foo' | 'bar'
oneOfObjectKeysProp({ foo: 1, bar: 2 }).withDefault('foo')
  // → prop type: 'foo' | 'bar'
```

### `oneOfTypesProp<T>(type: PropType<T>, validator?: Validator)`

Allows any of the passed constructor types (validated at runtime).  
Type parameter `T` has to be used to adjust the type at compile time.

```ts
oneOfTypesProp<number | string>([Number, String]).optional
  // → prop type: string | number | undefined
oneOfTypesProp<number | string>([Number, String]).required
  // → prop type: string | number
oneOfTypesProp<number | string>([Number, String]).withDefault(42)
  // → prop type: string | number
```

### `instanceOfProp()`

Allows instances of the given constructor (validated at runtime and compile time).  
Type parameter `T` can be used to adjust the inferred type at compile time.

```ts
instanceOfProp(Date).optional
  // → prop type: Date | undefined
instanceOfProp(Date).required
  // → prop type: Date
instanceOfProp(Date).withDefault(() => new Date())
  // → prop type: Date
```

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md).

## Similar packages

* [vue-types](https://www.npmjs.com/package/vue-types/), which this project took heavy inspiration from
* [vue-prop](https://www.npmjs.com/package/vue-prop)
* [vuept](https://www.npmjs.com/package/vuept)

## License

Unless otherwise noted, all source code is licensed under the MIT License.  
Copyright (c) 2022 Flo Edelmann
