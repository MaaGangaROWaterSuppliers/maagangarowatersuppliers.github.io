import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  Droplets, 
  Truck,
  Clock,
  Star,
  MapPin,
  Shield
} from 'lucide-react';
import aboutTeamImage from '@/assets/about-team.jpg';

const About = () => {
  const achievements = [
    { icon: <Users className="h-6 w-6" />, number: "500+", label: "Happy Customers" },
    { icon: <Droplets className="h-6 w-6" />, number: "10,000+", label: "Bottles Delivered" },
    { icon: <Clock className="h-6 w-6" />, number: "3+", label: "Years Experience" },
    { icon: <Star className="h-6 w-6" />, number: "4.9", label: "Customer Rating" }
  ];

  const qualities = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Quality Assurance",
      description: "Every bottle undergoes rigorous 7-stage RO purification and regular quality testing."
    },
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Reliable Delivery",
      description: "Professional delivery team ensuring timely service to your doorstep."
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Local Coverage",
      description: "Comprehensive coverage across Tigaon, IMT, and surrounding areas."
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Trusted Brand",
      description: "Built on trust, reliability, and commitment to pure water delivery."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20">
            About Maa Gangaro Water Suppliers
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Your Trusted Water Delivery Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Committed to delivering pure, safe, and affordable RO water to every household and business in our service area.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-water rounded-3xl transform rotate-3"></div>
            <img 
              src={aboutTeamImage}
              alt="Maa Gangaro Water Suppliers Team"
              className="relative rounded-3xl shadow-strong w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-2xl shadow-medium">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">₹20</div>
                <div className="text-sm text-muted-foreground">Per Bottle</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Serving Pure Water Since Day One
            </h3>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Maa Gangaro Water Suppliers has been dedicated to providing the highest quality RO-purified water 
                to families and businesses across Tigaon and nearby areas. Our commitment to purity, reliability, 
                and customer satisfaction has made us the preferred choice for water delivery services.
              </p>
              <p>
                We understand the importance of clean, safe drinking water for your health and well-being. 
                That's why we employ advanced 7-stage RO purification technology and maintain strict quality 
                control measures to ensure every bottle meets the highest standards.
              </p>
              <p>
                Our professional delivery team is trained to provide prompt, courteous service, making sure 
                you never run out of pure water. From emergency deliveries to scheduled weekly supplies, 
                we're here to meet all your hydration needs.
              </p>
            </div>

            {/* Qualities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-card/50 rounded-xl">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                    {quality.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {quality.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {quality.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center border-0 shadow-soft bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-water rounded-2xl text-white mb-4">
                  {achievement.icon}
                </div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;