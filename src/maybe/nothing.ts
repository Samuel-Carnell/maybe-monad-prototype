import { Maybe } from "./maybe";

class Nothing<T> implements Maybe<T> {
  map<V = T>(): Maybe<V> {
    return new Nothing<V>();
  }

  merge<V>(this: Maybe<Maybe<V>>): Nothing<V> {
    return new Nothing<V>();
  }

  asyncMap<V>(fn: (r: T) => Promise<V>): Promise<Nothing<V>> {
    return Promise.resolve(new Nothing<V>());
  }

  mergeMap<V>(): Maybe<V> {
    return new Nothing<V>();
  }

  asyncMergeMap<V>(fn: (r: T) => Promise<Maybe<V>>): Promise<Nothing<V>> {
    return Promise.resolve(new Nothing<V>());
  }

  or<V>(x: Maybe<V>): Maybe<V> {
    return x;
  }

  value(): never {
    throw new Error("No value to return");
  }

  valueOr<V>(x: V): V {
    return x;
  }

  valueOrNull(): null {
    return null;
  }
}

export { Nothing };
