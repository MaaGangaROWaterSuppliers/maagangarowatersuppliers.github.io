import { Droplets, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white/20 p-2 rounded-full">
                <Droplets className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Maa Gangaro</h3>
                <p className="text-sm opacity-90">Water Suppliers</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Your trusted partner for pure, affordable RO water delivery in Tigaon and nearby areas. 
              Quality assured, reliably delivered.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="bg-white/20 px-2 py-1 rounded-full">💧 RO Purified</span>
              <span className="bg-white/20 px-2 py-1 rounded-full">⚡️ Fast Delivery</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white/60" />
                <a href="tel:+919876543210" className="text-sm hover:text-white/80 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-white/60" />
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white/80 transition-colors"
                >
                  WhatsApp: +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white/60" />
                <a href="mailto:info@maagangarowater.com" className="text-sm hover:text-white/80 transition-colors">
                  info@maagangarowater.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-white/60" />
                <span className="text-sm">Tigaon, IMT & Nearby Areas</span>
              </div>
            </div>
          </div>

          {/* Services & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <div className="space-y-2 text-sm mb-6">
              <div>• RO Purified Water Delivery</div>
              <div>• Emergency Water Supply</div>
              <div>• Bulk Orders for Events</div>
              <div>• Regular Home & Office Supply</div>
            </div>
            
            <h5 className="font-semibold mb-2">Business Hours</h5>
            <div className="text-sm space-y-1">
              <div>Mon-Sat: 8:00 AM - 8:00 PM</div>
              <div>Sunday: 9:00 AM - 6:00 PM</div>
              <div className="text-yellow-300 font-medium">Emergency: 24/7</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-white/80 mb-4 md:mb-0">
              © {currentYear} Maa Gangaro Water Suppliers. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-white/60">
              <span>Pure Water • Trusted Service • Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;