import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I personalize my Royal Dubai experience?",
    answer: "Discover a diverse range of premium services, from luxurious spa treatments to exclusive dining experiences, tailored to your needs."
  },
  {
    question: "Where can I find Royal Dubai services?",
    answer: "Our hotel is located in the heart of Downtown Dubai, with easy access to all major attractions including Burj Khalifa, Dubai Mall, and Dubai Fountain."
  },
  {
    question: "What steps to book at Royal Dubai?",
    answer: "Simply select your preferred suite, choose your dates, and complete the booking process. Our concierge team will handle all arrangements for your stay."
  },
  {
    question: "What amenities are included?",
    answer: "All suites include complimentary WiFi, 24/7 room service, access to our spa and fitness center, and personalized concierge services."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we offer complimentary valet parking for all our guests, with secure underground parking facilities."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-accent text-sm font-medium mb-4">FAQs</div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Everything about Royal Dubai suites
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We know that booking, staying, or planning a luxury experience can be overwhelming. 
              Here are some frequently asked questions to help guide you through the process.
            </p>
          </div>
          
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-foreground hover:text-accent">
                    {index + 1}. {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};