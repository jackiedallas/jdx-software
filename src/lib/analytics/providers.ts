// Alternative Analytics Providers
// Privacy-focused and self-hosted options

export interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp?: number;
  userId?: string;
  sessionId?: string;
  page?: string;
  referrer?: string;
  userAgent?: string;
}

export interface AnalyticsProvider {
  name: string;
  initialize: () => void;
  track: (event: AnalyticsEvent) => void;
  pageView: (path: string) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

// 1. Plausible Analytics (Privacy-focused, GDPR compliant)
export class PlausibleAnalytics implements AnalyticsProvider {
  name = 'Plausible';
  domain: string;
  
  constructor(domain: string) {
    this.domain = domain;
  }
  
  initialize() {
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://plausible.io/js/script.js';
    script.setAttribute('data-domain', this.domain);
    document.head.appendChild(script);
  }
  
  track(event: AnalyticsEvent) {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible(event.event, { props: event.properties });
    }
  }
  
  pageView(path: string) {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('pageview', { u: `${window.location.origin}${path}` });
    }
  }
  
  identify(userId: string, traits?: Record<string, any>) {
    // Plausible doesn't support user identification for privacy
    console.log('Plausible: User identification not supported for privacy');
  }
}

// 2. Umami Analytics (Open-source, self-hosted)
export class UmamiAnalytics implements AnalyticsProvider {
  name = 'Umami';
  websiteId: string;
  apiUrl: string;
  
  constructor(websiteId: string, apiUrl: string = 'https://umami.is') {
    this.websiteId = websiteId;
    this.apiUrl = apiUrl;
  }
  
  initialize() {
    const script = document.createElement('script');
    script.async = true;
    script.src = `${this.apiUrl}/script.js`;
    script.setAttribute('data-website-id', this.websiteId);
    document.head.appendChild(script);
  }
  
  track(event: AnalyticsEvent) {
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track(event.event, event.properties);
    }
  }
  
  pageView(path: string) {
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track('pageview', { url: path });
    }
  }
  
  identify(userId: string, traits?: Record<string, any>) {
    // Custom implementation for user tracking
    this.track({
      event: 'user_identified',
      properties: { userId, ...traits }
    });
  }
}

// 3. Simple Analytics (Privacy-focused, paid)
export class SimpleAnalytics implements AnalyticsProvider {
  name = 'Simple Analytics';
  
  initialize() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://scripts.simpleanalyticscdn.com/latest.js';
    document.head.appendChild(script);
  }
  
  track(event: AnalyticsEvent) {
    if (typeof window !== 'undefined' && (window as any).sa_event) {
      (window as any).sa_event(event.event, event.properties);
    }
  }
  
  pageView(path: string) {
    if (typeof window !== 'undefined' && (window as any).sa_pageview) {
      (window as any).sa_pageview(path);
    }
  }
  
  identify(userId: string, traits?: Record<string, any>) {
    // Simple Analytics doesn't support user identification
    console.log('Simple Analytics: User identification not supported');
  }
}

// 4. Mixpanel (Event-focused analytics)
export class MixpanelAnalytics implements AnalyticsProvider {
  name = 'Mixpanel';
  token: string;
  
  constructor(token: string) {
    this.token = token;
  }
  
  initialize() {
    const script = document.createElement('script');
    script.src = 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js';
    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).mixpanel) {
        (window as any).mixpanel.init(this.token);
      }
    };
    document.head.appendChild(script);
  }
  
  track(event: AnalyticsEvent) {
    if (typeof window !== 'undefined' && (window as any).mixpanel) {
      (window as any).mixpanel.track(event.event, event.properties);
    }
  }
  
  pageView(path: string) {
    if (typeof window !== 'undefined' && (window as any).mixpanel) {
      (window as any).mixpanel.track('Page View', { page: path });
    }
  }
  
  identify(userId: string, traits?: Record<string, any>) {
    if (typeof window !== 'undefined' && (window as any).mixpanel) {
      (window as any).mixpanel.identify(userId);
      if (traits) {
        (window as any).mixpanel.people.set(traits);
      }
    }
  }
}

// 5. PostHog (Open-source product analytics)
export class PostHogAnalytics implements AnalyticsProvider {
  name = 'PostHog';
  apiKey: string;
  apiHost: string;
  
  constructor(apiKey: string, apiHost: string = 'https://app.posthog.com') {
    this.apiKey = apiKey;
    this.apiHost = apiHost;
  }
  
  initialize() {
    const script = document.createElement('script');
    script.src = 'https://app.posthog.com/static/array.js';
    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).posthog) {
        (window as any).posthog.init(this.apiKey, {
          api_host: this.apiHost,
          capture_pageview: false // We'll handle this manually
        });
      }
    };
    document.head.appendChild(script);
  }
  
  track(event: AnalyticsEvent) {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture(event.event, event.properties);
    }
  }
  
  pageView(path: string) {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture('$pageview', { $current_url: path });
    }
  }
  
  identify(userId: string, traits?: Record<string, any>) {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.identify(userId, traits);
    }
  }
}

// 6. Self-hosted Analytics (Custom implementation)
export class SelfHostedAnalytics implements AnalyticsProvider {
  name = 'Self-hosted';
  apiEndpoint: string;
  
  constructor(apiEndpoint: string) {
    this.apiEndpoint = apiEndpoint;
  }
  
  initialize() {
    // No external scripts needed
    console.log('Self-hosted analytics initialized');
  }
  
  async track(event: AnalyticsEvent) {
    try {
      await fetch(`${this.apiEndpoint}/track`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...event,
          timestamp: Date.now(),
          sessionId: this.getSessionId(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          page: window.location.pathname
        })
      });
    } catch (error) {
      console.error('Analytics tracking failed:', error);
    }
  }
  
  pageView(path: string) {
    this.track({
      event: 'page_view',
      properties: { path }
    });
  }
  
  identify(userId: string, traits?: Record<string, any>) {
    this.track({
      event: 'user_identified',
      properties: { userId, ...traits }
    });
  }
  
  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }
}

// 7. Fathom Analytics (Privacy-focused, paid)
export class FathomAnalytics implements AnalyticsProvider {
  name = 'Fathom';
  siteId: string;
  
  constructor(siteId: string) {
    this.siteId = siteId;
  }
  
  initialize() {
    const script = document.createElement('script');
    script.src = 'https://cdn.usefathom.com/script.js';
    script.setAttribute('data-site', this.siteId);
    script.defer = true;
    document.head.appendChild(script);
  }
  
  track(event: AnalyticsEvent) {
    if (typeof window !== 'undefined' && (window as any).fathom) {
      (window as any).fathom.trackGoal(event.event, event.properties?.value || 0);
    }
  }
  
  pageView(path: string) {
    if (typeof window !== 'undefined' && (window as any).fathom) {
      (window as any).fathom.trackPageview({ url: path });
    }
  }
  
  identify(userId: string, traits?: Record<string, any>) {
    // Fathom doesn't support user identification for privacy
    console.log('Fathom: User identification not supported for privacy');
  }
}