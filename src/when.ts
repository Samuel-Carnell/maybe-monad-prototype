import * as Maybe from "./maybe";

type GuardedType<T> = T extends (x: any) => x is infer U ? U : never;

const ifElse = <S, U, V, P extends (x: S) => boolean>(
  predicate: P,
  _then: (x: GuardedType<P>) => U,
  _else: (x: S) => V
) => {
  return (x) => (predicate(x) ? _then(x) : _else(x));
};

export const when = <T, V extends T>(
  predicate: (x: T) => x is V
): ((x: T) => Maybe<V>) => {
  return ifElse<T, Some<V>, Nothing<V>, (x: T) => x is V>(
    predicate,
    Maybe.some,
    Maybe.nothing
  );
};

export const whenNotEmpty = <T extends any[] | string>(x: T) =>
  when((x: T): x is T => x.length > 0)(x);

export const whenNumber = when(
  (x: unknown): x is Number => typeof x === "number"
);

export const whenNotNil = <T>(x: T) =>
  when<T, Exclude<T, undefined>>(
    (x): x is Exclude<T, undefined> => x !== undefined && x !== null
  )(x);

const test: string | undefined = "value";
