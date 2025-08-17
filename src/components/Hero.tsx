import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { VideoModal } from "@/components/VideoModal";
import heroProperty from "@/assets/hero-property.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroProperty})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95 dark:from-background/90 dark:via-background/70 dark:to-background/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight">
            Royal Dubai
            <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Palace
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the pinnacle of luxury hospitality in the heart of Dubai. Where Arabian elegance meets modern sophistication.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/booking">
              <Button variant="luxury" size="lg" className="min-w-[200px]">
                Book Your Stay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[200px]"
              onClick={() => setIsVideoOpen(true)}
            >
              <Play className="mr-2 h-5 w-5" />
              Virtual Tour
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">150+</div>
              <div className="text-sm text-muted-foreground">Luxury Suites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">28</div>
              <div className="text-sm text-muted-foreground">Years Legacy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">5★</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>
      </div>
      
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
};