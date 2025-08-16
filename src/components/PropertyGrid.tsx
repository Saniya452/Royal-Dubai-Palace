import { PropertyCard } from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Modern Glass Residence",
    location: "Beverly Hills, CA",
    price: "$2.8M",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,200 sqft",
    tag: "Featured"
  },
  {
    id: 2,
    image: property2,
    title: "Infinity Villa",
    location: "Malibu, CA",
    price: "$4.2M",
    bedrooms: 5,
    bathrooms: 4,
    area: "4,800 sqft",
    tag: "Luxury"
  },
  {
    id: 3,
    image: property3,
    title: "Skyline Penthouse",
    location: "Manhattan, NY",
    price: "$6.5M",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,800 sqft",
  },
  {
    id: 4,
    image: property4,
    title: "Contemporary Complex",
    location: "Miami, FL",
    price: "$1.9M",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,800 sqft",
    tag: "New"
  },
  {
    id: 5,
    image: property5,
    title: "Curved Architecture Estate",
    location: "Los Angeles, CA",
    price: "$5.8M",
    bedrooms: 6,
    bathrooms: 5,
    area: "6,200 sqft",
  },
  {
    id: 6,
    image: property6,
    title: "High-Rise Apartment",
    location: "Chicago, IL",
    price: "$1.2M",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,400 sqft",
  }
];

export const PropertyGrid = () => {
  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of extraordinary properties that define the future of luxury living.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-accent hover:text-accent/80 font-semibold text-lg transition-colors">
            View All Properties →
          </button>
        </div>
      </div>
    </section>
  );
};