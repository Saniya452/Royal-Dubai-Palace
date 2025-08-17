import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Users, Star, Clock } from "lucide-react";
import { HeritageModal } from "@/components/HeritageModal";
import heroProperty from "@/assets/hero-property.jpg";

const About = () => {
  const [isHeritageModalOpen, setIsHeritageModalOpen] = useState(false);

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
                <Button 
                  variant="luxury" 
                  size="lg"
                  onClick={() => {
                    const heritageSection = document.getElementById('heritage-section');
                    heritageSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Discover Our Heritage
                </Button>
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

        {/* Heritage Section */}
        <section id="heritage-section" className="py-20 px-4 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Royal Heritage</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A legacy of excellence spanning nearly three decades in the heart of Dubai
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <div>
                <Card className="p-8 bg-gradient-card h-full">
                  <h3 className="text-2xl font-bold text-foreground mb-6">The Foundation Years</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Royal Dubai Palace was conceived in 1995 by visionary hotelier Ahmed Al-Maktoum, 
                      who dreamed of creating an oasis of luxury that would rival the world's finest hotels 
                      while celebrating the rich cultural heritage of the Arabian Peninsula.
                    </p>
                    <p>
                      The construction took four years, employing master craftsmen from across the Middle East 
                      to ensure every detail reflected the grandeur of traditional Arabian palaces while 
                      incorporating cutting-edge modern amenities.
                    </p>
                  </div>
                </Card>
              </div>
              
              <div>
                <Card className="p-8 bg-gradient-card h-full">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Architectural Marvel</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our 75-story tower stands as a testament to Dubai's architectural prowess, 
                      featuring a unique blend of contemporary design and traditional Islamic geometric patterns. 
                      The building's facade changes color with the desert sunset, creating a living work of art.
                    </p>
                    <p>
                      Each suite is positioned to maximize views of the Arabian Gulf, Dubai Marina, 
                      or the iconic cityscape, ensuring every guest enjoys breathtaking panoramas 
                      from their private sanctuary in the sky.
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 text-center bg-gradient-card">
                <div className="text-4xl font-bold text-accent mb-2">28</div>
                <div className="text-lg font-semibold text-foreground mb-2">Years of Excellence</div>
                <div className="text-sm text-muted-foreground">Serving distinguished guests since 1995</div>
              </Card>
              
              <Card className="p-6 text-center bg-gradient-card">
                <div className="text-4xl font-bold text-accent mb-2">150+</div>
                <div className="text-lg font-semibold text-foreground mb-2">International Awards</div>
                <div className="text-sm text-muted-foreground">Recognized globally for excellence</div>
              </Card>
              
              <Card className="p-6 text-center bg-gradient-card">
                <div className="text-4xl font-bold text-accent mb-2">2M+</div>
                <div className="text-lg font-semibold text-foreground mb-2">Royal Guests</div>
                <div className="text-sm text-muted-foreground">Creating unforgettable memories</div>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">The Royal Experience</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Legendary Service</h4>
                  <p className="text-muted-foreground mb-4">
                    Our service philosophy is rooted in the ancient Arabian tradition of hospitality, 
                    where guests are treated as honored family members. Every team member undergoes 
                    extensive training to anticipate and exceed your every expectation.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Personal butler service for all suites</li>
                    <li>• 24/7 multilingual concierge team</li>
                    <li>• Customized experiences tailored to your preferences</li>
                    <li>• Private shopping and dining arrangements</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Cultural Heritage</h4>
                  <p className="text-muted-foreground mb-4">
                    We proudly showcase the finest aspects of Emirati culture while embracing 
                    international sophistication. From our traditional majlis lounges to our 
                    contemporary art galleries, every space tells a story of Dubai's remarkable journey.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Private art collection featuring regional artists</li>
                    <li>• Traditional Arabian architectural elements</li>
                    <li>• Cultural immersion experiences</li>
                    <li>• Heritage storytelling sessions</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      
      <HeritageModal 
        isOpen={isHeritageModalOpen} 
        onClose={() => setIsHeritageModalOpen(false)} 
      />
    </div>
  );
};

export default About;