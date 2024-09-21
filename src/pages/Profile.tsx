import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { MoreHorizontal, CreditCard, ChartArea } from "lucide-react";
import Sidebar from '@/components/Sidebar';
import Header from '@/components/header3';

export default function ProfilePage() {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="flex-grow overflow-y-auto">
          <Profile />
        </main>
      </div>
    </div>
  );
}

function Profile() {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            
            <div className="flex items-center">
              <div>
                <h2 className="text-2xl font-bold">McRitchi</h2>
                <p className="text-sm text-gray-500">@mcritchi</p>
              </div>
              
              {/* Icon with title and border, redirects to /Analytics */}
              <div
                className="ml-4 p-2 border border-[#ddd] rounded-lg flex items-center cursor-pointer"
                onClick={() => window.location.href = '/Activity'}
              >
                <ChartArea className="h-6 w-6 text-gray-500 mr-2" />
                <span className="text-gray-600">Analytics</span>
              </div>
              
              {/* Icon with title and border, redirects to /Payments */}
              <div
                className="ml-4 p-2 border border-[#ddd] rounded-lg flex items-center cursor-pointer"
                onClick={() => window.location.href = '/businesscard'}
              >
                <CreditCard className="h-6 w-6 text-gray-500 mr-2" />
                <span className="text-gray-600">Membership</span>
              </div>
            </div>
          </div>
          <div className="w-12 h-12 bg-yellow-400 rounded-full overflow-hidden">
            <div className="w-full h-full bg-green-500 rounded-tl-full"></div>
          </div>
        </div>
       
        <p className="text-sm text-blue-500 mb-4">See subscribers</p>
       
        <div className="flex gap-2 mb-4">
          <Button className="flex-1 bg-orange-500 hover:bg-orange-600">New post</Button>
          <Button variant="outline" className="flex-1">Edit profile</Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
       
        <Tabs defaultValue="likes">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="likes">Likes</TabsTrigger>
            <TabsTrigger value="reads">Reads (1)</TabsTrigger>
          </TabsList>
          <TabsContent value="likes">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Avatar>
                    <img src="/api/placeholder/30/30" alt="Alpha Mindset" />
                  </Avatar>
                  <div>
                    <p className="font-semibold">Alpha Mindset</p>
                    <p className="text-sm text-gray-500">
                      Alpha Journal · <span className="text-orange-500">Subscribe</span>
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                <Card className="bg-gray-100">
                  <CardContent className="p-4">
                    <p className="mb-2">
                      <span className="bg-yellow-200">Once you understand the power of your words,</span> you won't just say anything.
                    </p>
                    <p>
                      Once you understand the power of your thoughts, you won't just think anything.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  }
  