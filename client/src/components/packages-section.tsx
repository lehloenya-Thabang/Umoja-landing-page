import { Check } from "lucide-react";

const plans = [
  {
    label: "Starter",
    speed: "20Mbps",
    price: "399",
    description: "Perfect for HD streaming, web browsing and working from home.",
    features: [
      "100% uncapped data",
      "Plug-and-play 5G router",
      "Month-to-month flexibility",
    ],
  },
  {
    label: "Family choice",
    speed: "30Mbps",
    price: "499",
    description: "Optimised for 4–6 devices, uninterrupted 4K video and low-ping gaming.",
    features: [
      "100% uncapped with low latency",
      "Upgraded 5G super router",
      "Priority technical support",
    ],
  },
  {
    label: "Power user",
    speed: "50Mbps",
    price: "549",
    description: "For simultaneous 4K streams, bandwidth-heavy homes and home offices.",
    features: [
      "Up to 50Mbps download speed",
      "Multi-device 4K streaming",
      "Uncapped monthly data",
    ],
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="packages-section scroll-mt-20">
      <div className="site-container">
        <div className="section-heading mx-auto text-center">
          <div className="eyebrow">Popular plans at a glance</div>
          <h2>Simple, transparent 5G plans</h2>
          <p>
            Uncapped high-speed internet on your terms. No long contracts, no
            surprise usage charges, and an Umoja router included free to use.
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <article
              key={plan.speed}
              className="plan-card"
              data-testid={`plan-${plan.speed.toLowerCase()}`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="plan-label">{plan.label}</span>
                <span className="availability"><span aria-hidden="true" />Available</span>
              </div>

              <h3>{plan.speed} Uncapped</h3>
              <p className="plan-description">{plan.description}</p>

              <div className="plan-price" aria-label={`R${plan.price} per month`}>
                <span className="currency">R</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/ month</span>
              </div>
              <p className="activation-note">R300 activation • First month included</p>

              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="check-icon"><Check aria-hidden="true" /></span>
                    {feature}
                  </li>
                ))}
              </ul>

            </article>
          ))}
        </div>

        <p className="plans-footnote">All prices include 15% VAT.</p>
      </div>
    </section>
  );
}
