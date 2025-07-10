# Alternative Analytics Setup Guide

## 🎯 Overview

This guide covers the comprehensive analytics system I've implemented for your website, which provides multiple privacy-focused alternatives to Google Analytics and Vercel Analytics.

## 📊 Available Analytics Providers

### 1. **Plausible Analytics** (Recommended)
- **Privacy-focused**: GDPR compliant, no cookies, no personal data
- **Lightweight**: <1KB script size
- **Cost**: $9/month for 10K monthly pageviews
- **Setup**: Already configured in your code

```typescript
// Already implemented in AnalyticsProvider.tsx
plausible: { domain: 'jdxsoftware.com' }
```

### 2. **Self-Hosted Analytics** (Full Control)
- **Privacy**: Complete data ownership
- **Cost**: Only hosting costs
- **Features**: Custom dashboard, real-time data
- **Setup**: API endpoint already created at `/api/analytics`

### 3. **Umami Analytics** (Open Source)
- **Self-hosted**: Open source alternative
- **Privacy-focused**: GDPR compliant
- **Cost**: Free (self-hosted) or $20/month (cloud)

```typescript
// To enable:
umami: { 
  websiteId: 'your-umami-website-id',
  apiUrl: 'https://your-umami-instance.com' // optional for self-hosted
}
```

### 4. **Fathom Analytics** (Simple & Private)
- **Privacy-focused**: No cookies, GDPR compliant
- **Simple**: Clean, minimal interface
- **Cost**: $14/month for 100K monthly pageviews

```typescript
// To enable:
fathom: { siteId: 'your-fathom-site-id' }
```

### 5. **PostHog** (Product Analytics)
- **Feature-rich**: Events, funnels, heatmaps, A/B testing
- **Open source**: Self-hostable
- **Cost**: Free tier available, then $0.00045/event

```typescript
// To enable:
posthog: { 
  apiKey: 'your-posthog-api-key',
  apiHost: 'https://app.posthog.com' // or your self-hosted instance
}
```

### 6. **Simple Analytics** (Privacy-focused)
- **Privacy**: GDPR compliant, no cookies
- **Simple**: Clean interface, essential metrics
- **Cost**: €19/month for 100K monthly pageviews

```typescript
// To enable:
simple: true
```

### 7. **Mixpanel** (Event Analytics)
- **Event-focused**: Detailed user behavior tracking
- **Advanced**: Funnels, cohorts, retention analysis
- **Cost**: Free tier, then usage-based pricing

```typescript
// To enable:
mixpanel: { token: 'your-mixpanel-token' }
```

## 🚀 Quick Setup Instructions

### Step 1: Choose Your Analytics Provider(s)

Edit `/src/app/components/AnalyticsProvider.tsx`:

```typescript
const analytics = initializeAnalytics({
  providers: {
    // Option 1: Privacy-focused (Recommended)
    plausible: { domain: 'jdxsoftware.com' },
    
    // Option 2: Self-hosted (Full control)
    selfHosted: { apiEndpoint: '/api/analytics' },
    
    // Option 3: Multiple providers (belt and suspenders)
    plausible: { domain: 'jdxsoftware.com' },
    fathom: { siteId: 'ABCDEFG' },
    selfHosted: { apiEndpoint: '/api/analytics' },
  },
  enableConsentMode: true,
  enableDebugMode: process.env.NODE_ENV === 'development'
});
```

### Step 2: Set Up Your Chosen Provider

#### For Plausible:
1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain: `jdxsoftware.com`
3. The script is already configured in your code

#### For Umami:
1. Self-host: [umami.is/docs/install](https://umami.is/docs/install)
2. Or use cloud: [cloud.umami.is](https://cloud.umami.is)
3. Create a website and get your website ID

#### For Fathom:
1. Sign up at [usefathom.com](https://usefathom.com)
2. Add your domain and get your site ID

#### For PostHog:
1. Sign up at [posthog.com](https://posthog.com)
2. Get your API key from project settings

### Step 3: Configure Consent Management

The consent banner is already implemented. Customize it in `/src/components/analytics/ConsentBanner.tsx`:

```typescript
<ConsentBanner 
  position="bottom" 
  showDetailsLink={true}
  companyName="JDX Software"
/>
```

## 📈 Using Analytics in Your Code

### Track Page Views (Automatic)
Page views are tracked automatically via `usePageTracking()` hook.

### Track Custom Events

```typescript
import { useAnalytics } from '@/hooks/useAnalytics';

function ContactForm() {
  const { track, trackFormSubmit } = useAnalytics();
  
  const handleSubmit = (formData) => {
    // Track form submission
    trackFormSubmit('contact_form', {
      source: 'homepage',
      fields: ['name', 'email', 'message']
    });
    
    // Track custom event
    track('lead_generated', {
      value: 100,
      source: 'contact_form'
    });
  };
}
```

### Track Social Shares

```typescript
import { useAnalytics } from '@/hooks/useAnalytics';

function ShareButton() {
  const { trackSocialShare } = useAnalytics();
  
  const handleShare = (platform) => {
    trackSocialShare(platform, window.location.href, document.title);
  };
}
```

### Track Conversions

```typescript
const { trackConversion } = useAnalytics();

// Track a $500 conversion
trackConversion(500, 'USD');
```

## 📊 Self-Hosted Analytics Dashboard

Access your self-hosted analytics at `/api/analytics`:

```bash
# Get analytics for last 7 days
curl https://jdxsoftware.com/api/analytics?days=7

# Returns:
{
  "summary": {
    "pageViews": 1250,
    "uniqueSessions": 850,
    "uniqueUsers": 650,
    "averageSessionDuration": 120000,
    "bounceRate": 45.2
  },
  "topPages": [
    { "page": "/", "views": 450 },
    { "page": "/about", "views": 200 }
  ],
  "topReferrers": [
    { "referrer": "google.com", "visits": 400 },
    { "referrer": "twitter.com", "visits": 150 }
  ],
  "topCountries": [
    { "country": "US", "visits": 600 },
    { "country": "CA", "visits": 200 }
  ]
}
```

## 🛡️ Privacy Compliance

### GDPR Compliance
- Consent banner implemented
- User can opt-out anytime
- No personal data collected without consent
- Data retention controls

### Cookie-Free Options
- Plausible: No cookies
- Fathom: No cookies
- Simple Analytics: No cookies
- Self-hosted: Your control

### Data Ownership
- Self-hosted: 100% your data
- Privacy-focused providers: Anonymized data
- No data sharing with third parties

## 🔧 Advanced Configuration

### Multiple Providers
```typescript
// Send data to multiple providers for redundancy
providers: {
  plausible: { domain: 'jdxsoftware.com' },
  fathom: { siteId: 'ABCDEFG' },
  selfHosted: { apiEndpoint: '/api/analytics' }
}
```

### Environment-Based Setup
```typescript
providers: {
  ...(process.env.NODE_ENV === 'production' && {
    plausible: { domain: 'jdxsoftware.com' }
  }),
  ...(process.env.ENABLE_DETAILED_ANALYTICS && {
    posthog: { apiKey: process.env.POSTHOG_API_KEY }
  })
}
```

### Custom Event Types
```typescript
// Track business-specific events
track('demo_requested', { 
  industry: 'fintech',
  company_size: '50-100',
  source: 'homepage_cta'
});

track('pricing_viewed', {
  plan: 'enterprise',
  duration: '30s'
});

track('feature_used', {
  feature: 'code_export',
  user_type: 'trial'
});
```

## 📱 Performance Impact

### Script Sizes:
- **Plausible**: <1KB
- **Fathom**: <1KB  
- **Simple Analytics**: <1KB
- **Umami**: ~2KB
- **PostHog**: ~20KB (feature-rich)
- **Self-hosted**: 0KB (no external scripts)

### Loading Strategy:
All scripts load asynchronously and don't block page rendering.

## 💰 Cost Comparison

| Provider | Free Tier | Paid Plans | Features |
|----------|-----------|------------|----------|
| **Plausible** | No | $9/month (10K views) | Privacy-focused, lightweight |
| **Fathom** | No | $14/month (100K views) | Simple, cookie-free |
| **Simple Analytics** | No | €19/month (100K views) | Minimal, privacy-focused |
| **Umami** | Yes (self-hosted) | $20/month (cloud) | Open source |
| **PostHog** | Yes (1M events/month) | Usage-based | Full product analytics |
| **Self-hosted** | Yes | Hosting costs only | Complete control |

## 🎯 Recommended Setup

### For Privacy-First Approach:
```typescript
providers: {
  plausible: { domain: 'jdxsoftware.com' },
  selfHosted: { apiEndpoint: '/api/analytics' }
}
```

### For Detailed Analytics:
```typescript
providers: {
  posthog: { apiKey: 'your-api-key' },
  selfHosted: { apiEndpoint: '/api/analytics' }
}
```

### For Budget-Conscious:
```typescript
providers: {
  selfHosted: { apiEndpoint: '/api/analytics' }
}
```

## 🚀 Getting Started

1. **Choose your provider(s)** from the list above
2. **Sign up** for your chosen service(s)
3. **Update the configuration** in `AnalyticsProvider.tsx`
4. **Deploy** your changes
5. **Monitor** your analytics dashboard

Your analytics system is now ready and provides enterprise-level insights while respecting user privacy!