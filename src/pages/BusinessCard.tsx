import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
const BusinessCard = () => {
  return (
    <Card className="w-64 bg-[#fffaf0] p-4">
      <CardContent className="p-0 mb-4">
        <div className="w-full h-32 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-lg mb-2"></div>
        <div className="w-full h-24 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 rounded-lg"></div>
      </CardContent>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-purple-800 mb-1">richard</h2>
        <p className="text-sm text-purple-600 uppercase tracking-wide">Supreme Perfectionist</p>
      </div>
      <CardFooter className="p-0 flex justify-between items-center">
        <Badge variant="outline" className="border-purple-300 text-purple-600">
          ARC
        </Badge>
        <span className="text-sm text-purple-600">Sep 1, 2024</span>
      </CardFooter>
      <div className="mt-4 text-right">
        <span className="text-sm text-purple-600 uppercase tracking-wide">Browser Company</span>
      </div>
    </Card>
  );
};

export default BusinessCard;