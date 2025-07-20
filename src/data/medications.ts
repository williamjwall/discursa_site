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
    id: 'museum-interactive-docent',
    name: 'Cultural Information Assistant',
    category: 'museum',
    description: 'Voice-activated information points that provide detailed context about exhibits, artwork, and collections with curatorial-level expertise.',
    environment: 'Museums, galleries, art centers, cultural institutions',
    targetAudience: ['visitors', 'students', 'researchers', 'tourists'],
    features: ['Multi-language support', 'Contextual storytelling', 'Artifact recognition', 'Accessibility features'],
    voiceProfile: voiceProfiles[0],
    sampleInteractions: [
      'Tell me about this piece',
      'What period is this from?',
      'How was this work created?',
      'What\'s the historical context?'
    ]
  },
  {
    id: 'restaurant-storyteller',
    name: 'Hospitality Information Hub',
    category: 'restaurant',
    description: 'Voice-enabled service points that share menu information, ingredient details, preparation methods, and venue background.',
    environment: 'Restaurants, cafés, bars, food halls, hospitality venues',
    targetAudience: ['diners', 'food enthusiasts', 'tourists', 'locals'],
    features: ['Menu narration', 'Ingredient information', 'Preparation details', 'Pairing suggestions', 'Venue history'],
    voiceProfile: voiceProfiles[1],
    sampleInteractions: [
      'Tell me about today\'s menu',
      'What are the ingredients in this dish?',
      'Suggest a wine pairing',
      'How is this prepared?'
    ]
  },
  {
    id: 'tourism-guide',
    name: 'Digital Tourism Guide',
    category: 'tourism',
    description: 'Public kiosks offering directions, local facts, cultural stories, and insider recommendations for travelers.',
    environment: 'Tourist centers, airports, train stations, public squares',
    targetAudience: ['tourists', 'business travelers', 'locals', 'international visitors'],
    features: ['Multi-language support', 'Real-time directions', 'Cultural insights', 'Event recommendations'],
    voiceProfile: voiceProfiles[1],
    sampleInteractions: [
      'Where\'s the nearest metro station?',
      'What events are happening this weekend?',
      'Tell me about local customs',
      'Recommend hidden gems nearby'
    ]
  },
  {
    id: 'retail-brand-persona',
    name: 'Retail Brand Persona',
    category: 'retail',
    description: 'Voice assistants that embody brand personality, provide product information, and create memorable shopping experiences.',
    environment: 'Retail stores, showrooms, pop-up shops, flagship stores',
    targetAudience: ['shoppers', 'brand enthusiasts', 'potential customers'],
    features: ['Product recommendations', 'Brand storytelling', 'Inventory queries', 'Style advice'],
    voiceProfile: voiceProfiles[3],
    sampleInteractions: [
      'What\'s new in the collection?',
      'Tell me about this product\'s materials',
      'What sizes are available?',
      'Share the brand story'
    ]
  },
  {
    id: 'event-installation',
    name: 'Event Installation',
    category: 'events',
    description: 'Temporary voice booths for conferences, trade shows, and special events that engage attendees with interactive content.',
    environment: 'Conference centers, trade shows, festivals, exhibitions',
    targetAudience: ['attendees', 'exhibitors', 'sponsors', 'media'],
    features: ['Event schedule', 'Speaker bios', 'Networking facilitation', 'Sponsor content'],
    voiceProfile: voiceProfiles[3],
    sampleInteractions: [
      'What sessions are happening now?',
      'Tell me about the keynote speaker',
      'How do I connect with other attendees?',
      'What\'s the event wifi password?'
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