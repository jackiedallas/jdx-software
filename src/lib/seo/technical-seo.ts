// Technical SEO Utilities
// Core Web Vitals, performance optimization, and technical SEO functions

import { seoConfig } from './config';

// Core Web Vitals measurement
export interface CoreWebVitals {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
}

export const measureCoreWebVitals = (): Promise<CoreWebVitals> => {
  return new Promise((resolve) => {
    const vitals: CoreWebVitals = {
      fcp: null,
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null
    };

    // Measure using Performance Observer API
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          vitals.fcp = fcpEntry.startTime;
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          vitals.lcp = lastEntry.startTime;
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0];
        if (firstEntry) {
          vitals.fid = firstEntry.processingStart - firstEntry.startTime;
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
          if (!layoutShiftEntry.hadRecentInput && layoutShiftEntry.value) {
            clsValue += layoutShiftEntry.value;
          }
        });
        vitals.cls = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntries = performance.getEntriesByType('navigation');
      if (navigationEntries.length > 0) {
        const navEntry = navigationEntries[0] as PerformanceNavigationTiming;
        vitals.ttfb = navEntry.responseStart - navEntry.requestStart;
      }
    }

    // Fallback measurements
    setTimeout(() => {
      if (!vitals.fcp || !vitals.lcp) {
        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry && !vitals.fcp) {
          vitals.fcp = fcpEntry.startTime;
        }
      }
      
      resolve(vitals);
    }, 5000);
  });
};

// Image optimization utilities
export interface ImageOptimizationOptions {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export const generateOptimizedImageProps = (options: ImageOptimizationOptions) => {
  const { src, alt, width, height, priority = false, quality = 75, format = 'webp', sizes, placeholder, blurDataURL } = options;
  
  return {
    src,
    alt,
    width,
    height,
    priority,
    quality,
    format,
    sizes: sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    placeholder: placeholder || 'blur',
    blurDataURL: blurDataURL || `data:image/svg+xml;base64,${generateBlurDataURL(width || 400, height || 300)}`,
    loading: priority ? 'eager' : 'lazy',
    decoding: 'async'
  };
};

// Generate blur data URL for image placeholders
export const generateBlurDataURL = (width: number, height: number): string => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#gradient)" />
    </svg>
  `;
  
  return btoa(svg);
};

// Font optimization utilities
export const generateFontPreloadTags = () => {
  return [
    {
      rel: 'preload',
      href: '/fonts/inter-var.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous'
    },
    {
      rel: 'preload',
      href: '/fonts/inter-var-italic.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous'
    }
  ];
};

// Critical CSS inlining
export const inlineCriticalCSS = (css: string) => {
  return `
    <style>
      ${css}
    </style>
  `;
};

// Resource hints for performance
export const generateResourceHints = () => {
  return [
    // DNS prefetch
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
    { rel: 'dns-prefetch', href: '//www.googletagmanager.com' },
    { rel: 'dns-prefetch', href: '//connect.facebook.net' },
    
    // Preconnect to important origins
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    
    // Prefetch likely next pages
    { rel: 'prefetch', href: '/about' },
    { rel: 'prefetch', href: '/services' },
    { rel: 'prefetch', href: '/contact' }
  ];
};

// Generate security headers
export const generateSecurityHeaders = () => {
  return [
    {
      key: 'X-DNS-Prefetch-Control',
      value: 'on'
    },
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },
    {
      key: 'X-Frame-Options',
      value: 'DENY'
    },
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block'
    },
    {
      key: 'Referrer-Policy',
      value: 'strict-origin-when-cross-origin'
    },
    {
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=(), payment=()'
    },
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=31536000; includeSubDomains'
    }
  ];
};

// Service Worker registration for PWA
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};

// Performance monitoring
export const trackPerformanceMetrics = () => {
  if ('PerformanceObserver' in window) {
    measureCoreWebVitals().then((vitals) => {
      // Send to analytics
      if (window.gtag) {
        window.gtag('event', 'core_web_vitals', {
          fcp: vitals.fcp,
          lcp: vitals.lcp,
          fid: vitals.fid,
          cls: vitals.cls,
          ttfb: vitals.ttfb
        });
      }
    });
  }
};

// Sitemap generation utilities
export interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  alternateLanguages?: Array<{
    hrefLang: string;
    href: string;
  }>;
}

export const generateSitemapXML = (entries: SitemapEntry[]): string => {
  const urlEntries = entries.map(entry => {
    const alternates = entry.alternateLanguages?.map(alt => 
      `    <xhtml:link rel="alternate" hreflang="${alt.hrefLang}" href="${alt.href}" />`
    ).join('\n') || '';
    
    return `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
${alternates}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`;
};

// Robots.txt generation
export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /private/

# Sitemap
Sitemap: ${seoConfig.site.url}/sitemap.xml

# Crawl-delay for specific bots
User-agent: Googlebot
Crawl-delay: 1

User-agent: Bingbot
Crawl-delay: 2

# Block bad bots
User-agent: SemrushBot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /`;
};

// URL canonicalization utilities
export const canonicalizeUrl = (url: string): string => {
  const urlObj = new URL(url, seoConfig.site.url);
  
  // Remove trailing slash except for root
  if (urlObj.pathname.length > 1 && urlObj.pathname.endsWith('/')) {
    urlObj.pathname = urlObj.pathname.slice(0, -1);
  }
  
  // Remove common tracking parameters
  const trackingParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid', 'gclid'];
  trackingParams.forEach(param => {
    urlObj.searchParams.delete(param);
  });
  
  return urlObj.toString();
};

// Schema.org validation
export const validateStructuredData = (data: Record<string, unknown>): boolean => {
  try {
    // Basic validation - check required fields
    if (!data['@context'] || !data['@type']) {
      return false;
    }
    
    // Validate JSON structure
    JSON.stringify(data);
    return true;
  } catch (error) {
    console.error('Invalid structured data:', error);
    return false;
  }
};