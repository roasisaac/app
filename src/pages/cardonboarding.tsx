import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const DualBackgroundCard = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleGetStarted = () => {
    navigate('/home'); // Redirect to /home when button is clicked
  };

  return (
    <div className="flex items-center justify-center h-screen relative">
      {/* Background SVG with #393838 gradient */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="absolute inset-0"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#393838', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#6E6E6E', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)" />
      </svg>

      <div className="w-full max-w-3xl shadow-xl rounded-lg overflow-hidden h-[480px] relative z-10 flex">
        {/* Left Side (Welcome Section) */}
        <div className="w-1/2 bg-white z-10 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#393838' }}>Welcome to Arc, Richard</h2>
          <p className="text-lg mb-4" style={{ color: '#393838' }}>
            Here’s your Arc Card. Show it off to the world or keep it to yourself.
          </p>
          <button
            className="mt-4 bg-[#393838] text-white px-4 py-2 rounded-md hover:bg-[#6E6E6E] transition duration-200"
            onClick={handleGetStarted} // Call handleGetStarted on click
          >
            Get Started
          </button>
        </div>

        {/* Right Side (Card Section) */}
        <div className="w-1/2 bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
          <div className="w-48 bg-[#fffaf0] p-4 rounded-lg shadow-md">
            <div className="mb-4">
              <div className="w-full h-16 bg-gradient-to-br from-[#6E6E6E] via-[#393838] to-[#6E6E6E] rounded-md mb-2"></div>
              <div className="w-full h-12 bg-gradient-to-r from-[#6E6E6E] via-[#393838] to-[#393838] rounded-md"></div>
            </div>
            <div className="text-center mb-2">
              <h2 className="text-lg font-bold" style={{ color: '#393838' }}>Richard</h2>
              <p className="text-xs uppercase tracking-wide" style={{ color: '#6E6E6E' }}>Shy Trader</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="border border-[#6E6E6E] text-[#6E6E6E] px-2 py-1 rounded">ARC</span>
              <span className="text-xs" style={{ color: '#6E6E6E' }}>Sep 1, 2024</span>
            </div>
            <div className="mt-2 text-right">
              <span className="text-xs uppercase tracking-wide" style={{ color: '#6E6E6E' }}>Browser Company</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualBackgroundCard;
