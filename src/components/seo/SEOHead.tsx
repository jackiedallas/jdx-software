// Enterprise SEO Head Component
// Single component that handles all SEO requirements

import Head from 'next/head';
import { useRouter } from 'next/router';
import { seoConfig, PageSEOConfig, generateCanonicalUrl, combineKeywords } from '@/lib/seo/config';
import { generateStructuredData } from '@/lib/seo/structured-data';
import { generateSocialMediaTags } from '@/lib/seo/social-media';

export interface SEOHeadProps extends Partial<PageSEOConfig> {
  templateTitle?: string;
  templateDescription?: string;
  structuredData?: Array<{
    type: 'organization' | 'website' | 'article' | 'product' | 'service' | 'breadcrumb' | 'faq' | 'review';
    data?: Record<string, any>;
  }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
  alternateLanguages?: Array<{ hrefLang: string; href: string }>;
  robots?: {
    index?: boolean;
    follow?: boolean;
    maxSnippet?: number;
    maxImagePreview?: 'none' | 'standard' | 'large';
    maxVideoPreview?: number;
    noArchive?: boolean;
    noSitelinksSearchBox?: boolean;
    noTranslate?: boolean;
  };
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = [],
  canonical,
  noIndex = false,
  noFollow = false,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData = [],
  breadcrumbs = [],
  alternateLanguages = [],
  lastModified,
  publishedDate,
  author,
  section,
  tags = [],
  templateTitle,
  templateDescription,
  robots = {}
}) => {
  const router = useRouter();
  const currentPath = router.asPath;
  
  // Generate dynamic values
  const pageTitle = templateTitle || title || seoConfig.site.name;
  const pageDescription = templateDescription || description || seoConfig.site.description;
  const canonicalUrl = canonical || generateCanonicalUrl(currentPath);
  const combinedKeywords = combineKeywords(keywords);
  const pageImage = ogImage || seoConfig.images.ogDefault;
  
  // Generate social media tags
  const socialTags = generateSocialMediaTags({
    title: ogTitle || pageTitle,
    description: ogDescription || pageDescription,
    url: canonicalUrl,
    image: pageImage,
    imageAlt: ogTitle || pageTitle,
    type: ogType,
    publishedDate,
    modifiedDate: lastModified,
    author,
    section,
    tags,
    locale: seoConfig.site.locale,
    siteName: seoConfig.site.name
  });

  // Generate structured data
  const allStructuredData = [
    ...structuredData.map(item => generateStructuredData(item.type, item.data)),
    // Add breadcrumbs if provided
    ...(breadcrumbs.length > 0 ? [generateStructuredData('breadcrumb', { breadcrumbs })] : [])
  ].filter(Boolean);

  // Generate robots meta content
  const robotsContent = [
    robots.index !== false && !noIndex ? 'index' : 'noindex',
    robots.follow !== false && !noFollow ? 'follow' : 'nofollow',
    robots.maxSnippet ? `max-snippet:${robots.maxSnippet}` : 'max-snippet:-1',
    robots.maxImagePreview ? `max-image-preview:${robots.maxImagePreview}` : 'max-image-preview:large',
    robots.maxVideoPreview ? `max-video-preview:${robots.maxVideoPreview}` : 'max-video-preview:-1',
    robots.noArchive ? 'noarchive' : '',
    robots.noSitelinksSearchBox ? 'nositelinkssearchbox' : '',
    robots.noTranslate ? 'notranslate' : ''
  ].filter(Boolean).join(', ');

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={combinedKeywords.join(', ')} />
      <meta name="author" content={author || seoConfig.business.name} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Language Alternates */}
      {alternateLanguages.map(lang => (
        <link
          key={lang.hrefLang}
          rel="alternate"
          hrefLang={lang.hrefLang}
          href={lang.href}
        />
      ))}
      
      {/* Theme and Viewport */}
      <meta name="theme-color" content={seoConfig.site.themeColor} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Article specific meta tags */}
      {publishedDate && <meta name="article:published_time" content={publishedDate} />}
      {lastModified && <meta name="article:modified_time" content={lastModified} />}
      {section && <meta name="article:section" content={section} />}
      {tags.map(tag => (
        <meta key={tag} name="article:tag" content={tag} />
      ))}
      
      {/* Social Media Meta Tags */}
      {socialTags.map((tag, index) => (
        tag.property ? (
          <meta key={index} property={tag.property} content={tag.content} />
        ) : (
          <meta key={index} name={tag.name} content={tag.content} />
        )
      ))}
      
      {/* Favicon and Icons */}
      <link rel="icon" href={seoConfig.images.favicon} />
      <link rel="apple-touch-icon" href={seoConfig.images.appleTouchIcon} />
      <link rel="manifest" href="/manifest.json" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
      <link rel="dns-prefetch" href="//www.linkedin.com" />
      
      {/* Preload Critical Resources */}
      <link
        rel="preload"
        href="/fonts/inter-var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      
      {/* Page-specific head elements */}
      {publishedDate && (
        <meta name="DC.date.created" content={publishedDate} />
      )}
      {lastModified && (
        <meta name="DC.date.modified" content={lastModified} />
      )}
      
      {/* Publisher Information */}
      <meta name="publisher" content={seoConfig.business.name} />
      <meta name="copyright" content={`© ${new Date().getFullYear()} ${seoConfig.business.legalName}`} />
      
      {/* Geographic Information */}
      <meta name="geo.region" content={seoConfig.business.address.addressCountry} />
      <meta name="geo.placename" content={seoConfig.business.address.addressLocality} />
      
      {/* Additional Meta Tags for Better SEO */}
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="1 days" />
      <meta name="language" content={seoConfig.site.language} />
      <meta httpEquiv="Content-Language" content={seoConfig.site.language} />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={seoConfig.site.name} />
      
      {/* Microsoft Tiles */}
      <meta name="msapplication-TileColor" content={seoConfig.site.themeColor} />
      <meta name="msapplication-TileImage" content={seoConfig.images.appleTouchIcon} />
      <meta name="msapplication-config" content="/browserconfig.xml" />
    </Head>
  );
};

export default SEOHead;