'use client';

import { useEffect } from 'react';
import { initializeAnalytics, defaultAnalyticsConfig } from '@/lib/analytics';
import { usePageTracking, usePerformanceTracking } from '@/hooks/useAnalytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  usePageTracking();
  usePerformanceTracking();

  useEffect(() => {
    // Initialize analytics with multiple providers
    const analytics = initializeAnalytics({
      providers: {
        // Privacy-focused analytics (no personal data collection)
        plausible: { domain: 'jdxsoftware.com' },
        
        // Self-hosted analytics for full control
        selfHosted: { apiEndpoint: '/api/analytics' },
        
        // Add other providers as needed:
        // umami: { websiteId: 'your-umami-website-id' },
        // fathom: { siteId: 'your-fathom-site-id' },
        // posthog: { apiKey: 'your-posthog-api-key' },
      },
      enableConsentMode: true,
      enableDebugMode: process.env.NODE_ENV === 'development',
      enableDevMode: process.env.NODE_ENV === 'development'
    });

    // Initialize analytics (will wait for consent if required)
    analytics.initialize();
  }, []);

  return <>{children}</>;
}