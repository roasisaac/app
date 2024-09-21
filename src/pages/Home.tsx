import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Heart, MessageCircle, Repeat, Share, MoreHorizontal, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const PostActionsPopover = () => {
  return (
    <PopoverContent className="w-48 bg-white-300">
      <ul className="text-gray-700">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Copy</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Follow</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mute</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">Delete</li>
      </ul>
    </PopoverContent>
  );
};

const Post = ({ content, timeAgo }) => {
  const [likes, setLikes] = useState(38);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(1);
  const [shares, setShares] = useState(1);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="relative mb-8 border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex-shrink-0"></div>
          <div className="ml-2">
            <span className="font-semibold">User Name</span>
            <span className="ml-2 text-gray-500 text-sm">{timeAgo}</span>
          </div>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="text-gray-500">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PostActionsPopover />
        </Popover>
      </div>

      <p className="mb-4">{content}</p>

      <div className="flex justify-between items-center mt-4 mb-4 text-gray-500">
        <Button
          variant="ghost"
          size="sm"
          className={`hover:text-red-500 flex items-center space-x-1 ${liked ? 'text-red-500' : ''}`}
          onClick={toggleLike}
        >
          <Heart className="h-5 w-5" />
          <span className="text-sm">{likes}</span>
        </Button>

        <Button variant="ghost" size="sm" className="hover:text-blue-500 flex items-center space-x-1">
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm">{comments}</span>
        </Button>

        <Button variant="ghost" size="sm" className="hover:text-green-500 flex items-center space-x-1">
          <Repeat className="h-5 w-5" />
          <span className="text-sm">{shares}</span>
        </Button>

        <Button variant="ghost" size="sm" className="hover:text-gray-700 flex items-center space-x-1">
          <Share className="h-5 w-5" />
        </Button>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="comments" className="border-b-0">
          <AccordionTrigger className="absolute bottom-2 right-2 p-0 hover:no-underline">
            <ChevronDown className="h-4 w-4 text-gray-500 hover:text-gray-700" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 mt-4">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                <div className="flex-1">
                  <p className="font-semibold">Commenter 1</p>
                  <p className="text-sm">This is a great post!</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                <div className="flex-1">
                  <textarea 
                    className="w-full p-2 border rounded-md" 
                    rows="2" 
                    placeholder="Add a comment..."
                  ></textarea>
                  <Button className="mt-2">Post Comment</Button>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const App = () => {
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const openNewPost = () => {
    setIsNewPostOpen(true);
  };

  const closeNewPost = () => {
    setIsNewPostOpen(false);
  };

  const addPost = (content) => {
    setPosts([{ id: Date.now(), content, timeAgo: 'Just now' }, ...posts]);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow ml-0 overflow-y-auto">
        <Header />
        <div className="flex justify-center p-4 relative">
          <div className="flex items-center bg-gray-100 p-4 rounded-md w-full max-w-xl cursor-pointer" onClick={openNewPost}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex-shrink-0"></div>
            <span className="ml-4 flex-grow text-left text-gray-500">
              What's on your mind?
            </span>
            <button className="ml-4 bg-orange-300 text-white py-2 px-4 rounded">
              Post
            </button>
          </div>
          {isNewPostOpen && <NewPostPopover onClose={closeNewPost} onPost={addPost} />}
        </div>

        <div className="max-w-xl mx-auto mt-4">
          {posts.map((post) => (
            <Post key={post.id} content={post.content} timeAgo={post.timeAgo} />
          ))}
        </div>
      </div>
    </div>
  );
};

const NewPostPopover = ({ onClose, onPost }) => {
  const [inputValue, setInputValue] = useState('');

  const handlePost = () => {
    if (inputValue.trim()) {
      onPost(inputValue);
      setInputValue('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-96 p-4 relative">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">New post</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">&times;</button>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex-shrink-0"></div>
          <textarea
            rows="2"
            placeholder="What's on your mind?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="ml-4 flex-grow p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex justify-end">
          <Button
            onClick={handlePost}
            disabled={!inputValue.trim()}
            className={inputValue.trim() ? '' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;