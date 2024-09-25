import React from 'react';

const DualBackgroundCard = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#393838]">
      <div className="w-full max-w-3xl shadow-xl rounded-lg overflow-hidden h-[480px] relative">
        {/* Left Side (White) */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-white z-10 p-4 flex flex-col justify-center items-start">
          <h2 className="text-xl font-bold mb-2">Welcome</h2>
          <p className="text-md mb-4">Get Started with your journey today!</p>
        </div>

        {/* Right Side (Glassy) */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-white bg-opacity-20 backdrop-blur-sm z-0 flex items-center justify-center">
          <div className="w-48 bg-[#fffaf0] p-2 rounded-md">
            <div className="p-0 mb-2">
              <div className="w-full h-16 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-md mb-1"></div>
              <div className="w-full h-12 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 rounded-md"></div>
            </div>
            <div className="mb-2">
              <h2 className="text-lg font-bold text-purple-800 mb-1">Richard</h2>
              <p className="text-xs text-purple-600 uppercase tracking-wide">Supreme Perfectionist</p>
            </div>
            <div className="p-0 flex justify-between items-center mb-1">
              <span className="border border-purple-300 text-purple-600 px-2 py-1 rounded">ARC</span>
              <span className="text-xs text-purple-600">Sep 1, 2024</span>
            </div>
            <div className="mt-1 text-right">
              <span className="text-xs text-purple-600 uppercase tracking-wide">Browser Company</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualBackgroundCard;
