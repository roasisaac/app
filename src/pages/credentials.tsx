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
              <h1 className="text-3xl font-bold">Create an account</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </CardHeader>

            <CardContent className="mb-4">
              {/* Social Login Buttons */}
              <div className="flex justify-between mb-4">
                <Button variant="outline" className="w-full mr-2">
                  <IconBrandGithub className="mr-2 h-4 w-4" /> Github
                </Button>
                <Button variant="outline" className="w-full">
                  <IconBrandGoogle className="mr-2 h-4 w-4" /> Google
                </Button>
              </div>

              <Separator className="my-4" />

              {/* Email and Password Fields */}
              <form>
                <div className="space-y-4">
                  <div className="relative">
                    <IconMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input type="email" placeholder="m@example.com" className="pl-10" />
                  </div>
                  <div className="relative">
                    <IconLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input type="password" placeholder="Password" className="pl-10" />
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
