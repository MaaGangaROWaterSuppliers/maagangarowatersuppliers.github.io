import React from 'react';

const Hero = () => {
  return (
      <section id="home" className="relative pt-20 pb-32 overflow-hidden">
        {/* Background wave effect */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90"></div>
          <div className="absolute inset-0 z-10 opacity-20 bg-[url('https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&w=1280')] bg-repeat-x bg-bottom animate-wave"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Your Trusted Partner for Pure & Affordable Drinking Water
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Delivering RO-purified water to homes, offices, and events in Tigaon and nearby areas at just ₹20 per bottle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                    href="#contact"
                    className="btn-primary inline-block bg-white text-blue-600 hover:bg-blue-50 active:bg-blue-100 px-8 py-3 rounded-full font-semibold text-lg transition-transform hover:scale-105 shadow-md"
                >
                  Order Now
                </a>
                <a
                    href="#services"
                    className="btn-secondary inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg transition-all"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                  src="assets/maagangarowater.png"  // Make sure this image has transparent background
                  alt="RO Water Bottles"
                  className="max-w-md mx-auto transform hover:scale-105 transition-transform duration-300 drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Water drop animation */}
        <div className="absolute right-0 bottom-0 -mb-16 mr-8 hidden lg:block">
          <div className="relative">
            <div className="water-drop absolute w-6 h-6 bg-white rounded-full opacity-70 animate-drop1"></div>
            <div className="water-drop absolute w-4 h-4 bg-white rounded-full opacity-70 animate-drop2"></div>
            <div className="water-drop absolute w-5 h-5 bg-white rounded-full opacity-70 animate-drop3"></div>
          </div>
        </div>
      </section>
  );
};

export default Hero;