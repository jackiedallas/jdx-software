// GDPR/CCPA Compliant Consent Banner
'use client';

import React, { useState, useEffect } from 'react';
import { getAnalytics } from '@/lib/analytics';

interface ConsentBannerProps {
  className?: string;
  position?: 'top' | 'bottom';
  showDetailsLink?: boolean;
  companyName?: string;
}

export const ConsentBanner: React.FC<ConsentBannerProps> = ({
  className = '',
  position = 'bottom',
  showDetailsLink = true,
  companyName = 'JDX Software'
}) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('analytics_consent');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      // Initialize analytics if consent was previously given
      const analytics = getAnalytics();
      if (analytics) {
        analytics.giveConsent();
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('analytics_consent', 'accepted');
    localStorage.setItem('analytics_consent_date', new Date().toISOString());
    setShowBanner(false);
    
    const analytics = getAnalytics();
    if (analytics) {
      analytics.giveConsent();
    }
  };

  const handleDecline = () => {
    localStorage.setItem('analytics_consent', 'declined');
    localStorage.setItem('analytics_consent_date', new Date().toISOString());
    setShowBanner(false);
    
    const analytics = getAnalytics();
    if (analytics) {
      analytics.revokeConsent();
    }
  };

  const handleCustomize = () => {
    setShowDetails(!showDetails);
  };

  if (!showBanner) return null;

  const positionClasses = position === 'top' 
    ? 'top-0' 
    : 'bottom-0';

  return (
    <div className={`fixed left-0 right-0 ${positionClasses} z-50 ${className}`}>
      <div className="bg-gray-900 text-white border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {!showDetails ? (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm leading-relaxed">
                  We use analytics to improve our website and understand how visitors interact with our content. 
                  Your privacy is important to us, and we only collect essential data to enhance your experience.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 min-w-max">
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Accept All
                </button>
                
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Decline
                </button>
                
                {showDetailsLink && (
                  <button
                    onClick={handleCustomize}
                    className="px-4 py-2 border border-gray-500 hover:border-gray-400 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Customize
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Privacy Settings</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Choose which analytics services you're comfortable with. You can change these settings at any time.
                </p>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Essential Analytics</h4>
                    <span className="text-xs bg-green-600 px-2 py-1 rounded">Required</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Basic page views and user interactions to improve our website functionality.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Performance Analytics</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-300">
                    Website performance metrics and error tracking to optimize user experience.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Save Preferences
                </button>
                
                <button
                  onClick={() => setShowDetails(false)}
                  className="px-4 py-2 border border-gray-500 hover:border-gray-400 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Back
                </button>
              </div>
              
              <div className="pt-2 border-t border-gray-700">
                <p className="text-xs text-gray-400">
                  We respect your privacy. Read our{' '}
                  <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                    Privacy Policy
                  </a>{' '}
                  for more information about how we handle your data.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;