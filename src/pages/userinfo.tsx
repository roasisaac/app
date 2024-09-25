import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { IconBrandGithub, IconMail, IconLock, IconBrandGoogle } from "@tabler/icons-react"; // Import Tabler icons

const SignUpForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-full max-w-3xl shadow-xl border border-gray-300 rounded-lg overflow-hidden h-[480px]">
        <div className="flex h-full justify-center">
          {/* Sign-Up Form Section */}
          <div className="w-full bg-white p-10 flex flex-col justify-center">
            <CardHeader className="text-center mb-6">
              <h1 className="text-3xl font-bold">  Share a bit about yourself </h1>
              <p className="text-sm text-muted-foreground">
              to create your account
              </p>
            </CardHeader>

            <CardContent className="mb-4">
              {/* Social Login Buttons */}
          

              <Separator className="my-4" />

              {/* Personal Questions */}
              <form>
                <div className="space-y-4">
                  <div className="relative">
                    <Input type="text" placeholder="What is your name?" className="pl-3" />
                  </div>
                  <div className="relative">
                    <Input type="text" placeholder="What is your favorite hobby?" className="pl-3" />
                  </div>
                  <div className="relative">
                    <Input type="text" placeholder="Tell us something about yourself." className="pl-3" />
                  </div>
                </div>
              </form>
            </CardContent>

            <CardFooter className="pt-4">
              <Button className="w-full bg-[#393838] hover:bg-black text-white py-2 rounded-lg font-semibold">
                Create account
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignUpForm;
