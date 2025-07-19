import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Vision: React.FC = () => {
  const brandValues = [
    {
      title: 'Presence',
      description: 'Every installation feels alive, responsive, and aware of its environment.'
    },
    {
      title: 'Control',
      description: 'Teams maintain complete control over content, tone, and deployment.'
    },
    {
      title: 'Simplicity',
      description: 'Deploy and manage without technical expertise or complex setup.'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimationWrapper animation="fade-in-up">
            <div className="mb-24">
              <h2 className="text-6xl font-bold text-black mb-8 leading-tight">
                Where AI lives
                <br />
                <span className="text-purple-600">in the world</span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
                Most AI exists behind screens. Discursa brings intelligent conversation 
                directly into physical spaces where people gather and explore.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-16 mb-32">
            {brandValues.map((value, index) => (
              <ScrollAnimationWrapper key={index} animation="fade-in-up" delay={index * 100}>
                <div className="border-t-2 border-black pt-8">
                  <h3 className="text-3xl font-bold text-black mb-6">{value.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <ScrollAnimationWrapper animation="fade-in-up">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-black mb-8">
                Professional clarity meets startup speed
              </h3>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                No hype or jargon. Serious about tools, playful about experience.
              </p>
              <div className="flex gap-6 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 font-semibold text-lg transition-all duration-300">
                  Experience Platform
                </button>
                <button className="border-2 border-black text-black hover:bg-black hover:text-white px-12 py-6 font-semibold text-lg transition-all duration-300">
                  Talk to Team
                </button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Vision; 