// Enterprise SEO Configuration System
// This centralizes all SEO settings and provides type safety

export interface SEOConfig {
  site: {
    name: string;
    description: string;
    url: string;
    logo: string;
    favicon: string;
    themeColor: string;
    language: string;
    locale: string;
    timezone: string;
  };
  business: {
    name: string;
    legalName: string;
    description: string;
    foundingDate: string;
    numberOfEmployees: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    contactPoint: {
      telephone: string;
      email: string;
      contactType: string;
      availableLanguage: string[];
    };
  };
  social: {
    twitter: {
      handle: string;
      site: string;
      creator: string;
    };
    instagram: {
      handle: string;
      url: string;
    };
    facebook: {
      url: string;
      appId?: string;
    };
    linkedin: {
      url: string;
      companyId?: string;
    };
    github: {
      url: string;
      username: string;
    };
  };
  keywords: {
    primary: string[];
    secondary: string[];
    branded: string[];
    location: string[];
    industry: string[];
  };
  analytics: {
    googleAnalytics: string;
    googleTagManager?: string;
    facebookPixel?: string;
    linkedInInsight?: string;
  };
  images: {
    ogDefault: string;
    ogSquare: string;
    logoLight: string;
    logoDark: string;
    favicon: string;
    appleTouchIcon: string;
  };
}

export const seoConfig: SEOConfig = {
  site: {
    name: "JDX Software",
    description: "Enterprise-grade custom software development, web applications, mobile apps, and business automation solutions. Transform your business with cutting-edge technology.",
    url: "https://jdxsoftware.com",
    logo: "/logo.png",
    favicon: "/favicon.ico",
    themeColor: "#3B82F6",
    language: "en",
    locale: "en_US",
    timezone: "America/New_York"
  },
  business: {
    name: "JDX Software",
    legalName: "JDX Software LLC",
    description: "Leading custom software development company specializing in web applications, mobile apps, and enterprise solutions.",
    foundingDate: "2020-01-01",
    numberOfEmployees: "2-10",
    address: {
      streetAddress: "",
      addressLocality: "",
      addressRegion: "",
      postalCode: "",
      addressCountry: "US"
    },
    contactPoint: {
      telephone: "",
      email: "info@jdxsoftware.com",
      contactType: "customer service",
      availableLanguage: ["English"]
    }
  },
  social: {
    twitter: {
      handle: "@jdxsoftware",
      site: "@jdxsoftware",
      creator: "@jdxsoftware"
    },
    instagram: {
      handle: "@jdxsoftware",
      url: "https://instagram.com/jdxsoftware"
    },
    facebook: {
      url: "https://facebook.com/jdxsoftware"
    },
    linkedin: {
      url: "https://linkedin.com/company/jdx-software"
    },
    github: {
      url: "https://github.com/jdx",
      username: "jdx"
    }
  },
  keywords: {
    primary: [
      "custom software development",
      "web application development",
      "mobile app development",
      "business automation",
      "enterprise software solutions"
    ],
    secondary: [
      "software consulting",
      "digital transformation",
      "startup software",
      "scalable applications",
      "cloud solutions"
    ],
    branded: [
      "JDX Software",
      "JDX Software LLC",
      "JDX development",
      "JDX consulting"
    ],
    location: [
      "software development company",
      "custom software developers",
      "web development services"
    ],
    industry: [
      "fintech software",
      "healthcare software",
      "e-commerce solutions",
      "SaaS development",
      "API development"
    ]
  },
  analytics: {
    googleAnalytics: "G-2YF6QQQSWR"
  },
  images: {
    ogDefault: "/og-default.jpg",
    ogSquare: "/og-square.jpg",
    logoLight: "/logo-light.svg",
    logoDark: "/logo-dark.svg",
    favicon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png"
  }
};

// Page-specific SEO configurations
export interface PageSEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product" | "profile";
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  structuredData?: Record<string, unknown>[];
  alternateLanguages?: Array<{
    hrefLang: string;
    href: string;
  }>;
  lastModified?: string;
  publishedDate?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export const pageConfigs: Record<string, PageSEOConfig> = {
  home: {
    title: "Custom Software Development Company | JDX Software",
    description: "Leading custom software development company. We build enterprise web applications, mobile apps, and automation solutions that scale your business.",
    keywords: ["custom software development", "web application development", "mobile app development", "business automation"],
    ogType: "website",
    twitterCard: "summary_large_image"
  },
  about: {
    title: "About JDX Software | Expert Development Team",
    description: "Learn about JDX Software's expert development team and our mission to deliver cutting-edge software solutions for modern businesses.",
    keywords: ["software development team", "company overview", "development expertise"],
    ogType: "website"
  },
  services: {
    title: "Software Development Services | JDX Software",
    description: "Comprehensive software development services including web applications, mobile apps, cloud solutions, and business automation.",
    keywords: ["software development services", "web development", "mobile development", "consulting"],
    ogType: "website"
  },
  portfolio: {
    title: "Portfolio | JDX Software Projects & Case Studies",
    description: "Explore our portfolio of successful software projects including web applications, mobile apps, and enterprise solutions.",
    keywords: ["software portfolio", "case studies", "project examples"],
    ogType: "website"
  },
  contact: {
    title: "Contact JDX Software | Get Your Project Quote",
    description: "Contact JDX Software for your custom software development needs. Get a free consultation and project quote today.",
    keywords: ["contact software developer", "project quote", "software consultation"],
    ogType: "website"
  },
  blog: {
    title: "Software Development Blog | JDX Software",
    description: "Expert insights on software development, web technologies, mobile app development, and business automation trends.",
    keywords: ["software development blog", "tech insights", "development tutorials"],
    ogType: "website"
  }
};

// Utility functions for SEO
export const generatePageTitle = (pageTitle: string, includeCompany: boolean = true): string => {
  if (!includeCompany) return pageTitle;
  return `${pageTitle} | ${seoConfig.site.name}`;
};

export const generateCanonicalUrl = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${seoConfig.site.url}${cleanPath}`;
};

export const generateOGImage = (title: string, imageType: 'default' | 'article' | 'product' = 'default'): string => {
  // In production, you'd use a service like Vercel OG or similar
  // For now, return the default OG image
  console.log(`Generating OG image for: ${title}, type: ${imageType}`);
  return `${seoConfig.site.url}${seoConfig.images.ogDefault}`;
};

export const combineKeywords = (pageKeywords: string[] = [], includeDefaults: boolean = true): string[] => {
  if (!includeDefaults) return pageKeywords;
  
  return [
    ...pageKeywords,
    ...seoConfig.keywords.primary.slice(0, 3), // Top 3 primary keywords
    ...seoConfig.keywords.branded.slice(0, 2)   // Top 2 branded keywords
  ];
};