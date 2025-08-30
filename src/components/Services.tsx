import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Droplets, 
  Truck, 
  Calendar, 
  Building2, 
  Home, 
  Clock,
  Shield,
  Phone
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "RO-Purified Water Only",
      description: "We deliver only the highest quality RO-purified water, ensuring it's safe and healthy for consumption.",
      features: ["7-stage purification", "Regular quality testing", "Safe packaging"]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fast & Reliable Delivery",
      description: "Count on us for timely and reliable delivery service to your home, office or event location.",
      features: ["Same-day delivery", "Tracking available", "Professional staff"]
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Flexible Supply Plans",
      description: "Choose from our flexible supply plans, including daily delivery, weekly schedules, and bulk orders.",
      features: ["Daily delivery", "Weekly plans", "Bulk discounts"]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "For Homes, Offices & Events",
      description: "We cater to all your needs - whether for your family, your workplace, or special occasions.",
      features: ["Residential service", "Corporate contracts", "Event catering"]
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Emergency Delivery",
      description: "Running out of water? Call us for quick emergency delivery service available 24/7.",
      features: ["24/7 availability", "Quick response", "Emergency hotline"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Every bottle goes through rigorous quality checks to ensure you get pure, safe drinking water.",
      features: ["Quality certified", "Regular testing", "Satisfaction guaranteed"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Premium Water Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide high-quality RO water delivery services to meet all your hydration needs with reliability and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-smooth border-0 shadow-soft bg-card/50 backdrop-blur-sm hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-water rounded-2xl text-white mb-4 group-hover:scale-110 transition-bounce">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Areas */}
        <div className="bg-card rounded-3xl p-8 shadow-medium">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Service Areas</h3>
            <p className="text-muted-foreground">
              We proudly serve Tigaon, IMT, and all nearby sectors and colonies with our water delivery service.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {['Tigaon', 'IMT', 'Sector 58', 'Sector 59', 'Sector 60', 'Sector 61', 'Nearby Colonies', 'Custom Areas'].map((area, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-muted/50 rounded-xl">
                <Home className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">Need delivery in another area?</p>
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary-dark transition-smooth"
            >
              <Phone className="h-4 w-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;