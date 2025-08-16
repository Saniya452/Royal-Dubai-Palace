import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Users, Star, Clock } from "lucide-react";
import heroProperty from "@/assets/hero-property.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-32 px-4 lg:px-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroProperty})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
          </div>
          
          <div className="relative z-10 container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              About Royal Dubai Palace
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A legacy of luxury hospitality in the heart of Dubai, where Arabian tradition meets contemporary elegance.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 1995, Royal Dubai Palace has been at the forefront of luxury hospitality in the UAE. 
                  Our commitment to excellence and authentic Arabian hospitality has made us a preferred destination 
                  for discerning travelers from around the world.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Located in the prestigious Downtown Dubai, we offer unparalleled access to the city's most iconic 
                  attractions while providing a serene oasis of luxury and comfort.
                </p>
                <Button variant="luxury" size="lg">Discover Our Heritage</Button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center bg-gradient-card">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">150+</h3>
                  <p className="text-muted-foreground">Awards Won</p>
                </Card>
                <Card className="p-6 text-center bg-gradient-card">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">2M+</h3>
                  <p className="text-muted-foreground">Happy Guests</p>
                </Card>
                <Card className="p-6 text-center bg-gradient-card">
                  <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">5-Star</h3>
                  <p className="text-muted-foreground">Rating</p>
                </Card>
                <Card className="p-6 text-center bg-gradient-card">
                  <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">28</h3>
                  <p className="text-muted-foreground">Years Legacy</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 lg:px-8 bg-secondary/20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 bg-gradient-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for perfection in every detail, ensuring our guests experience the finest in luxury hospitality.
                </p>
              </Card>
              <Card className="p-8 bg-gradient-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously evolving our services and amenities to exceed expectations and set new standards.
                </p>
              </Card>
              <Card className="p-8 bg-gradient-card">
                <h3 className="text-2xl font-bold text-foreground mb-4">Authenticity</h3>
                <p className="text-muted-foreground">
                  Preserving and celebrating the rich cultural heritage of Arabia while embracing modern luxury.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;