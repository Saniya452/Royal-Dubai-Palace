export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Futuristic Haven
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Redefining luxury real estate through innovative design and exceptional service. Your dream property awaits.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Properties</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Buy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Rent</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Luxury Homes</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Commercial</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Futuristic Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};