import React, { useState } from 'react';
import { Flag, Home, AlignEndHorizontal, Inbox,Settings , Plus, MoreHorizontal, FileText, Edit, X } from 'lucide-react'; // Changed from MessageSquare to Lock
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SelectedCard = ({ type, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-96 max-w-md relative z-60 bg-white">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            {type === 'note' ? (
              <>
                <Edit className="w-5 h-5" />
                <span>Create a New Note</span>
              </>
            ) : (
              <>
                <FileText className="w-5 h-5" />
                <span>Create a Longform Post</span>
              </>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            {type === 'note'
              ? 'Write a quick note here.'
              : 'Start drafting your longform post.'}
          </CardDescription>
          <textarea
            placeholder={type === 'note' ? 'Write your note here...' : 'Draft your post here...'}
            className="w-full h-48 mt-2 p-2 border border-gray-300 rounded-md"
          />
        </CardContent>
        <CardFooter>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 flex items-center space-x-2"
          >
            <X className="w-4 h-4" />
            <span>Close</span>
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClose = () => {
    setSelectedOption(null);
  };

  return (
    <div className="flex h-screen relative">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-20 h-full bg-white flex flex-col items-center py-4 border-r border-gray-200 z-20">
        <div className="mb-6">
          <Flag 
            className="w-8 h-8 text-orange-500 cursor-pointer"
          />
        </div>
        <div className="flex flex-col space-y-8 flex-grow">
          <Home 
            className="w-7 h-7 text-gray-600 cursor-pointer" 
            onClick={() => window.location.href = '/home'}
          />
          
          <Inbox
            className="w-7 h-7 text-gray-600 cursor-pointer" 
            onClick={() => window.location.href = '/Tresor'} // Updated to Lock icon for Tresor path
          />
         <AlignEndHorizontal
            className="w-7 h-7 text-gray-600 cursor-pointer" 
            onClick={() => window.location.href = '/trends'}
          />
          <Settings 
            className="w-7 h-7 text-gray-600 cursor-pointer" 
            onClick={() => window.location.href = '/settings'}
          />
        </div>
        <div className="mt-auto mb-6 flex flex-col space-y-6">
          {/* Plus Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center cursor-pointer focus:outline-none">
                <Plus className="w-6 h-6 text-white" />
              </div>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-48 p-2 rounded-lg shadow-lg bg-white">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => setSelectedOption('note')}
                  className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md focus:outline-none"
                >
                  <Edit className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Principle</span>
                </button>
                <button
                  onClick={() => setSelectedOption('longform')}
                  className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md focus:outline-none"
                >
                  <FileText className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Template</span>
                </button>
              </div>
            </PopoverContent>
          </Popover>

          {/* More Options Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer focus:outline-none">
                <MoreHorizontal className="w-6 h-6 text-gray-600" />
              </div>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-48 p-2 rounded-lg shadow-lg bg-white">
              <div className="flex flex-col space-y-2">
                <button className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md focus:outline-none">
                  <span className="text-gray-700">Option 1</span>
                </button>
                <button className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md focus:outline-none">
                  <span className="text-gray-700">Option 2</span>
                </button>
              </div>
            </PopoverContent>
          </Popover>

          {/* Redirect Circle */}
          <div 
            className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full cursor-pointer"
            onClick={() => window.location.href = '/profile'}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow ml-20 bg-gray-100">
        {/* Your main content goes here */}
      </div>

      {/* Modal Overlay */}
      {selectedOption && (
        <>
          {/* Full-page overlay */}
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={handleClose}></div>
          
          {/* Modal that overlays header */}
          <SelectedCard type={selectedOption} onClose={handleClose} />
        </>
      )}
    </div>
  );
};

export default Sidebar;
