# vue-ts-types

> Lightweight TypeScript-first [Vue prop type](https://vuejs.org/guide/components/props.html#prop-validation) definitions

[![npm][badge-npm]][npm] [![GitHub][badge-github]][github] [![GitHub tests workflow][badge-actions]][actions]

[npm]: https://www.npmjs.com/package/vue-ts-types
[github]: https://github.com/FloEdelmann/vue-ts-types
[actions]: https://github.com/FloEdelmann/vue-ts-types/actions/workflows/test.yaml?query=branch%3Amain
[badge-npm]: https://img.shields.io/npm/v/vue-ts-types?logo=npm&logoColor=white&color=red
[badge-github]: https://img.shields.io/github/package-json/v/FloEdelmann/vue-ts-types?logo=github&color=blue
[badge-actions]: https://img.shields.io/github/actions/workflow/status/FloEdelmann/vue-ts-types/test.yaml?logo=github&label=Tests

## Example

```ts
import { defineComponent } from 'vue';
import {
  arrayProp,
  booleanProp,
  functionProp,
  isPositive,
  numberProp,
  oneOfProp,
  stringProp,
} from 'vue-ts-types';

defineComponent({
  props: {
    disabled: booleanProp().withDefault(false),
    // resulting prop type: boolean

    title: stringProp().optional,
    // resulting prop type: string | undefined

    description: stringProp().nullable,
    // resulting prop type: string | null

    items: arrayProp<string>().required,
    // resulting prop type: string[]

    callback: functionProp<() => void>().optional,
    // resulting prop type: (() => void) | undefined

    color: oneOfProp(['red', 'green', 'blue'] as const).withDefault('red'),
    // resulting prop type: 'red' | 'green' | 'blue'

    timeout: numberProp(isPositive).required,
    // resulting prop type: number
  },
});
```

## Motivation

<details>
<summary><strong>Prop declarations are verbose</strong></summary>

Declaring props is quite verbose, especially if you are using TypeScript and want to annotate more complex types (with `PropType`).

```ts
options: {
  type: Object as PropType<Options>,
  required: true,
}

// with vue-ts-types:
options: objectProp<Options>().required
```

</details>

<details>
<summary><strong>Annotating optional complex props is error-prone</strong></summary>

It's easy to forget using a union type with `undefined` or `null` when the prop is not required.

```ts
options: {
  type: Object as PropType<Options>, // wrong, it should be `Options | undefined`
  required: false,
}

// with vue-ts-types:
options: objectProp<Options>().optional // automatically typed as `Options | undefined`
```

</details>

<details>
<summary><strong>Specifying both <code>default</code> and <code>required</code> can be contradictory</strong></summary>

By specifying a prop's default value, the prop is automatically optional, even when `required` is set to `true`. See also the [`vue/no-required-prop-with-default` ESLint rule](https://eslint.vuejs.org/rules/no-required-prop-with-default.html).

```ts
disabled: {
  type: Boolean,
  required: true,
  default: false, // contradictory to `required: true`
}

// with vue-ts-types:
disabled: booleanProp().required // either required without default
disabled: booleanProp().withDefault(false) // or optional with default
```

</details>

<details>
<summary><strong>Custom validation errors are not helpful</strong></summary>

Since prop validators return only a boolean validation result, the reason why a value failed to validate is not printed in the console error.

```ts
age: {
  type: Number,
  required: true,
  validator: (age: unknown) => {
    return typeof age === 'number' && Number.isInteger(age) && age >= 18
  },
}

// with vue-ts-types:
age: integerProp((age: unknown) => {
  if (typeof age !== 'number' || age < 18) {
    return 'age should be a number of at least 18'
  }
  return undefined
}).required
```

</details>

## Installation

```bash
npm install vue-ts-types
```

`vue-ts-types` has no dependencies and is tested to be compatible with [Vue.js](https://vuejs.org/) `v2.6`, `v2.7` and `v3.2`.

## Usage

Each of the prop functions returns an object with the following properties:

- `.optional`: Use this to mark the prop as not required with a default value of `undefined`. Also includes `undefined` in the resulting prop type.
- `.nullable`: Use this to mark the prop as not required with a default value of `null`. Also includes `null` in the resulting prop type.
- `.required`: Use this to mark the prop as required without a default value.
- `.withDefault(value)`: Use this to set a default value for the prop. Note that the value has to fit the prop type. For non-primitive types, the value has to be a function that returns the default value.

> ℹ️ **Note:**  
> Due to the way Vue props work, a prop's default value will only be used when passing `undefined`, not for `null`.  
> See [issue #3135 in vuejs/vue](https://github.com/vuejs/vue/issues/3135).

### Custom validator functions

Custom validator functions can be passed to any of the prop types. They are called with the value of the prop (type `unknown`) and should return a validation error message, or undefined if the value is valid. Validator functions do not influence type inference.

```ts
import { numberProp } from 'vue-ts-types';

type Validator = (value: unknown) => string | undefined;

const isPositive: Validator = (value) => {
  if (typeof value !== 'number' || value <= 0 || Number.isNaN(value)) {
    return 'value should be a positive number';
  }
  return undefined;
};

numberProp(isPositive).optional;
// → prop type: number | undefined
```

For convenience, some common validator functions are included in the library and can be imported just like prop types:

- `isNegative`: only allows negative numbers (`< 0`)
- `isPositive`: only allows positive numbers (`> 0`)
- `isNonNegative`: only allows non-negative numbers (`>= 0`)
- `isNonPositive`: only allows non-positive numbers (`<= 0`)

### `stringProp<T>(validator?: Validator)`

Allows any string. No further runtime validation is performed by default.  
Type parameter `T` can be used to restrict the type at compile time with a union type. (Consider using [`oneOfProp`](#oneofproptallowedvalues-readonly-any-validator-validator) in this case.)

```ts
stringProp().optional;
// → prop type: string | undefined
stringProp().nullable;
// → prop type: string | null
stringProp().required;
// → prop type: string
stringProp().withDefault('foo');
// → prop type: string

type Foo = 'a' | 'b' | 'c';

stringProp<Foo>().optional;
// → prop type: Foo | undefined
stringProp<Foo>().nullable;
// → prop type: Foo | null
stringProp<Foo>().required;
// → prop type: Foo
stringProp<Foo>().withDefault('a');
// → prop type: Foo
```

### `booleanProp(validator?: Validator)`

Allows any boolean (validated at runtime and compile time).

```ts
booleanProp().optional;
// → prop type: boolean | undefined
booleanProp().nullable;
// → prop type: boolean | null
booleanProp().required;
// → prop type: boolean
booleanProp().withDefault(false);
// → prop type: boolean
```

### `numberProp<T>(validator?: Validator)`

Allows any number (validated at runtime and compile time).
Type parameter `T` can be used to restrict the type at compile time with a union type. (Consider using [`oneOfProp`](#oneofproptallowedvalues-readonly-any-validator-validator) in this case.)

```ts
numberProp().optional;
// → prop type: number | undefined
numberProp().nullable;
// → prop type: number | null
numberProp().required;
// → prop type: number
numberProp().withDefault(3.1415);
// → prop type: number

type Foo = 1 | 2 | 3;

numberProp<Foo>().optional;
// → prop type: Foo | undefined
numberProp<Foo>().nullable;
// → prop type: Foo | null
numberProp<Foo>().required;
// → prop type: Foo
numberProp<Foo>().withDefault(1);
// → prop type: Foo
```

### `integerProp(validator?: Validator)`

Allows any integer (validated at runtime).

```ts
integerProp().optional;
// → prop type: number | undefined
integerProp().nullable;
// → prop type: number | null
integerProp().required;
// → prop type: number
integerProp().withDefault(42);
// → prop type: number
```

### `symbolProp(validator?: Validator)`

Allows any symbol (validated at runtime and compile time).

```ts
symbolProp().optional;
// → prop type: symbol | undefined
symbolProp().nullable;
// → prop type: symbol | null
symbolProp().required;
// → prop type: symbol
symbolProp().withDefault(Symbol('foo'));
// → prop type: symbol
```

### `vueComponentProp(validator?: Validator)`

Allows any Vue component instance, name or options object. No built-in runtime validation is performed by default.

```ts
vueComponentProp().optional;
// → prop type: VueComponent | undefined
vueComponentProp().nullable;
// → prop type: VueComponent | null
vueComponentProp().required;
// → prop type: VueComponent
vueComponentProp().withDefault('close-icon');
// → prop type: VueComponent
```

> ℹ️ **Note:**  
> The type `VueComponent` is defined to be `object | string`. It has to be so broad to allow Vue 2 and Vue 3 component options or instances.
> If you are able to narrow the type without pulling in heavy dependencies, please open an issue or pull request!

### `anyProp<T>(validator?: Validator)`

Allows any type. No built-in runtime validation is performed by default.  
Type parameter `T` can be used to restrict the type at compile time.

```ts
anyProp().optional;
// → prop type: any
anyProp().nullable;
// → prop type: any
anyProp().required;
// → prop type: any
anyProp().withDefault('foo');
// → prop type: any

anyProp<string>().optional;
// → prop type: string | undefined
anyProp<string>().nullable;
// → prop type: string | null
anyProp<string>().required;
// → prop type: string
anyProp<string>().withDefault('foo');
// → prop type: string
```

### `arrayProp<T>(validator?: Validator)`

Allows any array. No further runtime validation is performed by default.  
Type parameter `T` can be used to restrict the type of the array items at compile time.

```ts
arrayProp().optional;
// → prop type: unknown[] | undefined
arrayProp().nullable;
// → prop type: unknown[] | null
arrayProp().required;
// → prop type: unknown[]
arrayProp().withDefault(() => []);
// → prop type: unknown[]

arrayProp<string>().optional;
// → prop type: string[] | undefined
arrayProp<string>().nullable;
// → prop type: string[] | null
arrayProp<string>().required;
// → prop type: string[]
arrayProp<string>().withDefault(() => ['foo', 'bar']);
// → prop type: string[]
```

### `objectProp<T>(validator?: Validator)`

Allows any object. No further runtime validation is performed by default.  
Type parameter `T` can be used to restrict the type at compile time.

```ts
objectProp().optional;
// → prop type: object | undefined
objectProp().nullable;
// → prop type: object | null
objectProp().required;
// → prop type: object
objectProp().withDefault(() => ({}));
// → prop type: object

interface User {
  name: string;
}

objectProp<User>().optional;
// → prop type: User | undefined
objectProp<User>().nullable;
// → prop type: User | null
objectProp<User>().required;
// → prop type: User
objectProp<User>().withDefault(() => ({ name: 'John' }));
// → prop type: User
```

### `functionProp<T>(validator?: Validator)`

Allows any function. No further runtime validation is performed by default.  
Type parameter `T` can be used to restrict the type to a specific function signature at compile time.

> ℹ️ **Note:**  
> There is no `.withDefault()` function for this prop type.

```ts
functionProp().optional;
// → prop type: Function | undefined
functionProp().nullable;
// → prop type: Function | null
functionProp().required;
// → prop type: Function

type MyFunc = (a: number, b: string) => boolean;

functionProp<MyFunc>().optional;
// → prop type: MyFunc | undefined
functionProp<MyFunc>().nullable;
// → prop type: MyFunc | null
functionProp<MyFunc>().required;
// → prop type: MyFunc
```

### `oneOfProp<T>(allowedValues: readonly any[], validator?: Validator)`

Allows any of the specified allowed values (validated at runtime and compile time).  
Type parameter `T` can be used to adjust the inferred type at compile time, this is usually not necessary.

> ℹ️ **Note:**  
> Proper type checking is only possible if the allowed values are readonly, usually through `as const`.

```ts
oneOfProp(['foo', 'bar'] as const).optional;
// → prop type: 'foo' | 'bar' | undefined
oneOfProp(['foo', 'bar'] as const).nullable;
// → prop type: 'foo' | 'bar' | null
oneOfProp(['foo', 'bar'] as const).required;
// → prop type: 'foo' | 'bar'
oneOfProp(['foo', 'bar'] as const).withDefault('foo');
// → prop type: 'foo' | 'bar'
```

### `oneOfObjectKeysProp<T>(object: object, validator?: Validator)`

Allows any of the keys of the specified object (validated at runtime and compile time).  
Type parameter `T` can be used to adjust the inferred type at compile time, this is usually not necessary.

```ts
oneOfObjectKeysProp({ foo: 1, bar: 2 }).optional;
// → prop type: 'foo' | 'bar' | undefined
oneOfObjectKeysProp({ foo: 1, bar: 2 }).nullable;
// → prop type: 'foo' | 'bar' | null
oneOfObjectKeysProp({ foo: 1, bar: 2 }).required;
// → prop type: 'foo' | 'bar'
oneOfObjectKeysProp({ foo: 1, bar: 2 }).withDefault('foo');
// → prop type: 'foo' | 'bar'
```

### `oneOfTypesProp<T>(type: PropType<T>, validator?: Validator)`

Allows any of the passed constructor types (validated at runtime).  
Type parameter `T` has to be used to adjust the type at compile time.

```ts
oneOfTypesProp<number | string>([Number, String]).optional;
// → prop type: string | number | undefined
oneOfTypesProp<number | string>([Number, String]).nullable;
// → prop type: string | number | null
oneOfTypesProp<number | string>([Number, String]).required;
// → prop type: string | number
oneOfTypesProp<number | string>([Number, String]).withDefault(42);
// → prop type: string | number
```

### `instanceOfProp<T>(parent: T, validator?: Validator)`

Allows instances of the given constructor (validated at runtime and compile time).  
Type parameter `T` can be used to adjust the inferred type at compile time.

```ts
instanceOfProp(Date).optional;
// → prop type: Date | undefined
instanceOfProp(Date).nullable;
// → prop type: Date | null
instanceOfProp(Date).required;
// → prop type: Date
instanceOfProp(Date).withDefault(() => new Date());
// → prop type: Date
```

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md).

## Similar packages

- [vue-types](https://www.npmjs.com/package/vue-types/), which this project took heavy inspiration from
- [vue-prop](https://www.npmjs.com/package/vue-prop)
- [vuept](https://www.npmjs.com/package/vuept)

## License

Unless otherwise noted, all source code is licensed under the MIT License.  
Copyright (c) 2022 Flo Edelmann
