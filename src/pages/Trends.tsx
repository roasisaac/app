import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';

const ExamplePost = ({ title, content, author, date }) => (
  <div className="mb-4 p-4 border rounded-lg">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-500">By {author} on {date}</p>
    <p className="mt-2">{content}</p>
  </div>
);

const FeaturedProfile = ({ name, role }) => (
  <div className="flex items-center justify-between mb-2">
    <div>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
    <button className="p-1 bg-orange-500 text-white rounded-full hover:bg-blue-600">
      <Plus size={16} />
    </button>
  </div>
);

const App = () => {
  const posts = [
    { id: 1, title: "Exploring React Hooks", content: "React Hooks have revolutionized the way we write components...", author: "Jane Doe", date: "2024-09-15" },
    { id: 2, title: "The Future of AI", content: "As AI continues to advance, we're seeing incredible applications...", author: "John Smith", date: "2024-09-18" },
    { id: 3, title: "Sustainable Tech Practices", content: "In an era of climate change, it's crucial for tech companies...", author: "Emily Chen", date: "2024-09-20" },
  ];

  const featuredProfiles = [
    { id: 1, name: "Alice Johnson", role: "UX Designer" },
    { id: 2, name: "Bob Williams", role: "Full Stack Developer" },
    { id: 3, name: "Carol Martinez", role: "Data Scientist" },
    { id: 4, name: "David Lee", role: "Product Manager" },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow ml-0 overflow-y-auto">
        <Header />
        <div className="flex p-4">
          <div className="w-2/3 pr-4">
            <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
            {posts.map(post => (
              <ExamplePost key={post.id} {...post} />
            ))}
          </div>
          <div className="w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>Featured Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                {featuredProfiles.map(profile => (
                  <FeaturedProfile key={profile.id} {...profile} />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;