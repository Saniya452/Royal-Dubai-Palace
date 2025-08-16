import { Button } from "@/components/ui/button";
import { Menu, Search, User } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
              Royal Dubai Palace
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/">
                <Button variant={isActive("/") ? "luxury" : "nav"} size="sm">Home</Button>
              </Link>
              <Link to="/properties">
                <Button variant={isActive("/properties") ? "luxury" : "nav"} size="sm">Suites</Button>
              </Link>
              <Link to="/about">
                <Button variant={isActive("/about") ? "luxury" : "nav"} size="sm">About</Button>
              </Link>
              <Link to="/contact">
                <Button variant={isActive("/contact") ? "luxury" : "nav"} size="sm">Contact</Button>
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};