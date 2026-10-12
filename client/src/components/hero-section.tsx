import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-accent/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Tired of Buffering?
                <span className="gradient-text block">
                  Your Uncapped 5G is Here
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stop waiting and start streaming. Get the speed you need for the
                whole family with our
                <span className="font-semibold text-foreground">
                  {" "}
                  20Mbps 5G Uncapped
                </span>{" "}
                plan. Finally, internet that just works — uncapped data, no
                surprise fees.
              </p>
            </div>

            {/* Pricing Card */}
            <Card className="shadow-lg" data-testid="pricing-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-baseline space-x-2">
                  <span
                    className="text-3xl font-bold gradient-text"
                    data-testid="setup-price"
                  >
                    R699
                  </span>
                  <span className="text-muted-foreground">
                    Activation & first month (router is free to use)
                  </span>
                </div>
                <div
                  className="text-sm text-muted-foreground bg-accent px-3 py-1 rounded-full inline-block"
                  data-testid="promo-text"
                >
                  First month included!
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-baseline space-x-2">
                    <span
                      className="text-3xl font-bold gradient-text"
                      data-testid="monthly-price"
                    >
                      R399
                    </span>
                    <span className="text-muted-foreground">
                      monthly subscription. No usage charges.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Urgency Banner */}
            <div
              className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4"
              data-testid="urgency-banner"
            >
              <div className="flex items-center space-x-3">
                <div className="text-orange-600 pulse-animation">
                  <span className="text-xl">🔥</span>
                </div>
                <div className="text-orange-800 font-semibold">
                  ⚡ Special introductory offer! Order yours while stocks last!
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <a href="https://portal.umoja.network/sign-up/2c4c2135bf4eca29">
                <Button
                  className="gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 hover-lift"
                  size="lg"
                  data-testid="button-check-coverage"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Apply Now
                </Button>
              </a>
            </div>
          </div>

          {/* Product Image Column */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <img
                src="/assets/product.avif"
                alt="Umoja 5G Router"
                className="rounded-2xl shadow-2xl hover-lift w-full"
                data-testid="hero-router-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
