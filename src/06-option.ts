import { pipe } from "fp-ts/lib/pipeable";
import * as O from "fp-ts/lib/Option";
import { toUpperCase, toChars } from "./05-pipe";
import { identity } from "fp-ts/lib/function";

export function parseInt2(s: string): O.Option<number> {
  const parsed = parseInt(s);
  return isNaN(parsed) ? O.none : O.some(parsed);
}

// note: same as `import { head } from 'fp-ts/lib/Array'`
export function head<A>(as: Array<A>): O.Option<A> {
  return as.length >= 1 ? O.some(as[0]) : O.none;
}

// example of "functional error handling"
// using `pipe` and `Option`

type User = {
  firstName: string;
  lastName: string;
};
declare const ranking: Array<User>;

export const winner1 = pipe(
  ranking,
  head,
  O.fold(
    () => "Everybody wins!",
    user => `${user.firstName} ${user.lastName}`
  )
);

declare function displayName(user: User): string;

export const winner2 = pipe(
  ranking,
  head,
  O.fold(() => "Everybody wins!", displayName)
);

export const winner3 = pipe(
  ranking,
  head,
  O.map(displayName),
  O.getOrElse(() => "Everybody wins!")
);

declare const possiblyNull: string | null | undefined;

export const chars: Array<string> = pipe(
  possiblyNull,
  O.fromNullable,
  O.map(toUpperCase),
  O.map(toChars),
  O.fold(() => [], identity) // same as O.getOrElse(() => [])
);
