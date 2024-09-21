import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const Header1: React.FC = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Home');

  const handleProfileClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleTabSelect = (tab: string) => {
    setSelectedTab(tab);
    setIsPopoverOpen(false);
  };

  return (
    <>
      {/* Fixed main header */}
      <div className="sticky top-0 z-20 bg-white">
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#363737]">Profile</h1>

          <div className="flex items-center space-x-4">
            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <div
                className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center cursor-pointer"
                onClick={handleProfileClick}
              >
                <ChevronDown className="text-white" size={16} />
              </div>

              {isPopoverOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded-lg z-10">
                  <div className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-orange-400 rounded-full" />
                      <div>
                        <h3 className="font-semibold">McRitchi</h3>
                        <p className="text-sm text-gray-500">@mcritchi</p>
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="p-2">
                    {['Home', 'Inbox', 'Chat', 'Activity', 'Explore'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => handleTabSelect(tab)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-200" />
      </div>
    </>
  );
};

export default Header1;
