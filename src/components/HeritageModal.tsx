import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Crown, Building, Users, Award } from "lucide-react";

interface HeritageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeritageModal = ({ isOpen, onClose }: HeritageModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Our Royal Heritage</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">A Legacy of Arabian Hospitality</h2>
            <p className="text-lg text-muted-foreground">
              Since 1995, Royal Dubai Palace has been synonymous with luxury, elegance, and authentic Arabian hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-card">
              <Crown className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Royal Foundation</h3>
              <p className="text-muted-foreground">
                Established by the Al Maktoum family vision to create a world-class hospitality destination that reflects 
                the grandeur and sophistication of Arabian culture while embracing international luxury standards.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card">
              <Building className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Architectural Marvel</h3>
              <p className="text-muted-foreground">
                Our 65-story tower stands as an iconic symbol in Dubai's skyline, featuring traditional Islamic 
                architectural elements harmoniously blended with contemporary design principles.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card">
              <Users className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Cultural Ambassador</h3>
              <p className="text-muted-foreground">
                We've hosted over 2 million guests from 150+ countries, serving as cultural ambassadors and 
                showcasing the warmth, generosity, and sophistication of Emirati hospitality.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card">
              <Award className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Award-Winning Excellence</h3>
              <p className="text-muted-foreground">
                Recognized with over 150 international hospitality awards, including "World's Leading Luxury Hotel" 
                for five consecutive years and "Best Cultural Heritage Hotel in the Middle East."
              </p>
            </Card>
          </div>

          <div className="bg-secondary/20 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">Timeline of Excellence</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-accent rounded-full mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-accent">1995</span> - Grand opening with 150 luxury suites
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-accent rounded-full mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-accent">2001</span> - First Middle Eastern hotel to receive Forbes Five-Star rating
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-accent rounded-full mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-accent">2010</span> - Launch of our world-renowned Royal Spa & Wellness Center
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-accent rounded-full mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-accent">2018</span> - Completion of $200M renovation preserving heritage while embracing innovation
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-accent rounded-full mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-accent">2023</span> - Celebrated 28 years of hospitality excellence with 2M+ guests served
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};