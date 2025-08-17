import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Global Enterprises",
      content: "The Royal Dubai Palace exceeded every expectation. The service was impeccable, and the attention to detail was extraordinary. I've stayed at luxury hotels worldwide, but this truly stands apart.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Ahmed Al-Rashid",
      role: "Business Executive",
      content: "As a frequent business traveler, I appreciate the perfect blend of Arabian hospitality and modern amenities. The Presidential Suite offered the perfect environment for both work and relaxation.",
      rating: 5,
      avatar: "AR"
    },
    {
      name: "Emma Wilson",
      role: "Travel Blogger",
      content: "This hotel is a masterpiece of luxury hospitality. Every moment felt magical, from the breathtaking views to the exceptional spa treatments. Truly a once-in-a-lifetime experience.",
      rating: 5,
      avatar: "EW"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Guests Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why discerning travelers choose Royal Dubai Palace for their luxury stays
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-gradient-card hover:shadow-card transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-accent/30" />
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent">4.9</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-4xl font-bold text-accent">2000+</div>
              <div className="text-sm text-muted-foreground">Happy Guests</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-4xl font-bold text-accent">150+</div>
              <div className="text-sm text-muted-foreground">Five-Star Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};