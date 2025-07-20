import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import { useCases } from '../data/platform-data';
import VantaBackground from './VantaBackground';

const UseCases: React.FC = () => {
  return (
    <VantaBackground>
      <section className="py-32">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimationWrapper animation="fade-in-up">
              <div className="mb-24">
                <h2 className="text-6xl font-bold text-white mb-8 leading-tight">
                  Voice AI that lives
                  <br />
                  <span className="text-purple-600">in your world</span>
                </h2>
                <p className="text-2xl text-gray-400 max-w-3xl leading-relaxed">
                  See how organizations are using Discursa to create memorable 
                  voice experiences in physical spaces.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <div className="grid md:grid-cols-2 gap-16 mb-32">
              {useCases.slice(0, 4).map((useCase, index) => (
                <ScrollAnimationWrapper key={useCase.id} animation="fade-in-up" delay={index * 150}>
                  <div className="border-t-2 border-white pt-8">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-white mb-4">{useCase.name}</h3>
                      <p className="text-sm text-purple-600 font-semibold uppercase tracking-wide mb-4">
                        {useCase.environment}
                      </p>
                      <p className="text-xl text-gray-400 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {useCase.sampleInteractions.slice(0, 2).map((interaction, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-purple-600 mr-3 mt-1">→</span>
                          <span className="text-gray-500 italic">"{interaction}"</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>

            <ScrollAnimationWrapper animation="fade-in-up">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-white mb-8">
                  Not just voice AI — your voice AI
                </h3>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                  Designed for teams who want control over tone, timing, and message 
                  across every physical location.
                </p>
                <div className="flex gap-6 justify-center">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 font-semibold text-lg transition-all duration-300">
                    Explore Use Cases
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 font-semibold text-lg transition-all duration-300">
                    See Demos
                  </button>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
    </VantaBackground>
  );
};

export default UseCases;
