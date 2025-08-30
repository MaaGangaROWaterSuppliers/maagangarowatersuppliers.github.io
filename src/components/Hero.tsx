import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-water.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-white/30 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 bg-white/20 rounded-full"></div>
      </div>
      <div className="absolute bottom-32 left-16 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 bg-white/25 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Trusted Partner for
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Pure & Affordable Drinking Water
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Delivering RO-purified water to homes, offices, and events in Tigaon and nearby areas at just ₹20 per bottle.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
              <MapPin className="h-5 w-5 text-blue-200" />
              <span className="text-sm">Tigaon & Nearby Areas</span>
            </div>
            <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
              <Clock className="h-5 w-5 text-blue-200" />
              <span className="text-sm">Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
              <span className="text-2xl">💧</span>
              <span className="text-sm">RO Purified</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="ripple bg-white text-primary hover:bg-blue-50 transition-bounce shadow-strong text-lg px-8 py-4 h-auto"
            >
              <Phone className="h-5 w-5 mr-2" />
              Order Water Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-bounce shadow-medium text-lg px-8 py-4 h-auto"
            >
              Our Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-blue-200 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">₹20</div>
                <div className="text-blue-200 text-sm">Per Bottle</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-blue-200 text-sm">Emergency Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;