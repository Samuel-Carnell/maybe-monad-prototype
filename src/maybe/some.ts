import { Maybe } from "./maybe";

class Some<T> implements Maybe<T> {
  constructor(private readonly _value: T) {}

  map<V = T>(fn: (r: T) => V): Some<V> {
    return new Some(fn(this._value));
  }

  mergeMap<V>(fn: (r: T) => Maybe<V>): Maybe<V> {
    return fn(this._value);
  }

  merge<V>(this: Maybe<Maybe<V>>): Maybe<V> {
    return this.mergeMap((x) => x);
  }

  asyncMap<V>(fn: (r: T) => Promise<V>): Promise<Some<V>> {
    return fn(this._value).then((x) => new Some(x));
  }

  asyncMergeMap<V>(fn: (r: T) => Promise<Maybe<V>>): Promise<Maybe<V>> {
    return fn(this._value);
  }

  or(): Maybe<T> {
    return this;
  }

  value(): T {
    return this._value;
  }

  valueOr(): T {
    return this._value;
  }

  valueOrNull(): T {
    return this._value;
  }
}

export { Some };
