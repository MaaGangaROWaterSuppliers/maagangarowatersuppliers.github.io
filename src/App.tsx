import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
>>>>>>> 9fa226f1fbaf1e04cf2af06be70409b7cd038cbf
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceAreas from './components/ServiceAreas';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
<<<<<<< HEAD
import Documentation from './components/Documentation';

function MainPage() {
  return (
    <>
=======

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
>>>>>>> 9fa226f1fbaf1e04cf2af06be70409b7cd038cbf
      <Header />
      <main>
        <Hero />
        <Services />
        <ServiceAreas />
        <Pricing />
        <Contact />
      </main>
      <Footer />
<<<<<<< HEAD
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </div>
    </Router>
=======
    </div>
>>>>>>> 9fa226f1fbaf1e04cf2af06be70409b7cd038cbf
  );
}

export default App;