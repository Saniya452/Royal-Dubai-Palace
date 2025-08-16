import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SuiteCard } from "@/components/SuiteCard";
import { Button } from "@/components/ui/button";
import suite1 from "@/assets/property-1.jpg";
import suite2 from "@/assets/property-2.jpg";
import suite3 from "@/assets/property-3.jpg";
import suite4 from "@/assets/property-4.jpg";
import suite5 from "@/assets/property-5.jpg";
import suite6 from "@/assets/property-6.jpg";

const suites = [
  {
    id: 1,
    image: suite1,
    title: "Presidential Suite",
    location: "65th Floor",
    price: "$5,000/night",
    area: "2,500 sqft",
    guests: 4,
    amenities: ["Private terrace", "Butler service", "Jacuzzi"],
    tag: "Premium"
  },
  {
    id: 2,
    image: suite2,
    title: "Royal Ocean Suite",
    location: "55th Floor",
    price: "$3,500/night",
    area: "1,800 sqft",
    guests: 3,
    amenities: ["Ocean view", "Private pool", "Spa access"],
    tag: "Luxury"
  },
  {
    id: 3,
    image: suite3,
    title: "Executive Sky Suite",
    location: "45th Floor",
    price: "$2,200/night",
    area: "1,200 sqft",
    guests: 2,
    amenities: ["City view", "Executive lounge", "Business center"],
  },
  {
    id: 4,
    image: suite4,
    title: "Deluxe Marina Suite",
    location: "35th Floor",
    price: "$1,800/night",
    area: "900 sqft",
    guests: 2,
    amenities: ["Marina view", "Balcony", "Premium bedding"],
    tag: "Popular"
  },
  {
    id: 5,
    image: suite5,
    title: "Grand Heritage Suite",
    location: "25th Floor",
    price: "$4,200/night",
    area: "2,000 sqft",
    guests: 6,
    amenities: ["Heritage decor", "Multiple rooms", "Concierge"],
  },
  {
    id: 6,
    image: suite6,
    title: "Modern Comfort Suite",
    location: "20th Floor",
    price: "$1,200/night",
    area: "700 sqft",
    guests: 2,
    amenities: ["Modern design", "Tech amenities", "Minibar"],
  }
];

const Properties = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 lg:px-8 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Luxury Suites & Rooms
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience unparalleled luxury in our meticulously designed suites, each offering breathtaking views of Dubai's skyline and Arabian Gulf.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="luxury" size="lg">Filter by Category</Button>
              <Button variant="outline" size="lg">Check Availability</Button>
            </div>
          </div>
        </section>

        {/* Suites Grid */}
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {suites.map((suite) => (
                <SuiteCard key={suite.id} {...suite} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;