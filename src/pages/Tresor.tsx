import React from 'react';
import { CheckCircle } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/header2';

const MainComponent = () => {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-grow flex flex-col overflow-hidden">
        <Header />
        <main className="flex-grow overflow-y-auto">
          {/* Tabs */}
          <div className="border-b border-gray-200 p-4">
            <div className="flex space-x-4">
              <TabButton active>All</TabButton>
              <TabButton>Paid</TabButton>
              <TabButton>Saved</TabButton>
              <TabButton>Media</TabButton>
              <TabButton>Archived</TabButton>
            </div>
          </div>

          {/* Content */}
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
              <h2 className="text-xl font-semibold mb-2">You're all caught up.</h2>
              <p className="text-gray-600 mb-4">Check out Discover for more.</p>
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
                Explore publications
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const TabButton = ({ children, active }) => (
  <button
    className={`px-3 py-2 rounded-md transition-colors ${
      active
        ? 'bg-gray-100 text-gray-900'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`}
  >
    {children}
  </button>
);

export default MainComponent;