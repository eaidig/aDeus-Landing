import React from 'react';
import Hero from './components/Hero';
import Trailer from './components/Trailer';
import Synopsis from './components/Synopsis';
import EventInfo from './components/EventInfo';
import Footer from './components/Footer';
import GrainOverlay from './components/GrainOverlay';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-vintageBlack text-antiqueBeige overflow-x-hidden selection:bg-burntRed selection:text-white">
      <GrainOverlay />
      <Hero />
      <Trailer />
      <Synopsis />
      <EventInfo />
      <Footer />
    </main>
  );
};

export default App;