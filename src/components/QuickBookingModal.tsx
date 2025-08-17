import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickBookingModal = ({ isOpen, onClose }: QuickBookingModalProps) => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    name: "",
    email: "",
    phone: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quick Booking Submitted!",
      description: "Our team will contact you within 1 hour to confirm your reservation.",
    });
    onClose();
    setFormData({
      checkIn: "",
      checkOut: "",
      guests: "2",
      name: "",
      email: "",
      phone: ""
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Quick Booking</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="quick-checkin">Check-in</Label>
              <Input
                id="quick-checkin"
                type="date"
                value={formData.checkIn}
                onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                required
              />
            </div>
            <div>
              <Label htmlFor="quick-checkout">Check-out</Label>
              <Input
                id="quick-checkout"
                type="date"
                value={formData.checkOut}
                onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="quick-guests">Guests</Label>
            <Select value={formData.guests} onValueChange={(value) => setFormData({...formData, guests: value})}>
              <SelectTrigger>
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
            <Label htmlFor="quick-name">Full Name</Label>
            <Input
              id="quick-name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <Label htmlFor="quick-email">Email</Label>
            <Input
              id="quick-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <Label htmlFor="quick-phone">Phone</Label>
            <Input
              id="quick-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" variant="luxury" className="flex-1">
              <Calendar className="h-4 w-4 mr-2" />
              Submit Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};