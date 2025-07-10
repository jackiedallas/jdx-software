// Global type declarations for analytics and tracking

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId?: string | Date,
      config?: Record<string, unknown>
    ) => void;
    fbq?: (
      command: 'track' | 'trackCustom' | 'init',
      eventName: string,
      parameters?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, unknown> }
    ) => void;
    umami?: {
      track: (eventName: string, properties?: Record<string, unknown>) => void;
    };
    mixpanel?: {
      init: (token: string) => void;
      track: (eventName: string, properties?: Record<string, unknown>) => void;
      identify: (userId: string) => void;
      people: {
        set: (properties: Record<string, unknown>) => void;
      };
    };
    posthog?: {
      init: (apiKey: string, options?: Record<string, unknown>) => void;
      capture: (eventName: string, properties?: Record<string, unknown>) => void;
      identify: (userId: string, traits?: Record<string, unknown>) => void;
    };
    fathom?: {
      trackGoal: (goalId: string, value?: number) => void;
      trackPageview: (options?: { url?: string }) => void;
    };
    sa_event?: (eventName: string, properties?: Record<string, unknown>) => void;
    sa_pageview?: (path: string) => void;
  }
}

export {};