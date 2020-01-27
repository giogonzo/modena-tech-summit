import { SubscriptionStatus, Business } from "./03-sum";

// Discriminated Unions https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
// TS will help always handling all the possible cases
// (remove one `case` and get an error)

export function shouldBeRetargeted(status: SubscriptionStatus): boolean {
  switch (status.type) {
    case "Business":
      return status.paymentMode === "Credit";
    case "Solo":
      return true;
    case "NotVerified":
      return false;
  }
}

// `switch` is fine, but not an expression - cumbersome to rewrite multiple times, and can't be used inline
// Let's write our `fold` function

// usage:

declare const myStatus: SubscriptionStatus;

export const badgeWidth = foldSubscriptionStatus(
  myStatus,
  () => 1,
  () => 2,
  paymentMode => paymentMode.length
);

// A possible `fold` signature:

declare function foldSubscriptionStatus<T>(
  status: SubscriptionStatus,
  onNotVerified: () => T,
  onSolo: () => T,
  onBusiness: (paymentMode: Business["paymentMode"]) => T
): T;
