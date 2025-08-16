import { PropertyCard } from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const suites = [
  {
    id: 1,
    image: property1,
    title: "Presidential Suite",
    location: "65th Floor",
    price: "$5,000/night",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,500 sqft",
    tag: "Premium"
  },
  {
    id: 2,
    image: property2,
    title: "Royal Ocean Suite",
    location: "55th Floor",
    price: "$3,500/night",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,800 sqft",
    tag: "Luxury"
  },
  {
    id: 3,
    image: property3,
    title: "Executive Sky Suite",
    location: "45th Floor",
    price: "$2,200/night",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sqft",
  },
  {
    id: 4,
    image: property4,
    title: "Deluxe Marina Suite",
    location: "35th Floor",
    price: "$1,800/night",
    bedrooms: 1,
    bathrooms: 1,
    area: "900 sqft",
    tag: "Popular"
  },
  {
    id: 5,
    image: property5,
    title: "Grand Heritage Suite",
    location: "25th Floor",
    price: "$4,200/night",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,000 sqft",
  },
  {
    id: 6,
    image: property6,
    title: "Modern Comfort Suite",
    location: "20th Floor",
    price: "$1,200/night",
    bedrooms: 1,
    bathrooms: 1,
    area: "700 sqft",
  }
];

export const PropertyGrid = () => {
  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore best suites with expert services.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover a diverse range of premium suites, from luxurious penthouses to spacious family suites, tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {suites.map((suite) => (
            <PropertyCard key={suite.id} {...suite} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-accent hover:text-accent/80 font-semibold text-lg transition-colors">
            View All Suites →
          </button>
        </div>
      </div>
    </section>
  );
};