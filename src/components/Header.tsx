import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Header: React.FC = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Home');
  const [activeMenuItem, setActiveMenuItem] = useState('U.S. Election');
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([
    { author: 'Simple Man', date: '4. Sept', content: 'The greatest show of strength in a man is self-denial.', category: 'Principles' },
  ]);

  const handleProfileClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleTabSelect = (tab: string) => {
    setSelectedTab(tab);
    setIsPopoverOpen(false);
  };

  const handleMenuItemClick = (item: string) => {
    setActiveMenuItem(item);
  };

  const handleNewPostChange = (e) => setNewPost(e.target.value);

  const handleAddPost = () => {
    if (newPost.trim() !== '') {
      const newPostObj = {
        author: 'You',
        date: new Date().toLocaleDateString(),
        content: newPost,
        category: 'General',
      };
      setPosts([newPostObj, ...posts]);
      setNewPost('');
    }
  };

  const renderPosts = () => {
    return posts.map((post, index) => (
      <div key={index} className="w-full max-w-xl mb-4 p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <h3 className="font-bold text-[#363737]">{post.author}</h3>
            <p className="text-sm text-[#888888]">{post.date}</p>
          </div>
        </div>
        <p className="mb-4 text-[#363737]">{post.content}</p>
        <span className="inline-block px-2 py-1 bg-gray-200 text-[#363737] rounded-full text-sm">{post.category}</span>
      </div>
    ));
  };

  return (
    <>
      {/* Fixed main header */}
      <div className="sticky top-0 z-20 bg-white">
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#363737]">{selectedTab}</h1>

          <div className="flex items-center space-x-4">
            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search "
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
                  <hr className="border-gray-200" />
                  <div className="p-2">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Support
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sign out
                    </button>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="p-2 text-center text-xs text-gray-500">
                    <p>About</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Collection notice</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-200" />
      </div>

      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="h-[0px]"></div>

      {/* Scrollable subheader with larger, instant-change tabs */}
      <div className="bg-white py-4 px-4">
        <div className="flex justify-start space-x-3 overflow-x-auto text-sm">
          {[
            'All', 'Principles', 'Templates',
          ].map(item => (
            <button
              key={item}
              onClick={() => handleMenuItemClick(item)}
              className={`px-4 py-2 rounded-full ${activeMenuItem === item ? 'bg-[#393838] text-white' : 'bg-gray-100 text-[#393838]'} hover:bg-gray-200`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <hr className="border-t border-gray-200" />



   
    </>
  );
};

export default Header;