import React from 'react';

const Hero = () => {
  return (
      <section id="home" className="relative pt-20 pb-32 overflow-hidden">
<<<<<<< HEAD
        {/* Water background with animated waves */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-500"></div>

          {/* Animated wave layers */}
          <div className="absolute bottom-0 left-0 right-0 h-20 w-[200%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCI+PHBhdGggZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBkPSJNMCw2MGMxNjAtMzAsMzIwLTMwLDQ4MCwwczMyMCwzMCw0ODAsMEM5NjAsOTAsODAwLDkwLDY0MCwxMjBTMzIwLDE1MCwxNjAsMTIwUzAsOTAsMCw2MHoiLz48L3N2Zz4=')] bg-repeat-x animate-wave-slow opacity-70"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 w-[200%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCI+PHBhdGggZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjIpIiBkPSJNMCw2MGMxNjAtMzAsMzIwLTMwLDQ4MCwwczMyMCwzMCw0ODAsMEM5NjAsOTAsODAwLDkwLDY0MCwxMjBTMzIwLDE1MCwxNjAsMTIwUzAsOTAsMCw2MHoiLz48L3N2Zz4=')] bg-repeat-x animate-wave-medium opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 w-[200%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCI+PHBhdGggZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIiBkPSJNMCw2MGMxNjAtMzAsMzIwLTMwLDQ4MCwwczMyMCwzMCw0ODAsMEM5NjAsOTAsODAwLDkwLDY0MCwxMjBTMzIwLDE1MCwxNjAsMTIwUzAsOTAsMCw2MHoiLz48L3N2Zz4=')] bg-repeat-x animate-wave-fast opacity-30"></div>

          {/* Floating bubbles */}
          {[...Array(20)].map((_, i) => (
              <div
                  key={i}
                  className="absolute rounded-full bg-white/10 animate-float pointer-events-none"
                  style={{
                    width: `${Math.random() * 15 + 5}px`,
                    height: `${Math.random() * 15 + 5}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 25 + 15}s`,
                    animationDelay: `${Math.random() * 5}s`,
                    opacity: Math.random() * 0.3 + 0.1
                  }}
              />
          ))}
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
                    className="btn-primary inline-block bg-white text-blue-600 hover:bg-blue-50 active:bg-blue-100 px-8 py-3 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Order Now
                </a>
                <a
                    href="#services"
                    className="btn-secondary inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg transition-all hover:scale-[1.02]"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-md animate-pulse-slow"></div>
              <img
                  src="assets/maagangarowater.jpg"
                  alt="RO Water Bottles"
                  className="relative max-w-md mx-auto transform hover:scale-105 transition-transform duration-500 rounded-xl shadow-2xl border-4 border-white/20 z-10"
              />
=======
        {/* Background wave effect */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90"></div>
          <div className="absolute inset-0 z-10 opacity-20 bg-[url('https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&w=1280')] bg-repeat-x bg-bottom animate-wave"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-2xl text-white">
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
>>>>>>> 9fa226f1fbaf1e04cf2af06be70409b7cd038cbf
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Enhanced water drop animation */}
        <div className="absolute right-0 bottom-0 -mb-16 mr-8 hidden lg:block">
          <div className="relative h-32 w-32">
            {[...Array(8)].map((_, i) => (
                <div
                    key={i}
                    className="water-drop absolute bg-white rounded-full opacity-70"
                    style={{
                      width: `${Math.random() * 10 + 4}px`,
                      height: `${Math.random() * 10 + 4}px`,
                      left: `${Math.random() * 100}%`,
                      animation: `drop ${Math.random() * 3 + 2}s ease-in infinite ${Math.random() * 2}s`,
                      transformOrigin: '50% 100%'
                    }}
                />
            ))}
=======
        {/* Water drop animation */}
        <div className="absolute right-0 bottom-0 -mb-16 mr-8 hidden lg:block">
          <div className="relative">
            <div className="water-drop absolute w-6 h-6 bg-white rounded-full opacity-70 animate-drop1"></div>
            <div className="water-drop absolute w-4 h-4 bg-white rounded-full opacity-70 animate-drop2"></div>
            <div className="water-drop absolute w-5 h-5 bg-white rounded-full opacity-70 animate-drop3"></div>
>>>>>>> 9fa226f1fbaf1e04cf2af06be70409b7cd038cbf
          </div>
        </div>
      </section>
  );
};

export default Hero;