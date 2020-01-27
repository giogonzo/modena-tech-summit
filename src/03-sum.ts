// A `User` can subscribe by providing an `email`
// In order to be able to access the service, her email must be verified first
// The "solo" plan is completely free
// The "Business" plan costs money, so any "Business" `User` should have selected a payment mode

export interface NotVerified {
  // # = 1
  type: "NotVerified";
}

export interface Solo {
  // # = 1
  type: "Solo";
}

export interface Business {
  // # = 2
  type: "Business";
  paymentMode: "Cash" | "Credit";
}

export type SubscriptionStatus = NotVerified | Solo | Business;

// 1 + 1 + 2 = 4 possible states
// and all of them are legit

// $ExpectError
export const impossibleStatus: SubscriptionStatus = {
  type: "Business"
};
