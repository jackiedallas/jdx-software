// Social Media Optimization System
// Handles Open Graph, Twitter Cards, and social sharing optimization

import { seoConfig } from './config';

export interface SocialMediaConfig {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  publishedDate?: string;
  modifiedDate?: string;
  author?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  siteName?: string;
}

export interface TwitterCardConfig {
  card: 'summary' | 'summary_large_image' | 'app' | 'player';
  site: string;
  creator: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

// Open Graph Meta Tags Generation
export const generateOpenGraphTags = (config: SocialMediaConfig) => {
  const baseUrl = seoConfig.site.url;
  const defaultImage = `${baseUrl}${seoConfig.images.ogDefault}`;
  
  const tags = [
    { property: 'og:type', content: config.type || 'website' },
    { property: 'og:title', content: config.title },
    { property: 'og:description', content: config.description },
    { property: 'og:url', content: config.url },
    { property: 'og:site_name', content: config.siteName || seoConfig.site.name },
    { property: 'og:locale', content: config.locale || seoConfig.site.locale },
    { property: 'og:image', content: config.image || defaultImage },
    { property: 'og:image:alt', content: config.imageAlt || config.title },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/jpeg' },
  ];

  // Add article-specific tags
  if (config.type === 'article') {
    if (config.publishedDate) {
      tags.push({ property: 'article:published_time', content: config.publishedDate });
    }
    if (config.modifiedDate) {
      tags.push({ property: 'article:modified_time', content: config.modifiedDate });
    }
    if (config.author) {
      tags.push({ property: 'article:author', content: config.author });
    }
    if (config.section) {
      tags.push({ property: 'article:section', content: config.section });
    }
    if (config.tags) {
      config.tags.forEach(tag => {
        tags.push({ property: 'article:tag', content: tag });
      });
    }
  }

  // Add Facebook-specific tags
  if (seoConfig.social.facebook.appId) {
    tags.push({ property: 'fb:app_id', content: seoConfig.social.facebook.appId });
  }

  return tags;
};

// Twitter Card Meta Tags Generation
export const generateTwitterCardTags = (config: TwitterCardConfig) => {
  const baseUrl = seoConfig.site.url;
  const defaultImage = `${baseUrl}${seoConfig.images.ogDefault}`;

  return [
    { name: 'twitter:card', content: config.card },
    { name: 'twitter:site', content: config.site },
    { name: 'twitter:creator', content: config.creator },
    { name: 'twitter:title', content: config.title },
    { name: 'twitter:description', content: config.description },
    { name: 'twitter:image', content: config.image || defaultImage },
    { name: 'twitter:image:alt', content: config.imageAlt || config.title },
  ];
};

// Generate social media meta tags for a page
export const generateSocialMediaTags = (pageConfig: SocialMediaConfig) => {
  const ogTags = generateOpenGraphTags(pageConfig);
  const twitterTags = generateTwitterCardTags({
    card: 'summary_large_image',
    site: seoConfig.social.twitter.site,
    creator: seoConfig.social.twitter.creator,
    title: pageConfig.title,
    description: pageConfig.description,
    image: pageConfig.image,
    imageAlt: pageConfig.imageAlt
  });

  return [...ogTags, ...twitterTags];
};

// Social Sharing Buttons Component Data
export interface SocialShareButton {
  platform: string;
  url: string;
  text: string;
  icon: string;
  color: string;
  hoverColor: string;
}

export const generateSocialShareUrls = (config: {
  url: string;
  title: string;
  description: string;
  via?: string;
  hashtags?: string[];
}) => {
  const encodedUrl = encodeURIComponent(config.url);
  const encodedTitle = encodeURIComponent(config.title);
  const encodedDescription = encodeURIComponent(config.description);
  const encodedVia = config.via ? encodeURIComponent(config.via) : '';
  const encodedHashtags = config.hashtags?.join(',') || '';

  return {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=${encodedVia}&hashtags=${encodedHashtags}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    instagram: `https://www.instagram.com/create/story`, // Instagram doesn't support direct URL sharing, opens story creation
    hackernews: `https://news.ycombinator.com/submitlink?u=${encodedUrl}&t=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0D%0A${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    copy: config.url
  };
};

// Platform-specific image size generators
export const generatePlatformImages = (baseImageUrl: string) => {
  // In a real implementation, you'd use a service like Cloudinary or Vercel OG
  // to generate different sizes. For now, we'll define the URLs structure
  const baseUrl = seoConfig.site.url;
  
  return {
    facebook: {
      feed: `${baseUrl}/api/og/facebook/feed?image=${encodeURIComponent(baseImageUrl)}`, // 1200x630
      story: `${baseUrl}/api/og/facebook/story?image=${encodeURIComponent(baseImageUrl)}`, // 1080x1920
      profile: `${baseUrl}/api/og/facebook/profile?image=${encodeURIComponent(baseImageUrl)}` // 400x400
    },
    twitter: {
      card: `${baseUrl}/api/og/twitter/card?image=${encodeURIComponent(baseImageUrl)}`, // 1200x630
      profile: `${baseUrl}/api/og/twitter/profile?image=${encodeURIComponent(baseImageUrl)}` // 400x400
    },
    instagram: {
      feed: `${baseUrl}/api/og/instagram/feed?image=${encodeURIComponent(baseImageUrl)}`, // 1080x1080
      story: `${baseUrl}/api/og/instagram/story?image=${encodeURIComponent(baseImageUrl)}` // 1080x1920
    },
    linkedin: {
      post: `${baseUrl}/api/og/linkedin/post?image=${encodeURIComponent(baseImageUrl)}`, // 1200x627
      company: `${baseUrl}/api/og/linkedin/company?image=${encodeURIComponent(baseImageUrl)}` // 300x300
    }
  };
};

// Generate social media structured data
export const generateSocialMediaStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": seoConfig.business.name,
  "url": seoConfig.site.url,
  "sameAs": [
    seoConfig.social.twitter.handle.startsWith('@') 
      ? `https://twitter.com/${seoConfig.social.twitter.handle.substring(1)}`
      : seoConfig.social.twitter.handle,
    seoConfig.social.facebook.url,
    seoConfig.social.instagram.url,
    seoConfig.social.linkedin.url,
    seoConfig.social.github.url
  ],
  "logo": {
    "@type": "ImageObject",
    "url": `${seoConfig.site.url}${seoConfig.images.logoLight}`,
    "width": 200,
    "height": 60
  }
});

// Helper function to get optimal image for platform
export const getOptimalSocialImage = (platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin', type: 'feed' | 'story' | 'profile' = 'feed') => {
  const images = generatePlatformImages(seoConfig.images.ogDefault);
  
  switch (platform) {
    case 'facebook':
      return images.facebook[type as keyof typeof images.facebook] || images.facebook.feed;
    case 'twitter':
      return images.twitter[type as keyof typeof images.twitter] || images.twitter.card;
    case 'instagram':
      return images.instagram[type as keyof typeof images.instagram] || images.instagram.feed;
    case 'linkedin':
      return images.linkedin[type as keyof typeof images.linkedin] || images.linkedin.post;
    default:
      return `${seoConfig.site.url}${seoConfig.images.ogDefault}`;
  }
};

// Social media analytics tracking
export const trackSocialShare = (platform: string, url: string, title: string) => {
  // Google Analytics 4 event tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'share', {
      method: platform,
      content_type: 'page',
      item_id: url,
      content_id: title,
      custom_parameters: {
        page_url: url,
        page_title: title
      }
    });
  }

  // Facebook Pixel event tracking
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Share', {
      content_name: title,
      content_url: url,
      content_type: 'page'
    });
  }
};