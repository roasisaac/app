import React from 'react';

const InterestsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-2xl bg-white shadow-md rounded-md p-10">
        <h1 className="text-gray-800 mb-5">Dive into your interests</h1>
        <p className="text-gray-600 mb-10">We'll recommend great writing based on the topics you select</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <button className="bg-gray-200 text-gray-800 rounded-md py-3 px-5 hover:bg-gray-300 transition-colors">Culture</button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-3 px-5 hover:bg-gray-300 transition-colors">Technology</button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-3 px-5 hover:bg-gray-300 transition-colors">Business</button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-3 px-5 hover:bg-gray-300 transition-colors">U.S. Politics</button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-3 px-5 hover:bg-gray-300 transition-colors">Finance</button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-3 px-5 hover:bg-gray-300 transition-colors">Food & Drink</button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-3 px-5 hover:bg-gray-300 transition-colors">Podcasts</button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-3 px-5 hover:bg-gray-300 transition-colors">Sports</button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-3 px-5 hover:bg-gray-300 transition-colors">Art & Illustration</button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-3 px-5 hover:bg-gray-300 transition-colors">World Politics</button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-3 px-5 hover:bg-gray-300 transition-colors">Health Politics</button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-3 px-5 hover:bg-gray-300 transition-colors">News</button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-3 px-5 hover:bg-gray-300 transition-colors">Fashion & Beauty</button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-3 px-5 hover:bg-gray-300 transition-colors">Music</button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-3 px-5 hover:bg-gray-300 transition-colors">Faith & Spirituality</button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-3 px-5 hover:bg-gray-300 transition-colors">+</button>
        </div>
      </div>
    </div>
  );
};

export default InterestsPage;