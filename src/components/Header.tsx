import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Droplets, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-water p-2 rounded-full">
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Maa Ganga RO</h1>
              <p className="text-xs text-muted-foreground">Water Suppliers</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex items-center space-x-2 bg-primary hover:bg-primary-dark transition-smooth"
            >
              <Phone className="h-4 w-4" />
              <span>Order Now</span>
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark transition-smooth mt-4"
              >
                <Phone className="h-4 w-4" />
                <span>Order Now</span>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;