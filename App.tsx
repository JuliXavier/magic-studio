import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import Gallery from './components/Gallery';
import TechSpecs from './components/TechSpecs';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <HowItWorks />
        <TechSpecs />
        <TargetAudience />
        <Gallery />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;