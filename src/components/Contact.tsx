import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone) {
      toast({
        title: "Please fill required fields",
        description: "Name and phone number are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "Order submitted successfully!",
        description: "We'll contact you shortly to confirm your water delivery.",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', address: '', message: '' });
      }, 3000);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      info: "+91 76786 58070",
      action: "tel:+917678658070"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "WhatsApp",
      info: "+91 76786 58070",
      action: "https://wa.me/917678658070"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      info: "karamchandnagar33@gmail.com",
      action: "mailto:karamchandnagar33@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Service Areas",
      info: "Tigaon, IMT & Nearby",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Order Pure Water Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to enjoy fresh, pure RO water? Fill out the form below or contact us directly. We're here to serve you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-medium border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <Send className="h-5 w-5 mr-2" />
                Order Water Now
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 xxxxx xxxxx"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Delivery Address
                    </label>
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your address"
                      className="bg-background/50"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message (Optional)
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any special instructions or requirements..."
                      rows={4}
                      className="bg-background/50"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark transition-smooth text-lg py-3 h-auto"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Submit Order Request
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Order Submitted Successfully!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for choosing Maa Gangaro Water Suppliers. We'll contact you shortly to confirm your delivery.
                  </p>
                  <div className="text-sm text-primary font-medium">
                    Expected response time: Within 30 minutes
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="shadow-soft border-0 bg-card/50 backdrop-blur-sm hover:shadow-medium transition-smooth">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-water p-2 rounded-lg text-white">
                        {contact.icon}
                      </div>
                      <div>
                        <div className="font-medium text-foreground text-sm">
                          {contact.title}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {contact.action.startsWith('http') || contact.action.startsWith('tel') || contact.action.startsWith('mailto') ? (
                            <a 
                              href={contact.action}
                              className="hover:text-primary transition-smooth"
                              target={contact.action.startsWith('http') ? '_blank' : undefined}
                              rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {contact.info}
                            </a>
                          ) : (
                            contact.info
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="shadow-soft border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-primary flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Monday - Saturday</span>
                  <span className="text-muted-foreground">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Sunday</span>
                  <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border">
                  <span className="text-foreground font-medium">Emergency Service</span>
                  <span className="text-primary font-medium">24/7 Available</span>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-soft border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-water rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <div className="font-medium">Service Coverage Area</div>
                    <div className="text-sm opacity-90">Tigaon, IMT & Nearby Sectors</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;