interface PropOptions<T> {
  type?: PropType<T>;
  required?: boolean;
  default?: T | (() => T | null | undefined) | null | undefined;
  validator?(value: T): boolean;
}

export type PropType<T> = PropConstructor<T> | PropConstructor<T>[]

export type PropConstructor<T> =
  | { (): T }
  | { new(...parameters: any[]): T & object }
  // eslint-disable-next-line @typescript-eslint/ban-types
  | { new(...parameters: string[]): Function }


export type RequiredPropOptions<T> = PropOptions<T> & { required: true }
export type DefaultPropOptions<T> = PropOptions<T> & { default: unknown }

export interface PropOptionsGenerator<T> {
  optional: DefaultPropOptions<T | undefined>;
  withDefault: (defaultValue: OneOfDefaultType<T>) => DefaultPropOptions<T>;
  required: RequiredPropOptions<T>;
}

/** Allow simple values for primitive types, require generator function for complex types */
export type OneOfDefaultType<T> = T extends boolean | number | string | symbol | null | undefined ? T : (() => T)

export type Constructor = new (...parameters: any[]) => any
