import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Square, Wifi, Car, Coffee } from "lucide-react";

interface SuiteCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  guests: number;
  area: string;
  amenities: string[];
  tag?: string;
}

export const SuiteCard = ({ 
  image, 
  title, 
  location, 
  price, 
  guests,
  area,
  amenities,
  tag 
}: SuiteCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-card border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-card hover:scale-[1.02]">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {tag && (
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
            {tag}
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-accent">{price}</div>
          </div>
        </div>
        
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{guests} Guests</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{area}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-foreground mb-2">Amenities:</h4>
          <div className="flex flex-wrap gap-1 text-xs text-muted-foreground">
            {amenities.map((amenity, index) => (
              <span key={index} className="bg-secondary px-2 py-1 rounded">
                {amenity}
              </span>
            ))}
          </div>
        </div>
        
        <Button className="w-full" variant="outline">
          Book Suite
        </Button>
      </div>
    </Card>
  );
};