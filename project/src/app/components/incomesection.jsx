"use client";

import { ArrowRight, MinusCircle, CheckCircle, Shuffle, Ban, ArrowUpRight, ArrowDownLeft, Minus } from "lucide-react";

export default function Incomesection() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100">
      
      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow p-6 flex-1">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

        {/* Today */}
        <div>
          <div className="text-xs text-gray-400 font-medium mb-2">TODAY</div>
          
          {/* Item 1 */}
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 text-purple-500 p-2 rounded-full">
                <ArrowRight size={16} />
              </div>
              <p className="text-sm">
                <span className="font-medium">Nick Mark</span> mentioned <span className="font-medium">Sara Smith</span> in a new post
              </p>
            </div>
            <a href="#" className="text-blue-500 text-sm">View →</a>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 text-red-500 p-2 rounded-full">
                <MinusCircle size={16} />
              </div>
              <p className="text-sm">
                The post <span className="font-medium">Post Name</span> was removed by <span className="font-medium">Nick Mark</span>
              </p>
            </div>
            <a href="#" className="text-blue-500 text-sm">View →</a>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 text-green-500 p-2 rounded-full">
                <CheckCircle size={16} />
              </div>
              <p className="text-sm">
                <span className="font-medium">Patrick Sullivan</span> published a new <span className="font-medium">post</span>
              </p>
            </div>
            <a href="#" className="text-blue-500 text-sm">View →</a>
          </div>
        </div>

        {/* Yesterday */}
        <div className="mt-6">
          <div className="text-xs text-gray-400 font-medium mb-2">YESTERDAY</div>
          
          {/* Item 4 */}
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 text-blue-500 p-2 rounded-full">
                <Shuffle size={16} />
              </div>
              <p className="text-sm">
                240+ users have subscribed to <span className="font-medium">Newsletter #1</span>
              </p>
            </div>
            <a href="#" className="text-blue-500 text-sm">View →</a>
          </div>

          {/* Item 5 */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 text-purple-500 p-2 rounded-full">
                <Ban size={16} />
              </div>
              <p className="text-sm">
                The post <span className="font-medium">Post Name</span> was suspended by <span className="font-medium">Nick Mark</span>
              </p>
            </div>
            <a href="#" className="text-blue-500 text-sm">View →</a>
          </div>
        </div>
      </div>

      {/* Income / Expenses */}
      <div className="bg-white rounded-xl shadow p-6 flex-1">
        <h2 className="text-lg font-semibold mb-4">Income/Expenses</h2>

        <div>
          <div className="text-xs text-gray-400 font-medium mb-2">TODAY</div>
          
          {/* Row 1 */}
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 text-red-500 p-2 rounded-full">
                <ArrowDownLeft size={16} />
              </div>
              <p className="text-sm">Qonto billing</p>
            </div>
            <span className="text-red-500 text-sm">-$49.88</span>
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 text-green-500 p-2 rounded-full">
                <ArrowUpRight size={16} />
              </div>
              <p className="text-sm">Cruip.com Market Ltd 70 Wilson St London</p>
            </div>
            <span className="text-green-500 text-sm">+249.88</span>
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 text-green-500 p-2 rounded-full">
                <ArrowUpRight size={16} />
              </div>
              <p className="text-sm">Notion Labs Inc</p>
            </div>
            <span className="text-green-500 text-sm">+99.99</span>
          </div>

          {/* Row 4 */}
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 text-green-500 p-2 rounded-full">
                <ArrowUpRight size={16} />
              </div>
              <p className="text-sm">Market Cap Ltd</p>
            </div>
            <span className="text-green-500 text-sm">+1,200.88</span>
          </div>

          {/* Row 5 */}
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 text-gray-500 p-2 rounded-full">
                <Minus size={16} />
              </div>
              <p className="text-sm">App.com Market Ltd 70 Wilson St London</p>
            </div>
            <span className="text-gray-500 text-sm">+$99.99</span>
          </div>

          {/* Row 6 */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 text-red-500 p-2 rounded-full">
                <ArrowDownLeft size={16} />
              </div>
              <p className="text-sm">App.com Market Ltd 70 Wilson St London</p>
            </div>
            <span className="text-red-500 text-sm">-$49.88</span>
          </div>
        </div>
      </div>
    </div>
  );
}
