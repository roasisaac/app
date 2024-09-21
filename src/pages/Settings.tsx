import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Search } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/header2';

const AccountSettingsPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar className="w-64 bg-gray-800 text-white" />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header className="bg-white shadow-sm" />

        {/* Page content */}
        <div className="p-6 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Account</h1>

          {/* Profile Card */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-400 rounded-full mr-4"></div>
                <div>
                  <h2 className="font-semibold">Profile</h2>
                  <p className="text-sm text-gray-500">McPitchi</p>
                </div>
                <Button variant="outline" className="ml-auto">Edit</Button>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-gray-500">captainchargy@gmail.com</p>
                </div>
                <Button variant="outline">Edit</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Handle</p>
                  <p className="text-sm text-gray-500">@mcpitchi</p>
                </div>
                <Button variant="outline">Edit</Button>
              </div>
            </CardContent>
          </Card>

          {/* Subscriptions Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Subscriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input placeholder="Search..." className="pl-8" />
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                  <span>Johnathan Bi</span>
                </div>
                <span className="text-sm text-gray-500">Free subscriber</span>
              </div>
            </CardContent>
          </Card>

          {/* Notifications Card */}
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Newsletter delivery</h3>
                  <p className="text-sm text-gray-500 mb-2">How would you like to receive new posts from your subscriptions?</p>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="delivery" className="mr-2" defaultChecked />
                      <span>Smart notifications (Get notified in app or email, not both)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="delivery" className="mr-2" />
                      <span>In email and app</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="delivery" className="mr-2" />
                      <span>Only in email</span>
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Likes</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span>Replies</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span>Restacks</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span>Mentions</span>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
