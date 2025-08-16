import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  tag?: string;
}

export const PropertyCard = ({ 
  image, 
  title, 
  location, 
  price, 
  bedrooms, 
  bathrooms, 
  area,
  tag 
}: PropertyCardProps) => {
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
            <Bed className="h-4 w-4 mr-1" />
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{area}</span>
          </div>
        </div>
        
        <Button className="w-full" variant="outline">
          View Details
        </Button>
      </div>
    </Card>
  );
};