import { Card, CardContent } from "@/components/ui/card";
import { Play, Users, Wallet, BatteryCharging } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Play,
      title: "Stream Without Limits",
      description: "Enjoy smooth, buffer-free streaming on Netflix, YouTube, and more, even in HD. Perfect for movie nights with the family!"
    },
    {
      icon: Users,
      title: "Connect the Whole Family",
      description: "Our 20Mbps speed is optimized for multiple devices. Everyone can browse, study, and game at the same time."
    },
    {
      icon: Wallet,
      title: "Simple, Honest Pricing",
      description: "Simple monthly subscription, not pay-as-you-use. Free-to-use router with no hidden costs or usage charges. You're in control."
    },
    {
      icon: BatteryCharging,
      title: "Load Shedding Ready",
      description: "Your router has a built-in battery backup that keeps you connected automatically when the power goes out — no extra equipment or setup required."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" data-testid="benefits-title">Everything You Need, Nothing You Don't</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="benefits-subtitle">
            Experience the freedom of unlimited 5G internet designed for South African families
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="feature-card bg-card rounded-xl hover-lift"
              data-testid={`benefit-card-${index}`}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4" data-testid={`benefit-title-${index}`}>
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`benefit-description-${index}`}>
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
