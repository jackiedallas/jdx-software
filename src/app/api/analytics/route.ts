// Self-hosted Analytics API endpoint
import { NextRequest, NextResponse } from 'next/server';

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp: number;
  userId?: string;
  sessionId: string;
  page: string;
  referrer: string;
  userAgent: string;
  ip?: string;
  country?: string;
  city?: string;
}

// In-memory storage (replace with database in production)
const analytics: AnalyticsEvent[] = [];
const sessions: Map<string, { firstSeen: number; lastSeen: number; pageViews: number }> = new Map();

export async function POST(request: NextRequest) {
  try {
    const event: AnalyticsEvent = await request.json();
    
    // Add IP and geolocation data
    const ip = request.ip || request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    const country = request.geo?.country || 'unknown';
    const city = request.geo?.city || 'unknown';
    
    const enhancedEvent: AnalyticsEvent = {
      ...event,
      ip,
      country,
      city,
      timestamp: Date.now()
    };

    // Store the event
    analytics.push(enhancedEvent);

    // Update session data
    if (event.sessionId) {
      const session = sessions.get(event.sessionId) || {
        firstSeen: enhancedEvent.timestamp,
        lastSeen: enhancedEvent.timestamp,
        pageViews: 0
      };
      
      session.lastSeen = enhancedEvent.timestamp;
      if (event.event === 'page_view') {
        session.pageViews++;
      }
      
      sessions.set(event.sessionId, session);
    }

    // Clean old data (keep last 30 days)
    const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
    const filteredAnalytics = analytics.filter(e => e.timestamp > thirtyDaysAgo);
    analytics.length = 0;
    analytics.push(...filteredAnalytics);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json({ error: 'Failed to process event' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const days = parseInt(searchParams.get('days') || '7');
  const startDate = Date.now() - (days * 24 * 60 * 60 * 1000);
  
  try {
    // Filter events by date range
    const recentEvents = analytics.filter(event => event.timestamp >= startDate);
    
    // Calculate basic metrics
    const pageViews = recentEvents.filter(e => e.event === 'page_view').length;
    const uniqueSessions = new Set(recentEvents.map(e => e.sessionId)).size;
    const uniqueUsers = new Set(recentEvents.map(e => e.userId).filter(Boolean)).size;
    
    // Top pages
    const pageViewEvents = recentEvents.filter(e => e.event === 'page_view');
    const pageStats = pageViewEvents.reduce((acc, event) => {
      const page = event.page;
      acc[page] = (acc[page] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const topPages = Object.entries(pageStats)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([page, views]) => ({ page, views }));
    
    // Referrers
    const referrerStats = recentEvents
      .filter(e => e.referrer && e.referrer !== '')
      .reduce((acc, event) => {
        const referrer = new URL(event.referrer).hostname;
        acc[referrer] = (acc[referrer] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
    
    const topReferrers = Object.entries(referrerStats)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([referrer, visits]) => ({ referrer, visits }));
    
    // Countries
    const countryStats = recentEvents.reduce((acc, event) => {
      const country = event.country || 'unknown';
      acc[country] = (acc[country] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const topCountries = Object.entries(countryStats)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([country, visits]) => ({ country, visits }));
    
    // Daily stats
    const dailyStats = recentEvents.reduce((acc, event) => {
      const date = new Date(event.timestamp).toISOString().split('T')[0];
      if (!acc[date]) {
        acc[date] = { pageViews: 0, sessions: new Set() };
      }
      if (event.event === 'page_view') {
        acc[date].pageViews++;
      }
      acc[date].sessions.add(event.sessionId);
      return acc;
    }, {} as Record<string, { pageViews: number; sessions: Set<string> }>);
    
    const dailyData = Object.entries(dailyStats)
      .map(([date, stats]) => ({
        date,
        pageViews: stats.pageViews,
        sessions: stats.sessions.size
      }))
      .sort((a, b) => a.date.localeCompare(b.date));
    
    // Custom events
    const customEvents = recentEvents
      .filter(e => e.event !== 'page_view')
      .reduce((acc, event) => {
        acc[event.event] = (acc[event.event] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
    
    const topEvents = Object.entries(customEvents)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([event, count]) => ({ event, count }));

    return NextResponse.json({
      summary: {
        pageViews,
        uniqueSessions,
        uniqueUsers,
        averageSessionDuration: calculateAverageSessionDuration(),
        bounceRate: calculateBounceRate()
      },
      topPages,
      topReferrers,
      topCountries,
      topEvents,
      dailyData,
      dateRange: {
        start: new Date(startDate).toISOString(),
        end: new Date().toISOString(),
        days
      }
    });
  } catch (error) {
    console.error('Analytics GET error:', error);
    return NextResponse.json({ error: 'Failed to retrieve analytics' }, { status: 500 });
  }
}

function calculateAverageSessionDuration(): number {
  const sessionDurations = Array.from(sessions.values())
    .map(session => session.lastSeen - session.firstSeen)
    .filter(duration => duration > 0);
  
  if (sessionDurations.length === 0) return 0;
  
  return sessionDurations.reduce((sum, duration) => sum + duration, 0) / sessionDurations.length;
}

function calculateBounceRate(): number {
  const totalSessions = sessions.size;
  if (totalSessions === 0) return 0;
  
  const bouncedSessions = Array.from(sessions.values())
    .filter(session => session.pageViews === 1).length;
  
  return (bouncedSessions / totalSessions) * 100;
}