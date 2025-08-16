import { Button } from "@/components/ui/button";
import { Menu, Search, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-foreground">
              Futuristic Haven
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Button variant="nav" size="sm">Home</Button>
              <Button variant="nav" size="sm">Properties</Button>
              <Button variant="nav" size="sm">About</Button>
              <Button variant="nav" size="sm">Contact</Button>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};