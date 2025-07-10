// Advanced Structured Data (JSON-LD) System
// Generates rich snippets and enhances search visibility

import { seoConfig } from './config';

export interface StructuredDataProps {
  type: 'organization' | 'website' | 'article' | 'product' | 'service' | 'breadcrumb' | 'faq' | 'review';
  data?: Record<string, unknown>;
}

// Organization Schema - Use on homepage and about page
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": seoConfig.business.name,
  "legalName": seoConfig.business.legalName,
  "description": seoConfig.business.description,
  "url": seoConfig.site.url,
  "logo": {
    "@type": "ImageObject",
    "url": `${seoConfig.site.url}${seoConfig.images.logoLight}`,
    "width": 200,
    "height": 60
  },
  "foundingDate": seoConfig.business.foundingDate,
  "numberOfEmployees": seoConfig.business.numberOfEmployees,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": seoConfig.business.address.streetAddress,
    "addressLocality": seoConfig.business.address.addressLocality,
    "addressRegion": seoConfig.business.address.addressRegion,
    "postalCode": seoConfig.business.address.postalCode,
    "addressCountry": seoConfig.business.address.addressCountry
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": seoConfig.business.contactPoint.telephone,
    "email": seoConfig.business.contactPoint.email,
    "contactType": seoConfig.business.contactPoint.contactType,
    "availableLanguage": seoConfig.business.contactPoint.availableLanguage
  },
  "sameAs": [
    seoConfig.social.twitter.handle.startsWith('@') 
      ? `https://twitter.com/${seoConfig.social.twitter.handle.substring(1)}`
      : seoConfig.social.twitter.handle,
    seoConfig.social.instagram.url,
    seoConfig.social.facebook.url,
    seoConfig.social.linkedin.url,
    seoConfig.social.github.url
  ],
  "knowsAbout": [
    "Software Development",
    "Web Application Development",
    "Mobile App Development",
    "Business Automation",
    "Cloud Solutions",
    "API Development",
    "Enterprise Software",
    "Digital Transformation"
  ],
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Development Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Web Development",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Web Application Development",
              "description": "Build scalable, secure web applications tailored to your business needs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-commerce Development",
              "description": "Create powerful online stores with custom functionality"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Mobile Development",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Native Mobile App Development",
              "description": "Build native iOS and Android applications"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cross-Platform Development",
              "description": "Develop apps that work across multiple platforms"
            }
          }
        ]
      }
    ]
  }
});

// Website Schema - Use on homepage
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": seoConfig.site.name,
  "description": seoConfig.site.description,
  "url": seoConfig.site.url,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${seoConfig.site.url}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": seoConfig.business.name,
    "logo": {
      "@type": "ImageObject",
      "url": `${seoConfig.site.url}${seoConfig.images.logoLight}`
    }
  },
  "inLanguage": seoConfig.site.language,
  "copyrightYear": new Date().getFullYear(),
  "copyrightHolder": {
    "@type": "Organization",
    "name": seoConfig.business.legalName
  }
});

// Professional Service Schema - Use on services page
export const generateProfessionalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": seoConfig.business.name,
  "description": "Professional software development services including custom web applications, mobile apps, and enterprise solutions",
  "provider": {
    "@type": "Organization",
    "name": seoConfig.business.name,
    "url": seoConfig.site.url
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development",
          "description": "Tailored software solutions for your specific business needs",
          "provider": {
            "@type": "Organization",
            "name": seoConfig.business.name
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Application Development",
          "description": "Scalable web applications built with modern technologies",
          "provider": {
            "@type": "Organization",
            "name": seoConfig.business.name
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "Native and cross-platform mobile applications",
          "provider": {
            "@type": "Organization",
            "name": seoConfig.business.name
          }
        }
      }
    ]
  },
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "currenciesAccepted": "USD"
});

// Article Schema - Use on blog posts
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  image?: string;
  url: string;
  wordCount?: number;
  readingTime?: number;
  keywords?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "author": {
    "@type": "Person",
    "name": article.author,
    "url": `${seoConfig.site.url}/about`
  },
  "publisher": {
    "@type": "Organization",
    "name": seoConfig.business.name,
    "logo": {
      "@type": "ImageObject",
      "url": `${seoConfig.site.url}${seoConfig.images.logoLight}`,
      "width": 200,
      "height": 60
    }
  },
  "datePublished": article.publishedDate,
  "dateModified": article.modifiedDate || article.publishedDate,
  "image": article.image ? `${seoConfig.site.url}${article.image}` : `${seoConfig.site.url}${seoConfig.images.ogDefault}`,
  "url": article.url,
  "wordCount": article.wordCount,
  "timeRequired": article.readingTime ? `PT${article.readingTime}M` : undefined,
  "keywords": article.keywords?.join(', '),
  "inLanguage": seoConfig.site.language,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});

// Breadcrumb Schema - Use on all pages except homepage
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

// FAQ Schema - Use on pages with frequently asked questions
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Software Application Schema - Use for product/software pages
export const generateSoftwareApplicationSchema = (app: {
  name: string;
  description: string;
  category: string;
  operatingSystem: string[];
  price?: string;
  features: string[];
  screenshot?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": app.name,
  "description": app.description,
  "applicationCategory": app.category,
  "operatingSystem": app.operatingSystem,
  "price": app.price || "Contact for pricing",
  "featureList": app.features,
  "screenshot": app.screenshot ? `${seoConfig.site.url}${app.screenshot}` : undefined,
  "author": {
    "@type": "Organization",
    "name": seoConfig.business.name,
    "url": seoConfig.site.url
  },
  "softwareVersion": "1.0",
  "datePublished": new Date().toISOString(),
  "inLanguage": seoConfig.site.language
});

// Review Schema - Use for testimonials and reviews
export const generateReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": seoConfig.business.name,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
    "reviewCount": reviews.length,
    "bestRating": 5,
    "worstRating": 1
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5,
      "worstRating": 1
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished
  }))
});

// Main function to generate structured data based on type
export const generateStructuredData = (type: StructuredDataProps['type'], data?: Record<string, unknown>) => {
  switch (type) {
    case 'organization':
      return generateOrganizationSchema();
    case 'website':
      return generateWebsiteSchema();
    case 'service':
      return generateProfessionalServiceSchema();
    case 'article':
      return generateArticleSchema(data as Parameters<typeof generateArticleSchema>[0]);
    case 'breadcrumb':
      return generateBreadcrumbSchema(data?.breadcrumbs as Parameters<typeof generateBreadcrumbSchema>[0] || []);
    case 'faq':
      return generateFAQSchema(data?.faqs as Parameters<typeof generateFAQSchema>[0] || []);
    case 'product':
      return generateSoftwareApplicationSchema(data as Parameters<typeof generateSoftwareApplicationSchema>[0]);
    case 'review':
      return generateReviewSchema(data?.reviews as Parameters<typeof generateReviewSchema>[0] || []);
    default:
      return null;
  }
};