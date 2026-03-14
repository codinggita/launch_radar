import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Process from './components/Process';
import Startups from './components/Startups';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Process />
        <Startups />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
