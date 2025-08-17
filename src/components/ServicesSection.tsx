import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Dumbbell, Car, Wifi, Waves, Coffee, Sparkles, Shield } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Utensils,
      title: "World-Class Dining",
      description: "Five award-winning restaurants featuring international cuisine and traditional Arabian delicacies.",
      features: ["Michelin-starred chefs", "24/7 room service", "Private dining"]
    },
    {
      icon: Dumbbell,
      title: "Royal Spa & Fitness",
      description: "State-of-the-art wellness facilities with traditional hammam and modern treatments.",
      features: ["25m infinity pool", "Personal trainers", "Spa treatments"]
    },
    {
      icon: Car,
      title: "Luxury Transportation",
      description: "Premium fleet of vehicles including Rolls-Royce and helicopter transfers.",
      features: ["Airport pickup", "City tours", "Helicopter rides"]
    },
    {
      icon: Sparkles,
      title: "Concierge Services",
      description: "24/7 dedicated concierge team to fulfill your every request and desire.",
      features: ["Personal shopping", "Event planning", "VIP access"]
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-8 bg-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Luxury Services & Amenities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience unparalleled service and world-class amenities designed to exceed your expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-6 bg-gradient-card hover:shadow-card transition-all duration-300 hover:scale-105">
              <service.icon className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-8 bg-gradient-card col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              <Shield className="h-12 w-12 text-accent mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-foreground">Health & Safety</h3>
                <p className="text-muted-foreground">Your wellbeing is our priority</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Safety Protocols</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• 24/7 security surveillance</li>
                  <li>• Advanced air filtration</li>
                  <li>• Contactless check-in</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Health Services</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• On-site medical center</li>
                  <li>• Wellness consultations</li>
                  <li>• Emergency response</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-card text-center">
            <Wifi className="h-16 w-16 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Stay Connected</h3>
            <p className="text-muted-foreground mb-6">
              Complimentary high-speed WiFi throughout the hotel
            </p>
            <Button variant="luxury" className="w-full">
              Learn More
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};