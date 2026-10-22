import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const applicationUrl = "https://portal.umoja.network/sign-up/2c4c2135bf4eca29";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="site-container relative">
        <div className="hero-grid">
          {/* Content Column */}
          <div className="hero-copy">
            <div className="eyebrow">Fast internet. Fair monthly pricing.</div>
            <div className="space-y-5">
              <h1>
                Tired of buffering?
                <span>Your uncapped 5G is here.</span>
              </h1>
              <p className="hero-description">
                Stop waiting and start streaming. Get the speed you need for the
                whole family with plans from <strong>20Mbps 5G Uncapped</strong>.
                Finally, internet that just works — uncapped data and no surprise
                usage fees.
              </p>
            </div>

            {/* Urgency Banner */}
            <div
              className="offer-notice"
              data-testid="urgency-banner"
            >
              <span className="text-xl" aria-hidden="true">🔥⚡</span>
              <span>Special introductory offer — order while stocks last.</span>
            </div>

            <div className="hero-actions">
              <a href={applicationUrl}>
                <Button
                  className="primary-cta"
                  size="lg"
                  data-testid="button-check-coverage"
                >
                  Apply Now
                </Button>
              </a>
              <a className="secondary-cta" href="#packages">
                Explore 5G plans
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Product Image Column */}
          <div className="hero-visual-old">
            <div className="relative max-w-md mx-auto">
              <img
                src="/assets/product.avif"
                alt="Umoja 5G Router"
                width="480"
                height="480"
                fetchPriority="high"
                decoding="async"
                className="router-image-old"
                data-testid="hero-router-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
