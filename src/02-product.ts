// A `User` can subscribe by providing an `email`
// In order to be able to access the service, her email must be verified first
// The "solo" plan is completely free
// The "Business" plan costs money, so any "Business" `User` should have selected a payment mode

export type SubscriptionStatus = {
  emailVerified: boolean; // # = 2
  subscriptionTier: "Solo" | "Business"; // # = 2
  paymentMode?: "Cash" | "Credit"; // # = 3
};

// 2 * 2 * 3 = 12 possible states
// but some should not be possible, e.g.

export const impossibleStatus: SubscriptionStatus = {
  emailVerified: false,
  subscriptionTier: "Business",
  paymentMode: undefined
};
