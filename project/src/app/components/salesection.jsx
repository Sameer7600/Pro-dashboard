"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

export default function SalesSection() {
  // Hardcoded Data
  const salesOverTimeData = [
    { date: "Dec 22", current: 120, previous: 80 },
    { date: "May 23", current: 400, previous: 100 },
    { date: "Oct 23", current: 50, previous: 120 },
    { date: "Mar 24", current: 200, previous: 140 },
    { date: "Aug 24", current: 180, previous: 300 },
    { date: "Jan 25", current: 150, previous: 250 },
  ];

  const salesVsRefundsData = [
    { month: "Dec 22", sales: 5000, refunds: -2000 },
    { month: "Jan 23", sales: 10000, refunds: -3000 },
    { month: "Feb 23", sales: 7000, refunds: -1000 },
    { month: "Mar 23", sales: 9000, refunds: -2000 },
    { month: "Apr 23", sales: 6000, refunds: -5000 },
    { month: "May 23", sales: 9500, refunds: -1000 },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100">
      {/* Sales Over Time */}
      <div className="bg-white rounded-xl shadow p-6 flex-1">
        <h2 className="text-lg font-semibold mb-4">
          Sales Over Time <span className="text-gray-400 text-sm">(all stores)</span>
        </h2>

        {/* Amount & Percentage */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-3xl font-bold">$1,482</span>
          <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full">-22%</span>
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={salesOverTimeData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="current" stroke="#8b5cf6" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="previous" stroke="#60a5fa" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="flex gap-4 mt-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-purple-500"></span> Current
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-blue-400"></span> Previous
          </div>
        </div>
      </div>

      {/* Sales VS Refunds */}
      <div className="bg-white rounded-xl shadow p-6 flex-1">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-lg font-semibold">Sales VS Refunds</h2>
          <span className="text-gray-400 cursor-pointer">ℹ</span>
        </div>

        {/* Amount & Percentage */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-3xl font-bold text-green-600">+ $6,796</span>
          <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full">-34%</span>
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={salesVsRefundsData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
            <Bar dataKey="refunds" fill="#c4b5fd" radius={[0, 0, 6, 6]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
