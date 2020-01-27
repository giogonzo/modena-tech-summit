import { pipe } from "fp-ts/lib/pipeable";
import * as O from "fp-ts/lib/Option";
import { parseInt2 } from "./06-option";

export const result1: number = pipe(
  "not number",
  parseInt2,
  O.map(n => n * 2),
  O.getOrElse(() => 0)
);

import * as E from "fp-ts/lib/Either";

export declare function parseInt3(
  s: string
): E.Either<"Invalid" | "TooMuch", number>;

export const result2: number = pipe(
  "not number",
  parseInt3,
  E.map(n => n * 2),
  E.getOrElse(() => 0)
);
