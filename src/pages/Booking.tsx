import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { Calendar, Users, CreditCard, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: undefined as Date | undefined,
    checkOut: undefined as Date | undefined,
    guests: "2",
    suite: "presidential",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: ""
  });
  const { toast } = useToast();

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleBooking = () => {
    setStep(4); // Move to confirmation step
    toast({
      title: "Payment Processed!",
      description: "Your booking has been confirmed. Please see the confirmation details below.",
    });
    // In a real app, this would submit to a backend
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Book Your Stay</h1>
                <p className="text-muted-foreground">Experience luxury at Royal Dubai Palace</p>
              </div>
              <Link to="/properties">
                <Button variant="ghost">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Suites
                </Button>
              </Link>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-12">
              {[
                { step: 1, label: "Dates & Suite" },
                { step: 2, label: "Guest Info" },
                { step: 3, label: "Payment" },
                { step: 4, label: "Confirmation" }
              ].map((stepInfo, index) => (
                <div key={stepInfo.step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      step >= stepInfo.step 
                        ? 'bg-accent text-accent-foreground shadow-luxury' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {step > stepInfo.step ? <Check className="h-6 w-6" /> : stepInfo.step}
                    </div>
                    <span className="text-xs text-muted-foreground mt-2">{stepInfo.label}</span>
                  </div>
                  {index < 3 && (
                    <div className={`w-20 h-1 mx-4 transition-all duration-300 ${
                      step > stepInfo.step ? 'bg-accent' : 'bg-secondary'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <Card className="p-8 bg-gradient-card">
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Select Your Dates & Suite</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="checkIn">Check-in Date</Label>
                      <div className="mt-2">
                        <DatePicker
                          date={bookingData.checkIn}
                          onSelect={(date) => setBookingData({...bookingData, checkIn: date})}
                          placeholder="Select check-in date"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="checkOut">Check-out Date</Label>
                      <div className="mt-2">
                        <DatePicker
                          date={bookingData.checkOut}
                          onSelect={(date) => setBookingData({...bookingData, checkOut: date})}
                          placeholder="Select check-out date"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Select value={bookingData.guests} onValueChange={(value) => setBookingData({...bookingData, guests: value})}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5">5+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="suite">Suite Type</Label>
                      <Select value={bookingData.suite} onValueChange={(value) => setBookingData({...bookingData, suite: value})}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="presidential">Presidential Suite - $5,000/night</SelectItem>
                          <SelectItem value="royal">Royal Ocean Suite - $3,500/night</SelectItem>
                          <SelectItem value="executive">Executive Sky Suite - $2,200/night</SelectItem>
                          <SelectItem value="deluxe">Deluxe Marina Suite - $1,800/night</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button onClick={handleNext} className="w-full" variant="luxury" size="lg">
                    Continue to Guest Details
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Guest Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={bookingData.firstName}
                        onChange={(e) => setBookingData({...bookingData, firstName: e.target.value})}
                        className="mt-2"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={bookingData.lastName}
                        onChange={(e) => setBookingData({...bookingData, lastName: e.target.value})}
                        className="mt-2"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                        className="mt-2"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                        className="mt-2"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div className="mb-8">
                    <Label htmlFor="requests">Special Requests (Optional)</Label>
                    <textarea
                      id="requests"
                      value={bookingData.specialRequests}
                      onChange={(e) => setBookingData({...bookingData, specialRequests: e.target.value})}
                      className="mt-2 w-full min-h-[100px] p-3 border border-input rounded-md bg-background resize-none"
                      placeholder="Any special requests or requirements..."
                    />
                  </div>
                  <div className="flex space-x-4">
                    <Button onClick={handleBack} variant="outline" className="flex-1">
                      <ArrowLeft className="h-5 w-5 mr-2" />
                      Back
                    </Button>
                    <Button onClick={handleNext} className="flex-1" variant="luxury">
                      Continue to Payment
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Booking Summary & Payment</h2>
                  
                  {/* Booking Summary */}
                  <Card className="p-6 mb-6 bg-secondary/20">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Booking Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Guest Name:</span>
                        <span className="text-foreground">{bookingData.firstName} {bookingData.lastName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Check-in:</span>
                        <span className="text-foreground">{bookingData.checkIn?.toLocaleDateString() || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Check-out:</span>
                        <span className="text-foreground">{bookingData.checkOut?.toLocaleDateString() || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Guests:</span>
                        <span className="text-foreground">{bookingData.guests}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Suite:</span>
                        <span className="text-foreground capitalize">{bookingData.suite.replace('-', ' ')} Suite</span>
                      </div>
                      <div className="pt-2 border-t border-border">
                        <div className="flex justify-between font-semibold">
                          <span className="text-foreground">Total:</span>
                          <span className="text-accent text-xl">$5,000</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Payment Method */}
                  <h3 className="text-xl font-semibold text-foreground mb-4">Payment Method</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button onClick={handleBack} variant="outline" className="flex-1">
                      <ArrowLeft className="h-5 w-5 mr-2" />
                      Back
                    </Button>
                    <Button onClick={handleBooking} className="flex-1" variant="luxury">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Confirm Booking
                    </Button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="text-center">
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-10 w-10 text-accent-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">Booking Confirmed!</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      Thank you for choosing Royal Dubai Palace. Your reservation has been confirmed.
                    </p>
                  </div>

                  <Card className="p-6 mb-8 bg-secondary/20 text-left">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Confirmation Details</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Confirmation Number:</span>
                        <span className="text-foreground font-mono">RDP-{Date.now().toString().slice(-6)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Guest Name:</span>
                        <span className="text-foreground">{bookingData.firstName} {bookingData.lastName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Email:</span>
                        <span className="text-foreground">{bookingData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Check-in:</span>
                        <span className="text-foreground">{bookingData.checkIn?.toLocaleDateString() || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Check-out:</span>
                        <span className="text-foreground">{bookingData.checkOut?.toLocaleDateString() || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Suite:</span>
                        <span className="text-foreground capitalize">{bookingData.suite.replace('-', ' ')} Suite</span>
                      </div>
                      <div className="pt-3 border-t border-border">
                        <div className="flex justify-between font-semibold text-lg">
                          <span className="text-foreground">Total Paid:</span>
                          <span className="text-accent">$5,000</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <div className="bg-accent/10 p-4 rounded-lg mb-6">
                    <p className="text-sm text-muted-foreground">
                      A confirmation email has been sent to {bookingData.email}. 
                      Our concierge team will contact you 24 hours before your arrival.
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    <Link to="/" className="flex-1">
                      <Button variant="outline" className="w-full">
                        Return Home
                      </Button>
                    </Link>
                    <Link to="/properties" className="flex-1">
                      <Button variant="luxury" className="w-full">
                        Browse More Suites
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;