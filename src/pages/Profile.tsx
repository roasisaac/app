import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { MoreHorizontal, CreditCard, ChartArea, X } from "lucide-react";
import Frame from "../assets/Frame.png";
import Siri from "../assets/Siri.png";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Define image options for the carousel
  const imageOptions = [
    { src: Siri, alt: "Siri Image" },
    { src: Frame, alt: "Frame Image" },
    // Add any additional images here
  ];

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setIsDrawerOpen(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div>
              <h2 className="text-2xl font-bold">McRitchi</h2>
              <p className="text-sm text-gray-500">@mcritchi</p>
            </div>
            
            <div
              className="ml-4 p-2 border border-[#ddd] rounded-lg flex items-center cursor-pointer"
              onClick={() => window.location.href = '/Activity'}
            >
              <ChartArea className="h-6 w-6 text-gray-500 mr-2" />
              <span className="text-gray-600">Analytics</span>
            </div>
            
            <div
              className="ml-4 p-2 border border-[#ddd] rounded-lg flex items-center cursor-pointer"
              onClick={() => window.location.href = '/businesscard'}
            >
              <CreditCard className="h-6 w-6 text-gray-500 mr-2" />
              <span className="text-gray-600">Membership</span>
            </div>
          </div>
        </div>
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <div className="w-12 h-12 rounded-full overflow-hidden cursor-pointer">
              {selectedImage ? (
                <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-green-500 rounded-tl-full"></div> // Placeholder for when no image is selected
              )}
            </div>
          </DrawerTrigger>
          <DrawerContent className="bg-white">
            <DrawerHeader className="flex justify-between items-center">
              <DrawerTitle>Choose Profile Image</DrawerTitle>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsDrawerOpen(false)}
                className="hover:bg-gray-100 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </DrawerHeader>
            <div className="p-4">
              <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                  {imageOptions.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                              onClick={() => handleImageSelect(image)}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </DrawerContent>
        </Drawer>
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

  
