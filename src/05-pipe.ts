export declare function toUpperCase(s: string): string;
export declare function toChars(s: string): Array<string>;

// function composition in JS/TS
export const result1 = toChars(toUpperCase("foo"));

// function composition with `|>` ("pipe" operator, active proposal for JS)
/**
 * const result2 =
 *      "foo"
 *      |> toUpperCase
 *      |> toChars
 */

// `pipe` from fp-ts mimics `|>`
import { pipe } from "fp-ts/lib/pipeable";

export const result3 = pipe(
    "foo",
    toUpperCase,
    toChars
);


// function composition with `flow` from fp-ts

import { flow } from "fp-ts/lib/function";

export const f = flow(toUpperCase, toChars)
export const result4 = f("foo")