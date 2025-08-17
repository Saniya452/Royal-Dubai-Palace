import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Video, Mail, MapPin, Clock } from "lucide-react";
import { QuickBookingModal } from "@/components/QuickBookingModal";
import heroProperty from "@/assets/hero-property.jpg";

const Contact = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

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
          
          <div className="relative z-10 container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                  Easy to Contact us.
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Is there a problem finding your dream room? Need a guide in booking first room? 
                  or need a consultation on hospitality issues? Just contact us.
                </p>
                
                {/* Contact Options Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 bg-gradient-card border-accent/20 hover:border-accent/50 transition-all cursor-pointer">
                    <Phone className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Call</h3>
                    <p className="text-sm text-muted-foreground mb-3">+971-4-123-4567</p>
                    <Button variant="outline" size="sm" className="w-full">Call Now</Button>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-card border-accent/20 hover:border-accent/50 transition-all cursor-pointer">
                    <MessageCircle className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Chat</h3>
                    <p className="text-sm text-muted-foreground mb-3">Live Support 24/7</p>
                    <Button variant="outline" size="sm" className="w-full">Chat Now</Button>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-card border-accent/20 hover:border-accent/50 transition-all cursor-pointer">
                    <Video className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Video Call</h3>
                    <p className="text-sm text-muted-foreground mb-3">Virtual Tour Available</p>
                    <Button variant="outline" size="sm" className="w-full">Video Call Now</Button>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-card border-accent/20 hover:border-accent/50 transition-all cursor-pointer">
                    <Mail className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Message</h3>
                    <p className="text-sm text-muted-foreground mb-3">info@royaldubai.com</p>
                    <Button variant="outline" size="sm" className="w-full">Message Now</Button>
                  </Card>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={heroProperty} 
                  alt="Royal Dubai Palace"
                  className="w-full rounded-lg shadow-luxury"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Location & Hours */}
        <section className="py-20 px-4 lg:px-8 bg-secondary/20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <Card className="p-8 bg-gradient-card">
                <MapPin className="h-12 w-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Location</h3>
                <p className="text-muted-foreground mb-6">
                  Downtown Dubai, Burj Khalifa District<br />
                  Sheikh Mohammed bin Rashid Boulevard<br />
                  Dubai, United Arab Emirates
                </p>
                <Button variant="luxury">Get Directions</Button>
              </Card>
              
              <Card className="p-8 bg-gradient-card">
                <Clock className="h-12 w-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Reception Hours</h3>
                <div className="space-y-2 text-muted-foreground mb-6">
                  <p>Monday - Sunday: 24/7</p>
                  <p>Concierge: 24/7</p>
                  <p>Room Service: 24/7</p>
                  <p>Spa: 6:00 AM - 11:00 PM</p>
                </div>
                <Button 
                  variant="luxury"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Book Now
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <QuickBookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
};

export default Contact;