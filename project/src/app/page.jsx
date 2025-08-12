


"use client";

import { AlignCenter } from 'lucide-react'
import React from 'react'
import SalesSection from './components/salesection';
import Incomesection from './components/incomesection';
import Sidebar from './components/sidebar'; // Import your sidebar component

const Dashboard = () => {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <Sidebar /> {/* Use your sidebar component here */}
      
      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        <nav className="flex items-center justify-between p-4 border-b border-gray-200 w-auto">
          <div className="text-2xl font-semibold">Dashboard</div>
          <div className="flex items-center space-x-4 ml-[700px]">
            <div className="h-10 w-auto shadow-lg rounded-lg p-2">
              <AlignCenter />
            </div>
            <div className="text-sm text-gray-600 h-10 w-auto shadow-lg rounded-lg p-2">Aug 6, 2025 - Aug 12, 2025</div>
            <div>
              <button className="h-10 w-auto bg-black text-white p-2 rounded-lg"> Add view</button>
            </div>
          </div>
        </nav>

        <div className="grid grid-cols-3 gap-10 mx-10 my-8">
          {/* first */}
          <div className="h-56 p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-500">Acme Plus</h2>
              <p className="text-sm text-gray-400">SALES</p>
            </div>
            <div className="flex items-end justify-between">
              <div className="flex">
                <p className="text-3xl font-bold text-gray-800">$24,780</p>
                <span className="text-sm font-medium text-green-500">+49%</span>
              </div>
            </div>
          </div>
          
          {/* sec */}
          <div className="h-56 p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-500">Acme Plus</h2>
              <p className="text-sm text-gray-400">SALES</p>
            </div>
            <div className="flex items-end justify-between">
              <div className="flex">
                <p className="text-3xl font-bold text-gray-800">$24,780</p>
                <span className="text-sm font-medium text-green-500">+49%</span>
              </div>
            </div>
          </div>
        
          {/* third */}
          <div className="h-56 p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-500">Acme Plus</h2>
              <p className="text-sm text-gray-400">SALES</p>
            </div>
            <div className="flex items-end justify-between">
              <div className="flex mt-6">
                <p className="text-3xl font-bold text-gray-800">$24,780</p>
                <span className="text-sm font-medium text-green-500">+49%</span>
              </div>
            </div>
          </div>  
        </div>

        <div className="grid grid-cols-2 gap-10 mx-10 my-8">
          {/* first */}
          <div className="h-[500px] bg-white shadow-lg rounded-lg">
            <div className="border-b border-gray-300 p-3 ">
              <h2 className="text-xl font-semibold mb-4 ">Direct VS Indirect</h2>
            </div>
            <div className="flex mb-6">
              <div className="flex text-center ml-4 mt-6">
                <p className="text-3xl font-bold">$8.25K</p>
                <p className="text-gray-500 text-sm mt-1 ml-2">Direct</p>
              </div>
              <div className="flex text-center ml-6 mt-6">
                <p className="text-3xl font-bold">$27.7K</p>
                <p className="text-gray-500 text-sm mt-1 ml-2">Indirect</p>
              </div>
            </div>
            <div className="h-64 flex justify-between items-end space-x-2">
              <div className="w-12 bg-blue-600 h-3/4 rounded-t ml-2"></div>
              <div className="w-12 bg-blue-600 h-1/2 rounded-t"></div>
              <div className="w-12 bg-blue-600 h-3/5 rounded-t"></div>
              <div className="w-12 bg-blue-600 h-full rounded-t"></div>
              <div className="w-12 bg-blue-600 h-2/3 rounded-t"></div>
              <div className="w-12 bg-blue-600 h-1/3 rounded-t mr-2"></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>Dec 22</span> 
              <span>Jan 23</span>
              <span>Feb 23</span>
              <span>Mar 23</span>
              <span>Apr 23</span>
              <span>May 23</span>
            </div>
          </div>

          {/* sec */}
          <div className="h-[500px] shadow-lg rounded-lg bg-white">
            <h2 className="text-2xl p-4 font-semibold mb-4 border-b border-gray-300">Real Time Value</h2>
            <div className="mb-4 flex">
              <p className="text-2xl font-bold ml-4">$49.65</p>
              <p className="text-sm text-green-600">2.55%</p>
            </div>
            <div className="h-64 flex justify-between items-end space-x-1">
              <div className="w-4 bg-green-500 h-1/6 rounded-t ml-2"></div>
              <div className="w-4 bg-green-500 h-1/3 rounded-t"></div>
              <div className="w-4 bg-green-500 h-1/2 rounded-t"></div>
              <div className="w-4 bg-green-500 h-3/4 rounded-t"></div>
              <div className="w-4 bg-green-500 h-full rounded-t"></div>
              <div className="w-4 bg-green-500 h-2/3 rounded-t mr-2"></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>11:55:07</span>
              <span>11:55:22</span>
              <span>11:55:47</span>
              <span>11:56:07</span>
              <span>11:56:22</span>
              <span>11:56:47</span>
            </div>
          </div>
        </div>

        {/* NEW */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 h-auto">
          {/* Top Countries */}
          <div className="bg-white rounded-xl shadow p-6 flex-1">
            <h2 className="text-lg font-semibold mb-4">Top Countries</h2>
            <div className="flex justify-center">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-purple-500"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="60, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-blue-400"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="25, 100"
                    strokeDashoffset="-60"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-violet-600"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="15, 100"
                    strokeDashoffset="-85"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-center mt-4 gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span> United States
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-blue-400"></span> Italy
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-violet-600"></span> Other
              </div>
            </div>
          </div>

          {/* Top Channels */}
          <div className="bg-white rounded-xl shadow p-6 flex-1">
            <h2 className="text-lg font-semibold mb-4">Top Channels</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b text-gray-500">
                  <tr>
                    <th className="pb-2">SOURCE</th>
                    <th className="pb-2">VISITORS</th>
                    <th className="pb-2">REVENUES</th>
                    <th className="pb-2">SALES</th>
                    <th className="pb-2">CONVERSION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 flex items-center gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" className="w-5 h-5" />
                      Github.com
                    </td>
                    <td>2.4K</td>
                    <td className="text-green-500">$3,877</td>
                    <td>267</td>
                    <td className="text-blue-500">4.7%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 flex items-center gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="" className="w-5 h-5" />
                      Facebook
                    </td>
                    <td>2.2K</td>
                    <td className="text-green-500">$3,426</td>
                    <td>249</td>
                    <td className="text-blue-500">4.4%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 flex items-center gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Google_logo.svg" alt="" className="w-5 h-5" />
                      Google (organic)
                    </td>
                    <td>2.0K</td>
                    <td className="text-green-500">$2,444</td>
                    <td>224</td>
                    <td className="text-blue-500">4.2%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 flex items-center gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Vimeo_Logo.svg" alt="" className="w-5 h-5" />
                      Vimeo.com
                    </td>
                    <td>1.9K</td>
                    <td className="text-green-500">$2,236</td>
                    <td>220</td>
                    <td className="text-blue-500">4.2%</td>
                  </tr>
                  <tr>
                    <td className="py-3 flex items-center gap-2">
                      <img src="https://static.indiehackers.com/icons/apple-touch-icon.png" alt="" className="w-5 h-5" />
                      Indiehackers.com
                    </td>
                    <td>1.7K</td>
                    <td className="text-green-500">$2,034</td>
                    <td>204</td>
                    <td className="text-blue-500">3.9%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <SalesSection/>
        </div>

        <div>
          <Incomesection/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 
