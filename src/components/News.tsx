import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const News: React.FC = () => {
  const articles = [
    {
      title: 'Voice AI in Museums: A New Era of Engagement',
      excerpt: 'How leading museums are using voice technology to create more immersive and accessible experiences.',
      date: '2024-01-15',
      readTime: '5 min read'
    },
    {
      title: 'Retail Revolution: Voice Commerce in Physical Stores',
      excerpt: 'The future of shopping experiences through intelligent voice interfaces in retail environments.',
      date: '2024-01-10',
      readTime: '4 min read'
    },
    {
      title: 'Restaurant Technology: Voice Orders and Beyond',
      excerpt: 'How restaurants are leveraging voice AI to enhance customer service and operational efficiency.',
      date: '2024-01-05',
      readTime: '6 min read'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimationWrapper animation="fade-in-up">
            <div className="mb-24">
              <h2 className="text-6xl font-bold text-black mb-8 leading-tight">
                Latest from
                <br />
                <span className="text-purple-600">Discursa</span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
                Insights, updates, and stories from the future of voice AI in physical spaces.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-3 gap-12 mb-32">
            {articles.map((article, index) => (
              <ScrollAnimationWrapper key={article.title} animation="fade-in-up" delay={index * 150}>
                <article className="border-t-2 border-black pt-8">
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-purple-600 font-semibold uppercase tracking-wide mb-4">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-4 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                      Read More →
                    </button>
                  </div>
                </article>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <ScrollAnimationWrapper animation="fade-in-up">
            <div className="text-center border-t-2 border-black pt-16">
              <h3 className="text-4xl font-bold text-black mb-8">
                Stay updated with Discursa
              </h3>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Get the latest insights on voice AI, industry trends, and platform updates delivered to your inbox.
              </p>
              <div className="flex gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 border-2 border-black text-black placeholder-gray-500 focus:outline-none focus:border-purple-600"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 font-semibold transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default News;
