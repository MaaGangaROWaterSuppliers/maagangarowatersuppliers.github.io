import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "919876543210";
  const defaultMessage = encodeURIComponent("Hello! I'm interested in your water delivery service. Please provide more details.");

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${defaultMessage}`, '_blank');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-strong animate-pulse hover:animate-none transition-all duration-300"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-40">
          <div className="bg-card rounded-2xl shadow-strong border-0 w-80 overflow-hidden animate-scale-in">
            {/* Header */}
            <div className="bg-green-500 text-white p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Maa Gangaro Water</h3>
                  <p className="text-sm opacity-90">Typically replies instantly</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 bg-green-50/50">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm text-foreground">
                  👋 Hi there! Need fresh RO water delivered?
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm text-foreground">
                  💧 We deliver pure water at just ₹20 per bottle to Tigaon & nearby areas!
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm text-foreground">
                  ⚡️ Fast delivery • Quality assured • Emergency service available
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="p-4 bg-card">
              <Button 
                onClick={openWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Start Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;