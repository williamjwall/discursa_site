import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VoicePlatform from './components/PgxAnalyzer';
import Vision from './components/Vision';
import Features from './components/Features';
import UseCases from './components/Testimonials';
import News from './components/News';
import Footer from './components/Footer';
import './index.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <VoicePlatform />
        <Vision />
        <Features />
        <UseCases />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default App; 