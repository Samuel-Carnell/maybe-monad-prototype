interface Maybe<T> {
  merge<V>(this: Maybe<Maybe<V>>): Maybe<V>;
  map<V = T>(fn: (r: T) => V): Maybe<V>;
  asyncMap<V>(fn: (r: T) => Promise<V>): Promise<Maybe<V>>;
  mergeMap<V>(fn: (r: T) => Maybe<V>): Maybe<V>;
  asyncMergeMap<V>(fn: (r: T) => Promise<Maybe<V>>): Promise<Maybe<V>>;
  or<V>(x: Maybe<V>): Maybe<V | T>;
  value(): T;
  valueOr<V>(x: V): T | V;
  valueOrNull(): T | null;
}

export type { Maybe };
