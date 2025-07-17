'use client'

// Social Share Buttons Component
// Optimized social sharing with analytics tracking

import React, { useState } from 'react';
import { generateSocialShareUrls, trackSocialShare } from '@/lib/seo/social-media';
import { seoConfig } from '@/lib/seo/config';

export interface SocialShareButtonsProps {
  url: string;
  title: string;
  description: string;
  hashtags?: string[];
  className?: string;
  showLabels?: boolean;
  platforms?: ('twitter' | 'facebook' | 'linkedin' | 'reddit' | 'instagram' | 'email' | 'copy')[];
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'minimal' | 'floating';
}

export const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({
  url,
  title,
  description,
  hashtags = [],
  className = '',
  showLabels = false,
  platforms = ['twitter', 'facebook', 'linkedin', 'instagram', 'email', 'copy'],
  size = 'medium',
  variant = 'default'
}) => {
  const [copied, setCopied] = useState(false);
  
  const shareUrls = generateSocialShareUrls({
    url,
    title,
    description,
    via: seoConfig.social.twitter.handle.replace('@', ''),
    hashtags
  });

  const handleShare = async (platform: string, shareUrl: string) => {
    // Track the share event
    trackSocialShare(platform, url, title);
    
    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy URL:', err);
      }
      return;
    }

    // Try Web Share API first (best for native apps)
    if (navigator.share && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: url,
        });
        return;
      } catch {
        // User cancelled or Web Share API failed, fall back to platform-specific sharing
      }
    }

    // Platform-specific app URLs for direct sharing
    const appUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      instagram: `https://www.instagram.com/`, // Instagram doesn't support direct URL sharing
      reddit: `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
    };

    const finalUrl = appUrls[platform] || shareUrl;
    openWebShare(finalUrl);
  };

  const openWebShare = (shareUrl: string) => {
    const width = 600;
    const height = 400;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    
    window.open(
      shareUrl,
      'share',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );
  };

  const getIconSize = () => {
    switch (size) {
      case 'small': return 'w-4 h-4';
      case 'medium': return 'w-5 h-5';
      case 'large': return 'w-6 h-6';
      default: return 'w-5 h-5';
    }
  };

  const getButtonSize = () => {
    switch (size) {
      case 'small': return 'p-1.5 sm:p-2';
      case 'medium': return 'p-2 sm:p-3';
      case 'large': return 'p-3 sm:p-4';
      default: return 'p-2 sm:p-3';
    }
  };

  const platformConfigs = {
    twitter: {
      name: 'Twitter',
      icon: (
        <svg className={getIconSize()} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: 'text-blue-500 hover:text-blue-600',
      bgColor: 'hover:bg-blue-50'
    },
    facebook: {
      name: 'Facebook',
      icon: (
        <svg className={getIconSize()} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'text-blue-600 hover:text-blue-700',
      bgColor: 'hover:bg-blue-50'
    },
    linkedin: {
      name: 'LinkedIn',
      icon: (
        <svg className={getIconSize()} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'text-blue-700 hover:text-blue-800',
      bgColor: 'hover:bg-blue-50'
    },
    reddit: {
      name: 'Reddit',
      icon: (
        <svg className={getIconSize()} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
        </svg>
      ),
      color: 'text-orange-500 hover:text-orange-600',
      bgColor: 'hover:bg-orange-50'
    },
    instagram: {
      name: 'Instagram',
      icon: (
        <svg className={getIconSize()} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.996 0 8.584.011 7.303.048 6.025.085 5.204.204 4.493.39c-.723.187-1.33.444-1.936.867-.6.42-1.1.952-1.523 1.636-.387.711-.7 1.532-.816 2.81C.095 7.465.075 7.876.075 10.897c0 3.02.011 3.433.048 4.714.037 1.277.156 2.098.343 2.809.187.723.444 1.33.867 1.936.42.6.952 1.1 1.636 1.523.711.387 1.532.7 2.81.816 1.281.037 1.693.057 4.714.057 3.02 0 3.433-.02 4.714-.057 1.277-.037 2.098-.156 2.809-.343.723-.187 1.33-.444 1.936-.867.6-.42 1.1-.952 1.523-1.636.387-.711.7-1.532.816-2.81.037-1.281.057-1.693.057-4.714 0-3.02-.02-3.433-.057-4.714-.037-1.277-.156-2.098-.343-2.809-.187-.723-.444-1.33-.867-1.936-.42-.6-.952-1.1-1.636-1.523-.711-.387-1.532-.7-2.81-.816C15.516.095 15.105.075 12.084.075L12.017 0zm0 2.165c2.959 0 3.309.013 4.479.064 1.08.05 1.667.228 2.059.379.518.201.888.442 1.276.83.388.388.629.758.83 1.276.151.392.329.979.379 2.059.051 1.17.064 1.52.064 4.479s-.013 3.309-.064 4.479c-.05 1.08-.228 1.667-.379 2.059-.201.518-.442.888-.83 1.276-.388.388-.758.629-1.276.83-.392.151-.979.329-2.059.379-1.17.051-1.52.064-4.479.064s-3.309-.013-4.479-.064c-1.08-.05-1.667-.228-2.059-.379-.518-.201-.888-.442-1.276-.83-.388-.388-.629-.758-.83-1.276-.151-.392-.329-.979-.379-2.059-.051-1.17-.064-1.52-.064-4.479s.013-3.309.064-4.479c.05-1.08.228-1.667.379-2.059.201-.518.442-.888.83-1.276.388-.388.758-.629 1.276-.83.392-.151.979-.329 2.059-.379 1.17-.051 1.52-.064 4.479-.064zm0 3.678c-3.07 0-5.56 2.49-5.56 5.56s2.49 5.56 5.56 5.56 5.56-2.49 5.56-5.56-2.49-5.56-5.56-5.56zm0 9.17c-1.993 0-3.61-1.617-3.61-3.61s1.617-3.61 3.61-3.61 3.61 1.617 3.61 3.61-1.617 3.61-3.61 3.61zm7.072-9.404c-.717 0-1.298-.581-1.298-1.298s.581-1.298 1.298-1.298 1.298.581 1.298 1.298-.581 1.298-1.298 1.298z"/>
        </svg>
      ),
      color: 'text-pink-500 hover:text-pink-600',
      bgColor: 'hover:bg-pink-50'
    },
    email: {
      name: 'Email',
      icon: (
        <svg className={getIconSize()} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      color: 'text-gray-600 hover:text-gray-700',
      bgColor: 'hover:bg-gray-50'
    },
    copy: {
      name: copied ? 'Copied!' : 'Copy Link',
      icon: copied ? (
        <svg className={getIconSize()} fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
      ) : (
        <svg className={getIconSize()} fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
        </svg>
      ),
      color: copied ? 'text-green-600' : 'text-gray-600 hover:text-gray-700',
      bgColor: copied ? 'bg-green-50' : 'hover:bg-gray-50'
    }
  };

  const baseButtonClass = `
    inline-flex items-center justify-center
    ${getButtonSize()}
    rounded-lg
    transition-all duration-200
    border border-gray-200
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  `;

  const getVariantClasses = () => {
    switch (variant) {
      case 'minimal':
        return 'border-0 hover:bg-gray-100';
      case 'floating':
        return 'shadow-lg hover:shadow-xl';
      default:
        return 'bg-white hover:bg-gray-50';
    }
  };

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {platforms.map((platform) => {
        const config = platformConfigs[platform];
        const shareUrl = shareUrls[platform as keyof typeof shareUrls];
        
        return (
          <button
            key={platform}
            onClick={() => handleShare(platform, shareUrl)}
            className={`
              ${baseButtonClass}
              ${getVariantClasses()}
              ${config.color}
              ${config.bgColor}
              flex-shrink-0
            `}
            title={`Share on ${config.name}`}
            aria-label={`Share on ${config.name}`}
          >
            {config.icon}
            {showLabels && (
              <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium">
                {config.name}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default SocialShareButtons;