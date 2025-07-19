export interface VoiceProfile {
  id: string;
  name: string;
  voiceModel: string; // ElevenLabs voice ID
  tone: 'friendly' | 'formal' | 'playful' | 'historic' | 'professional';
  stability: number; // 0-1
  similarity: number; // 0-1  
  expressiveness: number; // 0-1
  template: 'educator' | 'narrator' | 'comic-relief' | 'guide' | 'custom';
  description: string;
}

export interface UseCase {
  id: string;
  name: string;
  category: 'museum' | 'restaurant' | 'tourism' | 'retail' | 'events';
  description: string;
  environment: string;
  targetAudience: string[];
  features: string[];
  voiceProfile?: VoiceProfile;
  sampleInteractions: string[];
}

export interface Deployment {
  id: string;
  name: string;
  location: string;
  status: 'active' | 'inactive' | 'scheduled';
  voiceProfile: VoiceProfile;
  contentSources: ContentSource[];
  analytics: DeploymentAnalytics;
  schedule: {
    startTime: string;
    endTime: string;
    timezone: string;
    activeDays: string[];
  };
}

export interface ContentSource {
  id: string;
  type: 'text' | 'script' | 'exhibit' | 'story' | 'faq';
  title: string;
  content: string;
  tags: string[];
  linkedObjects?: string[];
  lastUpdated: Date;
}

export interface DeploymentAnalytics {
  totalInteractions: number;
  avgInteractionLength: number;
  topQuestions: string[];
  engagementRate: number;
  dropOffPoints: string[];
  languageBreakdown: Record<string, number>;
  peakUsageHours: number[];
}

export interface PlatformFeature {
  id: string;
  name: string;
  category: 'voice-interface' | 'content-management' | 'persona-engine' | 'deployment-control' | 'analytics';
  description: string;
  capabilities: string[];
  benefits: string[];
} 