'use client';

import React from 'react';

const TopInsights = () => {
  // Sample data from image
  const channels = [
    { source: 'Google', visitors: '4.7K', width: 'w-[95%]' },
    { source: 'Indiehackers.com', visitors: '4.2K', width: 'w-[85%]' },
    { source: 'DuckDuckGo', visitors: '3.4K', width: 'w-[70%]' },
    { source: 'Hacker News', visitors: '3.1K', width: 'w-[65%]' },
    { source: 'Github.com', visitors: '2.2K', width: 'w-[50%]' },
    { source: 'Madewithvuejs.com', visitors: '1.7K', width: 'w-[40%]' },
    { source: 'Producthunt.com', visitors: '924', width: 'w-[25%]' },
    { source: 'Dev.to', visitors: '696', width: 'w-[15%]' },
  ];

  const pages = [
    { source: 'cruip.com/', views: '28K', width: 'w-[95%]' },
    { source: 'preview.cruip.com/open-pro/', views: '12K', width: 'w-[60%]' },
    { source: 'preview.cruip.com/appy/', views: '9.7K', width: 'w-[50%]' },
    { source: 'cruip.com/unlimited/', views: '9.2K', width: 'w-[48%]' },
    { source: 'preview.cruip.com/simple/', views: '7K', width: 'w-[38%]' },
    { source: 'cruip.com/about-us/', views: '6.4K', width: 'w-[34%]' },
    { source: 'docs.cruip.com/', views: '5.4K', width: 'w-[30%]' },
    { source: 'preview.cruip.com/twist/', views: '2.2K', width: 'w-[15%]' },
  ];

  const countries = [
    { source: '🇮🇪 Ireland', sessions: '4.2K', width: 'w-[95%]' },
    { source: '🇺🇸 United States', sessions: '3.4K', width: 'w-[75%]' },
    { source: '🇩🇪 Germany', sessions: '1.6K', width: 'w-[45%]' },
    { source: '🇮🇹 Italy', sessions: '1.2K', width: 'w-[35%]' },
    { source: '🇬🇧 United Kingdom', sessions: '912', width: 'w-[25%]' },
    { source: '🇫🇷 France', sessions: '677', width: 'w-[20%]' },
    { source: '🇮🇳 India', sessions: '449', width: 'w-[15%]' },
    { source: '🇸🇬 Singapore', sessions: '269', width: 'w-[10%]' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Top Channels */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-md font-semibold mb-4">Top Channels</h3>
        <div className="space-y-2 text-sm">
          {channels.map(({ source, visitors, width }, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span>{source}</span>
                <span className="text-gray-500">{visitors}</span>
              </div>
              <div className={`h-2 bg-purple-200 rounded ${width}`}></div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-right text-sm text-indigo-600 font-medium cursor-pointer">
          <a href="#">Channels Report →</a>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-md font-semibold mb-4">Top Pages</h3>
        <div className="space-y-2 text-sm">
          {pages.map(({ source, views, width }, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span>{source}</span>
                <span className="text-gray-500">{views}</span>
              </div>
              <div className={`h-2 bg-green-200 rounded ${width}`}></div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-right text-sm text-indigo-600 font-medium cursor-pointer">
          <a href="#">Page Report →</a>
        </div>
      </div>

      {/* Top Countries */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-md font-semibold mb-4">Top Countries</h3>
        <div className="space-y-2 text-sm">
          {countries.map(({ source, sessions, width }, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span>{source}</span>
                <span className="text-gray-500">{sessions}</span>
              </div>
              <div className={`h-2 bg-sky-200 rounded ${width}`}></div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-right text-sm text-indigo-600 font-medium cursor-pointer">
          <a href="#">Countries Report →</a>
        </div>
      </div>
    </div>
  );
};

export default TopInsights;
