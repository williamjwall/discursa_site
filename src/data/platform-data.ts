import { UseCase, VoiceProfile, PlatformFeature } from '../types';

export const voiceProfiles: VoiceProfile[] = [
  {
    id: 'museum-docent',
    name: 'Museum Docent',
    voiceModel: 'ElevenLabs-Professional',
    tone: 'formal',
    stability: 0.8,
    similarity: 0.7,
    expressiveness: 0.6,
    template: 'educator',
    description: 'Authoritative and knowledgeable voice perfect for explaining exhibits and historical contexts'
  },
  {
    id: 'friendly-guide',
    name: 'Friendly Guide',
    voiceModel: 'ElevenLabs-Conversational',
    tone: 'friendly',
    stability: 0.7,
    similarity: 0.8,
    expressiveness: 0.8,
    template: 'guide',
    description: 'Warm and approachable voice ideal for tourism and hospitality environments'
  },
  {
    id: 'historic-character',
    name: 'Historic Character',
    voiceModel: 'ElevenLabs-Character',
    tone: 'historic',
    stability: 0.9,
    similarity: 0.6,
    expressiveness: 0.9,
    template: 'narrator',
    description: 'Immersive character voice that brings historical figures and stories to life'
  },
  {
    id: 'playful-host',
    name: 'Playful Host',
    voiceModel: 'ElevenLabs-Energetic',
    tone: 'playful',
    stability: 0.6,
    similarity: 0.7,
    expressiveness: 0.9,
    template: 'comic-relief',
    description: 'Engaging and entertaining voice perfect for interactive experiences and events'
  }
];

export const useCases: UseCase[] = [
  {
    id: 'information-assistant',
    name: 'Information Assistant',
    category: 'museum',
    description: 'Voice-powered information delivery that answers questions, provides explanations, and guides users through content naturally.',
    environment: 'Any physical space requiring information delivery',
    targetAudience: ['visitors', 'customers', 'guests', 'users'],
    features: ['Natural conversation', 'Multi-language support', 'Content management', 'Analytics tracking'],
    voiceProfile: voiceProfiles[0],
    sampleInteractions: [
      'Tell me about this',
      'How does this work?',
      'What are my options?',
      'Where can I find more information?'
    ]
  },
  {
    id: 'customer-concierge',
    name: 'Customer Concierge',
    category: 'retail',
    description: 'Interactive voice concierge that provides personalized assistance, recommendations, and support to enhance customer experience.',
    environment: 'Retail, hospitality, service environments',
    targetAudience: ['customers', 'guests', 'visitors', 'clients'],
    features: ['Personalized recommendations', 'Service assistance', 'Brand storytelling', 'Real-time support'],
    voiceProfile: voiceProfiles[1],
    sampleInteractions: [
      'What do you recommend?',
      'Can you help me find something?',
      'Tell me about your services',
      'What are the popular options?'
    ]
  },
  {
    id: 'wayfinding-guide',
    name: 'Wayfinding Guide',
    category: 'tourism',
    description: 'Voice-enabled navigation and location assistance that helps users find their way and discover nearby services.',
    environment: 'Public spaces, large facilities, campuses',
    targetAudience: ['visitors', 'travelers', 'staff', 'students'],
    features: ['Directional guidance', 'Location services', 'Facility information', 'Emergency assistance'],
    voiceProfile: voiceProfiles[1],
    sampleInteractions: [
      'How do I get to the main entrance?',
      'Where is the nearest restroom?',
      'What services are available here?',
      'Can you give me directions?'
    ]
  },
  {
    id: 'brand-ambassador',
    name: 'Brand Ambassador',
    category: 'retail',
    description: 'Voice interface that embodies brand personality, shares company values, and creates memorable brand interactions.',
    environment: 'Corporate spaces, showrooms, exhibitions',
    targetAudience: ['customers', 'partners', 'visitors', 'prospects'],
    features: ['Brand voice consistency', 'Company storytelling', 'Product expertise', 'Engagement tracking'],
    voiceProfile: voiceProfiles[3],
    sampleInteractions: [
      'Tell me about your company',
      'What makes you different?',
      'How can you help me?',
      'What are your core values?'
    ]
  },
  {
    id: 'self-service-kiosk',
    name: 'Self-Service Kiosk',
    category: 'events',
    description: 'Voice-activated self-service solution that handles routine tasks, processes requests, and provides 24/7 assistance.',
    environment: 'Service centers, lobbies, public facilities',
    targetAudience: ['users', 'customers', 'residents', 'employees'],
    features: ['Task automation', 'Request processing', '24/7 availability', 'Multi-modal interaction'],
    voiceProfile: voiceProfiles[0],
    sampleInteractions: [
      'I need help with a request',
      'How do I complete this process?',
      'What are the requirements?',
      'Can you process this for me?'
    ]
  }
];

export const platformFeatures: PlatformFeature[] = [
  {
    id: 'voice-interface',
    name: 'Natural Voice Interface',
    category: 'voice-interface',
    description: 'ElevenLabs-powered voice technology that creates natural, responsive conversations',
    capabilities: [
      'Natural language processing',
      'Smart fallback for confusing queries',
      'Customizable personality and tone',
      'Multi-language support',
      'Real-time voice generation'
    ],
    benefits: [
      'Feels alive and responsive',
      'Reduces user frustration',
      'Matches brand personality',
      'Serves diverse audiences',
      'Always up-to-date content'
    ]
  },
  {
    id: 'content-management',
    name: 'Content Management System',
    category: 'content-management',
    description: 'Intuitive admin interface for organizing and managing all voice content',
    capabilities: [
      'Upload text, scripts, exhibits, stories',
      'Organize by topic, location, or theme',
      'Link responses to specific objects',
      'Version control and rollback',
      'Bulk content updates'
    ],
    benefits: [
      'No technical expertise required',
      'Complete content control',
      'Easy organization',
      'Quick updates across locations',
      'Content consistency'
    ]
  },
  {
    id: 'persona-engine',
    name: 'AI Persona Engine',
    category: 'persona-engine',
    description: 'Advanced voice customization system for creating unique personalities',
    capabilities: [
      'Choose voice models and emotional tones',
      'Adjust stability, similarity, expressiveness',
      'Apply personality templates',
      'Custom voice training',
      'A/B testing different personas'
    ],
    benefits: [
      'Perfect brand alignment',
      'Memorable experiences',
      'Emotional connection',
      'Differentiated presence',
      'Optimized engagement'
    ]
  },
  {
    id: 'deployment-control',
    name: 'Deployment Control Center',
    category: 'deployment-control',
    description: 'Centralized platform for managing voice experiences across all locations',
    capabilities: [
      'Push updates to multiple devices',
      'Assign different personalities per location',
      'Set availability hours and schedules',
      'Remote device monitoring',
      'Instant content deployment'
    ],
    benefits: [
      'Scale efficiently',
      'Location-specific customization',
      'Always operational',
      'Reduced maintenance',
      'Consistent experiences'
    ]
  },
  {
    id: 'analytics-insights',
    name: 'Analytics & Insights',
    category: 'analytics',
    description: 'Comprehensive analytics platform for understanding user engagement and optimizing experiences',
    capabilities: [
      'Track interactions and engagement',
      'Identify popular content and drop-off points',
      'Export detailed reports',
      'Real-time usage monitoring',
      'ROI measurement tools'
    ],
    benefits: [
      'Data-driven optimization',
      'Prove value and impact',
      'Understand user needs',
      'Improve content strategy',
      'Justify investments'
    ]
  }
]; 