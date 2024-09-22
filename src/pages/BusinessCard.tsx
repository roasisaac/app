import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share, Save, Edit3 } from 'lucide-react'; // Added Edit3 icon
import Sidebar from '@/components/Sidebar';
import Header from '@/components/header2';

const BusinessCard = () => {
  return (
    <Card className="w-56 bg-[#fffaf0] p-4 rounded-md"> {/* Less rounded corners */}
      <CardContent className="p-0 mb-4">
        <div className="w-full h-24 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-md mb-2"></div> {/* Less rounded */}
        <div className="w-full h-16 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 rounded-md"></div> {/* Less rounded */}
      </CardContent>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-purple-800 mb-1">Richard</h2>
        <p className="text-sm text-purple-600 uppercase tracking-wide">Supreme Perfectionist</p>
      </div>
      <CardFooter className="p-0 flex justify-between items-center">
        <Badge variant="outline" className="border-purple-300 text-purple-600">
          ARC
        </Badge>
        <span className="text-sm text-purple-600">Sep 1, 2024</span>
      </CardFooter>
      <div className="mt-2 text-right">
        <span className="text-xs text-purple-600 uppercase tracking-wide">Browser Company</span>
      </div>
    </Card>
  );
};

const BusinessCardWrapper = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 flex flex-col items-center justify-start"> {/* Changed justify-center to justify-start */}
          
          {/* New Header Section */}
          <div className="w-full max-w-2xl mb-6">
            <h1 className="text-3xl font-semibold text-gray-800 text-left">Membership Card</h1>
            <p className="text-lg text-gray-600 text-left">Here's your Membership Card.Show it off to the world or keep it to yourself.</p>
          </div>
          
          {/* Outer Container */}
          <Card className="w-full max-w-2xl p-6 bg-gray-100 shadow-md rounded-md"> {/* Wider container and less rounded */}
            
            {/* Business Card inside the parent card */}
            <CardContent className="flex flex-col items-center">
              <BusinessCard />
            </CardContent>
            
            {/* Icons Section - Now beneath the BusinessCard inside CardFooter */}
            <CardFooter className="flex justify-center space-x-4 mt-4">
              <div className="p-2 bg-gray-200 rounded-md cursor-pointer">
                <Share className="text-gray-600" />
              </div>
              <div className="p-2 bg-gray-200 rounded-md cursor-pointer">
                <Save className="text-gray-600" />
              </div>
              <div className="p-2 bg-gray-200 rounded-md cursor-pointer">
                <Edit3 className="text-gray-600" />
              </div>
            </CardFooter>

          </Card>
        </main>
      </div>
    </div>
  );
};

export default BusinessCardWrapper;
