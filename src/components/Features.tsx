import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import { platformFeatures } from '../data/platform-data';

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimationWrapper animation="fade-in-up">
            <div className="mb-24">
              <h2 className="text-6xl font-bold text-black mb-8 leading-tight">
                Built for teams who need
                <br />
                <span className="text-purple-600">complete control</span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
                Professional-grade platform designed for organizations managing voice experiences across multiple locations.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {platformFeatures.map((feature, index) => (
              <ScrollAnimationWrapper key={feature.name} animation="fade-in-up" delay={index * 100}>
                <div className="border-t-2 border-black pt-8">
                  <div className="text-4xl font-bold text-purple-600 mb-6">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{feature.name}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                  
                  <div className="space-y-2">
                    {feature.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-purple-600 mr-3 mt-1">→</span>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <ScrollAnimationWrapper animation="fade-in-up">
            <div className="text-center mt-32">
              <h3 className="text-4xl font-bold text-black mb-8">
                Ready to get started?
              </h3>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                See how Discursa can transform your physical spaces with intelligent voice experiences.
              </p>
              <div className="flex gap-6 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 font-semibold text-lg transition-all duration-300">
                  Try Platform
                </button>
                <button className="border-2 border-black text-black hover:bg-black hover:text-white px-12 py-6 font-semibold text-lg transition-all duration-300">
                  View Features
                </button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Features;
