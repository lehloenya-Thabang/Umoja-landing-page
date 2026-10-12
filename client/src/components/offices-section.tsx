import { Card, CardContent } from "@/components/ui/card";
import { Building, MapPin, Home } from "lucide-react";

export default function OfficesSection() {
  const offices = [
    {
      icon: Building,
      title: "National Hub",
      description: "2nd floor, Northcliff Junction, 159 Beyers Naude Drive, Johannesburg, Gauteng, 2115"
    },
    {
      icon: MapPin,
      title: "Limpopo",
      description: "House Number 3 Carlu Park, 6 Kirieklaper Avenue, Polokwane"
    },
    {
      icon: Home,
      title: "Lenasia",
      description: "11 Corona Street, Lenasia Extension 9, Gauteng, 1821"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Our Network</div>
          <h2 className="text-4xl font-bold mb-6" data-testid="offices-title">Our Regional Offices</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="offices-subtitle">
            With a strong local presence, we are committed to providing exceptional service and support 
            across South Africa's major provinces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <Card 
              key={index}
              className="feature-card shadow-lg hover-lift"
              data-testid={`office-card-${index}`}
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <office.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 gradient-text" data-testid={`office-title-${index}`}>
                  {office.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`office-description-${index}`}>
                  {office.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
