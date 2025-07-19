import React from 'react';
import VantaBackground from './VantaBackground';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Hero: React.FC = () => {
  return (
    <VantaBackground>
      <section className="pt-40 pb-32 relative z-10">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Clean, professional headline */}
            <ScrollAnimationWrapper animation="fade-in-up">
              <h1 className="text-7xl md:text-8xl font-bold text-white mb-12 leading-none tracking-tight">
                Give physical
                <br />
                spaces
                <span className="text-purple-600"> a voice</span>
              </h1>
            </ScrollAnimationWrapper>
            
            {/* Simple, clear description */}
            <ScrollAnimationWrapper animation="fade-in-up" delay={200}>
              <p className="text-2xl text-gray-400 mb-16 max-w-3xl leading-relaxed">
                Deploy and manage AI-driven voice experiences 
                in museums, restaurants, retail, and events.
              </p>
            </ScrollAnimationWrapper>

            {/* Clean CTA */}
            <ScrollAnimationWrapper animation="fade-in-up" delay={400}>
              <div className="flex gap-6">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 font-semibold text-lg transition-all duration-300">
                  Schedule Demo
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 font-semibold text-lg transition-all duration-300">
                  View Platform
                </button>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
    </VantaBackground>
  );
};

export default Hero; 