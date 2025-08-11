"use client";

import { 
  CircleGauge, ShoppingCart, Users, CircleDollarSign, Briefcase, 
  CheckSquare, MessageSquare, Inbox, Calendar, Hash, Settings, Wrench,
  ChevronDown,
  Box,
  CheckCheck,
  CircleDot
} from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-60 h-screen bg-white border-r border-gray-200 flex flex-col p-4">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">★</span>
        </div>
      </div>

      <p className="text-xs text-gray-500 mb-2">PAGES</p>

      <nav className="space-y-1">
        
        {/* Reusable dropdown link */}
        <div className="group">
          <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center">
              <CircleGauge className="size-[18px]" />
              <span className="ml-3 text-[14px]">Dashboard</span>
            </div>
            <ChevronDown className="size-[16px] transition-transform duration-200 group-hover:rotate-180" />
          </a>
          {/* Dropdown */}
          <div className="hidden group-hover:block pl-10 py-1 space-y-1">
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Main</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Analytics</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Fintech</a>
          </div>
        </div>

              {/* Reusable dropdown link */}
              <div className="group">
          <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center">
              <ShoppingCart className="size-[18px]" />
              <span className="ml-3 text-[14px]">E-Commerce</span>
            </div>
            <ChevronDown className="size-[16px] transition-transform duration-200 group-hover:rotate-180" />
          </a>
          {/* Dropdown */}
          <div className="hidden group-hover:block pl-10 py-1 space-y-1">
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Customers</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Orders</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Invoices</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Shop</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Shop 2</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Single Product</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Cart</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Cart 2</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Cart 3</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Pay</a>
          </div>
        </div>


                {/* Reusable dropdown link */}
                <div className="group">
          <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center">
              <Users className="size-[18px]" />
              <span className="ml-3 text-[14px]">Community</span>
            </div>
            <ChevronDown className="size-[16px] transition-transform duration-200 group-hover:rotate-180" />
          </a>
          {/* Dropdown */}
          <div className="hidden group-hover:block pl-10 py-1 space-y-1">
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">User - Tabs</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Users - Tiles</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Profile</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Feed</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Forum</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Forum - Post</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Meetups</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Meetups-Post</a>
          </div>
        </div>


               {/* Reusable dropdown link */}
               <div className="group">
          <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center">
              <CircleDollarSign className="size-[18px]" />
              <span className="ml-3 text-[14px]">Finance</span>
            </div>
            <ChevronDown className="size-[16px] transition-transform duration-200 group-hover:rotate-180" />
          </a>
          {/* Dropdown */}
          <div className="hidden group-hover:block pl-10 py-1 space-y-1">
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Cards</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Transactions</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Transaction Details</a>
          </div>
        </div>


                {/* Reusable dropdown link */}
                <div className="group">
          <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center">
              < Briefcase className="size-[18px]" />
              <span className="ml-3 text-[14px]">Job Board</span>
            </div>
            <ChevronDown className="size-[16px] transition-transform duration-200 group-hover:rotate-180" />
          </a>
          {/* Dropdown */}
          <div className="hidden group-hover:block pl-10 py-1 space-y-1">
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Listing</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Job Post</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Compant Profile</a>
          </div>
        </div>


                {/* Reusable dropdown link */}
                <div className="group">
          <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center">
              < CheckSquare className="size-[18px]" />
              <span className="ml-3 text-[14px]">Tasks</span>
            </div>
            <ChevronDown className="size-[16px] transition-transform duration-200 group-hover:rotate-180" />
          </a>
          {/* Dropdown */}
          <div className="hidden group-hover:block pl-10 py-1 space-y-1">
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Kanban</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">List</a>
          </div>
        </div>


                {/* Reusable dropdown link */}
                <div className="group">
          <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center">
              < MessageSquare className="size-[18px]" />
              <span className="ml-3 text-[14px]">messages</span>
            </div>
            <ChevronDown className="size-[16px] transition-transform duration-200 group-hover:rotate-180" />
          </a>
        </div>

                {/* Reusable dropdown link */}
                <div className="group">
          <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center">
              < Inbox className="size-[18px]" />
              <span className="ml-3 text-[14px]">Inbox</span>
            </div>
            <ChevronDown className="size-[16px] transition-transform duration-200 group-hover:rotate-180" />
          </a>
        </div>

                {/* Reusable dropdown link */}
                <div className="group">
          <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center">
              <Calendar className="size-[18px]" />
              <span className="ml-3 text-[14px]">Calender</span>
            </div>
            <ChevronDown className="size-[16px] transition-transform duration-200 group-hover:rotate-180" />
          </a>
        </div>

                {/* Reusable dropdown link */}
                <div className="group">
          <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center">
              <Hash className="size-[18px]" />
              <span className="ml-3 text-[14px]">Campaigns</span>
            </div>
            <ChevronDown className="size-[16px] transition-transform duration-200 group-hover:rotate-180" />
          </a>
        </div>

                {/* Reusable dropdown link */}
                <div className="group">
          <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center">
              <Settings className="size-[18px]" />
              <span className="ml-3 text-[14px]">Settings</span>
            </div>
            <ChevronDown className="size-[16px] transition-transform duration-200 group-hover:rotate-180" />
          </a>
          {/* Dropdown */}
          <div className="hidden group-hover:block pl-10 py-1 space-y-1">
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">My Account</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">My Notification</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Connect Apps</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Plans</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Billing & Invoices</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Give Feedback</a>
          </div>
        </div>

                {/* Reusable dropdown link */}
                <div className="group">
          <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center">
              <Wrench className="size-[18px]" />
              <span className="ml-3 text-[14px]">Utility</span>
            </div>
            <ChevronDown className="size-[16px] transition-transform duration-200 group-hover:rotate-180" />
          </a>
          {/* Dropdown */}
          <div className="hidden group-hover:block pl-10 py-1 space-y-1">
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Changelog</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Roadmap</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">FAQS</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">EmPTY State</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">404</a>
          </div>
        </div>

        <div>
        <p className="text-xs text-gray-500 mx-6 my-8">More</p>
        </div>

                        {/* Reusable dropdown link */}
                        <div className="group">
          <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center">
              <CheckCheck className="size-[18px]" />
              <span className="ml-3 text-[14px]">Authentication</span>
            </div>
            <ChevronDown className="size-[16px] transition-transform duration-200 group-hover:rotate-180" />
          </a>
          {/* Dropdown */}
          <div className="hidden group-hover:block pl-10 py-1 space-y-1">
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Sign In</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Sign up</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Reset Password</a>
          </div>
        </div>

                        {/* Reusable dropdown link */}
                        <div className="group">
          <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center">
              < CircleDot className="size-[18px]" />
              <span className="ml-3 text-[14px]">Onboarding</span>
            </div>
            <ChevronDown className="size-[16px] transition-transform duration-200 group-hover:rotate-180" />
          </a>
          {/* Dropdown */}
          <div className="hidden group-hover:block pl-10 py-1 space-y-1">
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Step 1</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Step 2</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Step 3</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Step 4</a>
          </div>
        </div>

                        {/* Reusable dropdown link */}
        <div className="group">
          <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition">
            <div className="flex items-center">
              <Box className="size-[18px]" />
              <span className="ml-3 text-[14px]">Components</span>
            </div>
            <ChevronDown className="size-[16px] transition-transform duration-200 group-hover:rotate-180" />
          </a>
          {/* Dropdown */}
          <div className="hidden group-hover:block pl-10 py-1 space-y-1">
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Button</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Input Form</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Dropdown</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Alert & Banner</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Modal</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Pagination</a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Tabs</a> 
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Breadcrumb</a> 
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Badge</a> 
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Avatar</a> 
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Tooltip</a> 
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Accordion</a> 
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Icons</a>               
        </div>
      </div>
      </nav>
    </div>
  );
}
