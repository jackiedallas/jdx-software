// Analytics Manager - Multi-provider support with fallbacks
import { 
  AnalyticsProvider, 
  AnalyticsEvent,
  PlausibleAnalytics,
  UmamiAnalytics,
  SimpleAnalytics,
  MixpanelAnalytics,
  PostHogAnalytics,
  SelfHostedAnalytics,
  FathomAnalytics
} from './providers';

export interface AnalyticsConfig {
  providers: {
    plausible?: { domain: string };
    umami?: { websiteId: string; apiUrl?: string };
    simple?: boolean;
    mixpanel?: { token: string };
    posthog?: { apiKey: string; apiHost?: string };
    selfHosted?: { apiEndpoint: string };
    fathom?: { siteId: string };
  };
  enableConsentMode?: boolean;
  enableDebugMode?: boolean;
  enableDevMode?: boolean;
}

class AnalyticsManager {
  private providers: AnalyticsProvider[] = [];
  private initialized = false;
  private config: AnalyticsConfig;
  private consentGiven = false;
  private eventQueue: AnalyticsEvent[] = [];

  constructor(config: AnalyticsConfig) {
    this.config = config;
    this.initializeProviders();
  }

  private initializeProviders() {
    const { providers } = this.config;

    if (providers.plausible) {
      this.providers.push(new PlausibleAnalytics(providers.plausible.domain));
    }

    if (providers.umami) {
      this.providers.push(new UmamiAnalytics(
        providers.umami.websiteId,
        providers.umami.apiUrl
      ));
    }

    if (providers.simple) {
      this.providers.push(new SimpleAnalytics());
    }

    if (providers.mixpanel) {
      this.providers.push(new MixpanelAnalytics(providers.mixpanel.token));
    }

    if (providers.posthog) {
      this.providers.push(new PostHogAnalytics(
        providers.posthog.apiKey,
        providers.posthog.apiHost
      ));
    }

    if (providers.selfHosted) {
      this.providers.push(new SelfHostedAnalytics(providers.selfHosted.apiEndpoint));
    }

    if (providers.fathom) {
      this.providers.push(new FathomAnalytics(providers.fathom.siteId));
    }
  }

  async initialize() {
    if (this.initialized) return;

    // Check if we're in development mode
    if (this.config.enableDevMode && process.env.NODE_ENV === 'development') {
      console.log('Analytics: Development mode - tracking disabled');
      return;
    }

    // Check for consent if required
    if (this.config.enableConsentMode && !this.consentGiven) {
      console.log('Analytics: Waiting for consent');
      return;
    }

    // Initialize all providers
    for (const provider of this.providers) {
      try {
        await provider.initialize();
        if (this.config.enableDebugMode) {
          console.log(`Analytics: ${provider.name} initialized`);
        }
      } catch (error) {
        console.error(`Analytics: Failed to initialize ${provider.name}:`, error);
      }
    }

    this.initialized = true;

    // Process queued events
    this.processEventQueue();
  }

  giveConsent() {
    this.consentGiven = true;
    if (!this.initialized) {
      this.initialize();
    }
  }

  revokeConsent() {
    this.consentGiven = false;
    this.eventQueue = [];
  }

  track(event: string, properties?: Record<string, any>) {
    const analyticsEvent: AnalyticsEvent = {
      event,
      properties,
      timestamp: Date.now(),
      page: typeof window !== 'undefined' ? window.location.pathname : undefined,
      referrer: typeof document !== 'undefined' ? document.referrer : undefined,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined
    };

    if (!this.initialized || !this.consentGiven) {
      this.eventQueue.push(analyticsEvent);
      return;
    }

    this.sendToProviders('track', analyticsEvent);
  }

  pageView(path?: string) {
    const currentPath = path || (typeof window !== 'undefined' ? window.location.pathname : '/');
    
    if (!this.initialized || !this.consentGiven) {
      this.eventQueue.push({
        event: 'page_view',
        properties: { path: currentPath },
        timestamp: Date.now()
      });
      return;
    }

    this.sendToProviders('pageView', currentPath);
  }

  identify(userId: string, traits?: Record<string, any>) {
    if (!this.initialized || !this.consentGiven) {
      this.eventQueue.push({
        event: 'identify',
        properties: { userId, ...traits },
        timestamp: Date.now()
      });
      return;
    }

    this.sendToProviders('identify', userId, traits);
  }

  private sendToProviders(method: string, ...args: any[]) {
    for (const provider of this.providers) {
      try {
        (provider as any)[method](...args);
        if (this.config.enableDebugMode) {
          console.log(`Analytics: ${provider.name} - ${method}`, args);
        }
      } catch (error) {
        console.error(`Analytics: ${provider.name} ${method} failed:`, error);
      }
    }
  }

  private processEventQueue() {
    while (this.eventQueue.length > 0) {
      const event = this.eventQueue.shift();
      if (!event) continue;

      if (event.event === 'page_view') {
        this.pageView(event.properties?.path);
      } else if (event.event === 'identify') {
        this.identify(event.properties?.userId, event.properties);
      } else {
        this.track(event.event, event.properties);
      }
    }
  }

  // Convenience methods for common events
  trackConversion(value: number, currency: string = 'USD') {
    this.track('conversion', { value, currency });
  }

  trackFormSubmit(formName: string, formData?: Record<string, any>) {
    this.track('form_submit', { formName, ...formData });
  }

  trackDownload(fileName: string, fileType: string) {
    this.track('download', { fileName, fileType });
  }

  trackError(error: string, context?: Record<string, any>) {
    this.track('error', { error, ...context });
  }

  trackSocialShare(platform: string, url: string, title: string) {
    this.track('social_share', { platform, url, title });
  }

  trackSearch(query: string, results: number) {
    this.track('search', { query, results });
  }

  trackPerformance(metrics: Record<string, number>) {
    this.track('performance', metrics);
  }
}

// Global analytics instance
let analytics: AnalyticsManager | null = null;

export function initializeAnalytics(config: AnalyticsConfig): AnalyticsManager {
  if (!analytics) {
    analytics = new AnalyticsManager(config);
  }
  return analytics;
}

export function getAnalytics(): AnalyticsManager | null {
  return analytics;
}

// Export types and providers
export * from './providers';
export { AnalyticsManager };

// Default configuration for JDX Software
export const defaultAnalyticsConfig: AnalyticsConfig = {
  providers: {
    plausible: { domain: 'jdxsoftware.com' },
    // Add other providers as needed
  },
  enableConsentMode: true,
  enableDebugMode: process.env.NODE_ENV === 'development',
  enableDevMode: process.env.NODE_ENV === 'development'
};