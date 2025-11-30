import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import History from './components/History';
import Reservation from './components/Reservation';
import Prices from './components/Prices';
import Lessons from './components/Lessons';
import Contact from './components/Contact';
// 🚨 ClubAssistant import removed

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-stone-50">
      <Navigation />
      
      <main>
        <Hero />
        <History />
        <Reservation />
        <Prices />
        <Lessons />
      </main>

      <Contact />
      
      {/* 🚨 ClubAssistant component removed */}
    </div>
  );
};

export default App;
