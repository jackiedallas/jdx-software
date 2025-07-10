// React Hook for Analytics
'use client';

import { useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getAnalytics } from '@/lib/analytics';

export function useAnalytics() {
  const analytics = getAnalytics();

  // Track page views automatically
  const trackPageView = useCallback((path?: string) => {
    if (analytics) {
      analytics.pageView(path);
    }
  }, [analytics]);

  // Track events
  const track = useCallback((event: string, properties?: Record<string, any>) => {
    if (analytics) {
      analytics.track(event, properties);
    }
  }, [analytics]);

  // Track user identification
  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    if (analytics) {
      analytics.identify(userId, traits);
    }
  }, [analytics]);

  // Convenience methods
  const trackConversion = useCallback((value: number, currency?: string) => {
    if (analytics) {
      analytics.trackConversion(value, currency);
    }
  }, [analytics]);

  const trackFormSubmit = useCallback((formName: string, formData?: Record<string, any>) => {
    if (analytics) {
      analytics.trackFormSubmit(formName, formData);
    }
  }, [analytics]);

  const trackDownload = useCallback((fileName: string, fileType: string) => {
    if (analytics) {
      analytics.trackDownload(fileName, fileType);
    }
  }, [analytics]);

  const trackError = useCallback((error: string, context?: Record<string, any>) => {
    if (analytics) {
      analytics.trackError(error, context);
    }
  }, [analytics]);

  const trackSocialShare = useCallback((platform: string, url: string, title: string) => {
    if (analytics) {
      analytics.trackSocialShare(platform, url, title);
    }
  }, [analytics]);

  const trackSearch = useCallback((query: string, results: number) => {
    if (analytics) {
      analytics.trackSearch(query, results);
    }
  }, [analytics]);

  const trackPerformance = useCallback((metrics: Record<string, number>) => {
    if (analytics) {
      analytics.trackPerformance(metrics);
    }
  }, [analytics]);

  return {
    track,
    trackPageView,
    identify,
    trackConversion,
    trackFormSubmit,
    trackDownload,
    trackError,
    trackSocialShare,
    trackSearch,
    trackPerformance
  };
}

// Hook for automatic page view tracking
export function usePageTracking() {
  const pathname = usePathname();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname, trackPageView]);
}

// Hook for form tracking
export function useFormTracking(formName: string) {
  const { trackFormSubmit, trackError } = useAnalytics();

  const trackSubmit = useCallback((formData?: Record<string, any>) => {
    trackFormSubmit(formName, formData);
  }, [formName, trackFormSubmit]);

  const trackValidationError = useCallback((field: string, error: string) => {
    trackError(`Form validation error in ${formName}`, { field, error });
  }, [formName, trackError]);

  return {
    trackSubmit,
    trackValidationError
  };
}

// Hook for performance tracking
export function usePerformanceTracking() {
  const { trackPerformance } = useAnalytics();

  useEffect(() => {
    // Track Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          trackPerformance({ fcp: fcpEntry.startTime });
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          trackPerformance({ lcp: lastEntry.startTime });
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0] as any;
        if (firstEntry) {
          trackPerformance({ 
            fid: firstEntry.processingStart - firstEntry.startTime 
          });
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        trackPerformance({ cls: clsValue });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntries = performance.getEntriesByType('navigation');
      if (navigationEntries.length > 0) {
        const navEntry = navigationEntries[0] as PerformanceNavigationTiming;
        trackPerformance({
          ttfb: navEntry.responseStart - navEntry.requestStart,
          domLoaded: navEntry.domContentLoadedEventEnd - navEntry.navigationStart,
          windowLoaded: navEntry.loadEventEnd - navEntry.navigationStart
        });
      }
    }
  }, [trackPerformance]);
}