import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Users, Square, Wifi, Car, Coffee, Utensils, Dumbbell, Heart, Calendar } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import suite1 from "@/assets/property-1.jpg";
import suite2 from "@/assets/property-2.jpg";
import suite3 from "@/assets/property-3.jpg";

const suiteData = {
  "1": {
    id: 1,
    image: suite1,
    title: "Presidential Suite",
    location: "65th Floor",
    price: "$5,000",
    area: "2,500 sqft",
    guests: 4,
    amenities: ["Private terrace", "Butler service", "Jacuzzi", "Wine cellar", "Private elevator"],
    tag: "Premium",
    description: "The epitome of luxury living, our Presidential Suite offers unparalleled comfort and breathtaking panoramic views of Dubai's skyline and the Arabian Gulf.",
    features: [
      "Master bedroom with king-size bed",
      "Separate living and dining areas",
      "Marble bathroom with jetted tub",
      "Private office space",
      "24/7 butler service"
    ]
  },
  "2": {
    id: 2,
    image: suite2,
    title: "Royal Ocean Suite",
    location: "55th Floor",
    price: "$3,500",
    area: "1,800 sqft",
    guests: 3,
    amenities: ["Ocean view", "Private pool", "Spa access", "Balcony terrace", "Premium minibar"],
    tag: "Luxury",
    description: "Immerse yourself in oceanic tranquility with spectacular Arabian Gulf views and exclusive amenities.",
    features: [
      "Floor-to-ceiling windows",
      "Private infinity pool",
      "Spa-style bathroom",
      "Ocean-facing balcony",
      "Complimentary spa treatments"
    ]
  }
};

const SuiteDetails = () => {
  const { id } = useParams();
  const suite = suiteData[id as keyof typeof suiteData] || suiteData["1"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img 
            src={suite.image} 
            alt={suite.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <Link to="/properties">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Suites
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{suite.title}</h1>
            <div className="flex items-center space-x-4">
              <Badge className="bg-accent text-accent-foreground">{suite.tag}</Badge>
              <div className="flex items-center text-white/80">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{suite.location}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Suite Details */}
        <section className="py-16 px-4 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Suite Overview</h2>
                <p className="text-lg text-muted-foreground mb-8">{suite.description}</p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <Card className="p-4 text-center bg-gradient-card">
                    <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{suite.guests}</div>
                    <div className="text-sm text-muted-foreground">Guests</div>
                  </Card>
                  <Card className="p-4 text-center bg-gradient-card">
                    <Square className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{suite.area}</div>
                    <div className="text-sm text-muted-foreground">Area</div>
                  </Card>
                  <Card className="p-4 text-center bg-gradient-card">
                    <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{suite.location}</div>
                    <div className="text-sm text-muted-foreground">Floor</div>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">Features</h3>
                <ul className="space-y-2 mb-8">
                  {suite.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-foreground mb-4">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {suite.amenities.map((amenity, index) => (
                    <Badge key={index} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Card className="p-8 bg-gradient-card sticky top-24">
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-accent mb-2">{suite.price}</div>
                    <div className="text-muted-foreground">per night</div>
                  </div>
                  
                  <div className="space-y-4">
                    <Link to="/booking">
                      <Button className="w-full" variant="luxury" size="lg">
                        <Calendar className="h-5 w-5 mr-2" />
                        Book This Suite
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full" size="lg">
                      <Heart className="h-5 w-5 mr-2" />
                      Add to Wishlist
                    </Button>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-4">Included Services</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <Wifi className="h-4 w-4 mr-2 text-accent" />
                        High-speed WiFi
                      </li>
                      <li className="flex items-center">
                        <Car className="h-4 w-4 mr-2 text-accent" />
                        Airport transfer
                      </li>
                      <li className="flex items-center">
                        <Coffee className="h-4 w-4 mr-2 text-accent" />
                        Daily breakfast
                      </li>
                      <li className="flex items-center">
                        <Dumbbell className="h-4 w-4 mr-2 text-accent" />
                        Gym & Spa access
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SuiteDetails;