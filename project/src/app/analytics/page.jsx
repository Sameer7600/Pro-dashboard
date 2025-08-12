// components/AnalyticsSection.jsx

'use client';
import React from 'react';
import TopInsights from '../components/topInsights';
import SessionsCharts from '../components/sessionscharts';
import TopProductsTable from '../components/topproductstable';

const AnalyticsSection = () => {
  return (
    <div>

    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Analytics Summary */}
      <div className="col-span-2 bg-white rounded-xl shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Analytics</h2>
          <div className="text-sm text-gray-500">Aug 6, 2025 - Aug 12, 2025</div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6 text-center">
          <div>
            <p className="text-xl font-bold">24.7K <span className="text-green-500 text-sm">+49%</span></p>
            <p className="text-sm text-gray-500">Unique Visitors</p>
          </div>
          <div>
            <p className="text-xl font-bold">56.9K <span className="text-green-500 text-sm">+7%</span></p>
            <p className="text-sm text-gray-500">Total Pageviews</p>
          </div>
          <div>
            <p className="text-xl font-bold">54% <span className="text-red-500 text-sm">-7%</span></p>
            <p className="text-sm text-gray-500">Bounce Rate</p>
          </div>
          <div>
            <p className="text-xl font-bold">2m 56s <span className="text-red-500 text-sm">+7%</span></p>
            <p className="text-sm text-gray-500">Visit Duration</p>
          </div>
        </div>

        {/* Fake line chart using Tailwind bar heights */}
        <div className="w-full h-48 relative">
          <div className="absolute bottom-0 w-full flex items-end justify-between">
            {[
              'h-10', 'h-14', 'h-20', 'h-8', 'h-24', 'h-12',
              'h-16', 'h-10', 'h-20', 'h-24', 'h-16', 'h-28',
            ].map((h, i) => (
              <div key={i} className={`w-[6%] bg-purple-300 rounded-t ${h}`}></div>
            ))}
          </div>
          <div className="absolute bottom-0 w-full flex items-end justify-between opacity-30">
            {[
              'h-8', 'h-12', 'h-16', 'h-6', 'h-20', 'h-10',
              'h-14', 'h-8', 'h-16', 'h-20', 'h-14', 'h-24',
            ].map((h, i) => (
              <div key={i} className={`w-[6%] bg-gray-300 rounded-t ${h}`}></div>
            ))}
          </div>
        </div>

        {/* X-Axis Dates */}
        <div className="flex justify-between text-xs text-gray-400 mt-4">
          <span>Dec 22</span><span>Mar 23</span><span>Jun 23</span>
          <span>Sep 23</span><span>Dec 23</span><span>Mar 24</span>
        </div>
      </div>

      {/* Active Users Right Now */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-2">Active Users Right Now</h2>
        <p className="text-3xl font-bold text-red-500 mb-4">● 347</p>

        {/* Mini Chart */}
        <div className="w-full h-20 flex items-end justify-between mb-4">
          {['h-6', 'h-8', 'h-5', 'h-6', 'h-10', 'h-9', 'h-12'].map((h, i) => (
            <div key={i} className={`w-1 bg-purple-400 ${h} rounded-t`}></div>
          ))}
        </div>

        {/* Top Pages */}
        <div className="text-sm text-gray-600">
          <div className="flex justify-between mb-1">
            <span>preview.cruip.com/open-pro/</span><span>94</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>preview.cruip.com/simple/</span><span>42</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>cruip.com/unlimited/</span><span>12</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>preview.cruip.com/twist/</span><span>4</span>
          </div>
        </div>

        <div className="mt-4 text-sm text-blue-500 underline cursor-pointer">
          Real-Time Report →
        </div>
      </div>
    </div>
    
    {/* second section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Acquisition Channels */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-md font-semibold mb-4">Acquisition Channels</h2>
        <div className="flex gap-4 mb-6 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-indigo-600 rounded-full"></span> Direct
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-purple-400 rounded-full"></span> Referral
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-indigo-300 rounded-full"></span> Organic Search
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-purple-200 rounded-full"></span> Social
          </div>
        </div>

        <div className="flex justify-between items-end h-48">
          {[
            ['h-12', 'h-3', 'h-2', 'h-4'],
            ['h-10', 'h-4', 'h-3', 'h-3'],
            ['h-14', 'h-5', 'h-3', 'h-4'],
            ['h-11', 'h-3', 'h-2', 'h-5'],
            ['h-11', 'h-4', 'h-3', 'h-3'],
          ].map((heights, index) => (
            <div key={index} className="flex flex-col justify-end items-center w-6 space-y-1">
              <div className={`w-full bg-purple-200 ${heights[3]} rounded-t`}></div>
              <div className={`w-full bg-indigo-300 ${heights[2]} rounded-t`}></div>
              <div className={`w-full bg-purple-400 ${heights[1]} rounded-t`}></div>
              <div className={`w-full bg-indigo-600 ${heights[0]} rounded-t`}></div>
            </div>
          ))}
        </div>

        {/* X-axis */}
        <div className="flex justify-between text-xs text-gray-400 mt-4 px-2">
          <span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
        </div>
      </div>

      {/* Audience Overview */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-md font-semibold mb-4">Audience Overview</h2>
        <div className="flex gap-4 mb-6 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-indigo-500 rounded-full"></span> New Visitors
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-sky-400 rounded-full"></span> Returning Visitors
          </div>
        </div>

        <div className="space-y-4">
          {[
            ['May', 'w-[90%]', 'w-[75%]'],
            ['Apr', 'w-[65%]', 'w-[40%]'],
            ['Mar', 'w-[55%]', 'w-[70%]'],
            ['Feb', 'w-[85%]', 'w-[50%]'],
          ].map(([month, newWidth, returnWidth]) => (
            <div key={month}>
              <p className="text-xs text-gray-500 mb-1">{month}</p>
              <div className="flex gap-2">
                <div className={`h-3 bg-indigo-500 rounded ${newWidth}`}></div>
                <div className={`h-3 bg-sky-400 rounded ${returnWidth}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

       <div>
        <TopInsights/>
       </div>
 
      <div>
      <SessionsCharts/>
      </div>

      <div>
      <TopProductsTable/>
      </div>

    </div>
  );
};

export default AnalyticsSection;
