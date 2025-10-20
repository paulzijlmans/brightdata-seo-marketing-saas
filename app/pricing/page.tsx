import { PricingTable } from "@clerk/nextjs";

export default function PricingPage() {
  return (
    <div>
      PricingPage
      <PricingTable newSubscriptionRedirectUrl="/dashboard" />
    </div>
  );
}
