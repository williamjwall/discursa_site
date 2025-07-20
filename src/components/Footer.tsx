import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <img src="./assets/logo_discursa.png" alt="Discursa" className="h-24 w-auto mx-auto mb-8" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Give physical spaces a voice. Deploy and manage AI-driven voice experiences anywhere.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-3">
                <li><a href="#voice-interface" className="text-gray-400 hover:text-white transition-colors">Voice Interface</a></li>
                <li><a href="#cms" className="text-gray-400 hover:text-white transition-colors">Content Management</a></li>
                <li><a href="#personas" className="text-gray-400 hover:text-white transition-colors">Persona Engine</a></li>
                <li><a href="#analytics" className="text-gray-400 hover:text-white transition-colors">Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Use Cases</h4>
              <ul className="space-y-3">
                <li><a href="#museums" className="text-gray-400 hover:text-white transition-colors">Museums</a></li>
                <li><a href="#restaurants" className="text-gray-400 hover:text-white transition-colors">Restaurants</a></li>
                <li><a href="#tourism" className="text-gray-400 hover:text-white transition-colors">Tourism</a></li>
                <li><a href="#retail" className="text-gray-400 hover:text-white transition-colors">Retail</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#docs" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#samples" className="text-gray-400 hover:text-white transition-colors">Voice Samples</a></li>
                <li><a href="#api" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#support" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
                          <p className="text-gray-500">
                © 2024 Discursa. All rights reserved.
              </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
