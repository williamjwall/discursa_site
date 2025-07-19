import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const VoicePlatform: React.FC = () => {
  const platformLayers = [
    {
      title: 'Voice Interface Layer',
      description: 'Natural conversation processing that understands context, intent, and responds with your brand voice.'
    },
    {
      title: 'Content Management',
      description: 'Centralized control over all voice content, responses, and conversation flows across locations.'
    },
    {
      title: 'Analytics & Insights',
      description: 'Real-time data on interactions, popular questions, and visitor engagement patterns.'
    },
    {
      title: 'Deployment Infrastructure',
      description: 'Reliable, scalable system that works in any physical environment with minimal setup.'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimationWrapper animation="fade-in-up">
            <div className="mb-24">
              <h2 className="text-6xl font-bold text-black mb-8 leading-tight">
                One platform,
                <br />
                <span className="text-purple-600">infinite possibilities</span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
                Everything you need to deploy and manage voice AI experiences in physical spaces.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="space-y-0 mb-32">
            {platformLayers.map((layer, index) => (
              <ScrollAnimationWrapper key={index} animation="fade-in-up" delay={index * 100}>
                <div className="border-t-2 border-black pt-8">
                  <div className="text-6xl font-bold text-purple-600 mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-4">{layer.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">{layer.description}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <ScrollAnimationWrapper animation="fade-in-up">
            <div className="border-t-2 border-black pt-16 mt-16">
              <h3 className="text-4xl font-bold text-black mb-8">
                Ready to transform your space?
              </h3>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl">
                Join organizations already using Discursa to create memorable experiences.
              </p>
              <div className="flex gap-6">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 font-semibold text-lg transition-all duration-300">
                  Schedule Demo
                </button>
                <button className="border-2 border-black text-black hover:bg-black hover:text-white px-12 py-6 font-semibold text-lg transition-all duration-300">
                  Explore Platform
                </button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default VoicePlatform;
