const some = <T>(value: T): Some<T> => new Some(value);

const nothing = <T>(): Nothing<T> => new Nothing<T>();

export { some, nothing };
export { Maybe } from "./maybe";
