import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 600 seconds = 10 minutes
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Function to redirect to onboarding page
  const handleUnlock = () => {
    navigate('/credentials'); // Navigate to /onboarding
  };

  // Function to format the timer in minutes and seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-full max-w-3xl shadow-xl border border-gray-300 rounded-lg overflow-hidden h-[480px]">
        <div className="flex h-full">
          {/* Left Section */}
          <div className="bg-[#393838] text-white flex flex-col justify-center items-center p-10 w-1/2">
            <div className="text-4xl font-bold text-yellow-400">
              [Drop #1]
            </div>
            <p className="mt-4 text-gray-300 italic text-center">
              A platform about making a difference
            </p>
          </div>

          {/* Right Section */}
          <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
            <CardHeader className="text-center mb-6">
              {/* Display time in minutes and seconds */}
              <div className="text-5xl font-bold text-red-500">
                {formatTime(timeLeft)}
              </div>
            </CardHeader>

            <CardContent className="mb-4">
              {/* Unlock Button */}
              <Button 
                className="w-full bg-[#393838] hover:bg-black text-white py-2 rounded-lg font-semibold"
                onClick={handleUnlock} // Call handleUnlock function
              >
                Unlock the App
              </Button>
            </CardContent>

            <CardFooter className="text-center mt-4">
              <p className="text-gray-500 text-sm">
                Don't know the password? DM us the word "Monday" on Instagram{" "}
              </p>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
