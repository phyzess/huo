type Nullable<T> = T | null;

type UndefinedAble<T> = T | undefined;

type UndefinedNullable<T> = T | undefined | null;

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

type ValueOf<T> = T[keyof T];

type PartialRecord<K extends string | number | symbol, T> = { [P in K]?: T };

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

export type { Nullable, PartialRecord, RecursivePartial, UndefinedAble, UndefinedNullable, ValueOf, XOR };
