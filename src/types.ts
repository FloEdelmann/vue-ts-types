export interface PropOptions<T> {
  type?: PropType<T>;
  required?: boolean;
  default?: T | (() => T | null | undefined) | null | undefined;
  validator?(value: T): boolean;
}

export type PropType<T> = PropConstructor<T> | PropConstructor<T>[];

export type PropConstructor<T> =
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  | { (): T }
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  | { new (...parameters: any[]): T & object };

export type RequiredPropOptions<T> = PropOptions<T> & { required: true };
export type DefaultPropOptions<T> = PropOptions<T> & { default: unknown };

export interface PropOptionsGenerator<T> {
  optional: PropOptions<T | undefined>;
  nullable: DefaultPropOptions<T | null>;
  withDefault: (defaultValue: OneOfDefaultType<T>) => DefaultPropOptions<T>;
  required: RequiredPropOptions<T>;
}

/** Allow simple values for primitive types, require generator function for complex types */
export type OneOfDefaultType<T> = T extends
  | boolean
  | number
  | string
  | symbol
  | null
  | undefined
  ? T
  : () => T;

export type Constructor = new (...parameters: any[]) => any;
