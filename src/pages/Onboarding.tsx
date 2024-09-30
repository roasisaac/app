import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import {
  Card,
  CardContent,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { IconBrandMeta } from '@tabler/icons-react';

const chartData = [
  { name: 'Members', value: 40, fill: '#393838' }, // 40% = 500/1250
];

const RadialChart = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-40 h-40 relative">
        <RadialBarChart
          width={160}
          height={160}
          cx={80}
          cy={80}
          innerRadius={60}
          outerRadius={80}
          barSize={10}
          data={chartData}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            dataKey="value"
            cornerRadius={30}
            fill="#393838"
          />
        </RadialBarChart>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#393838]">
          <span className="text-2xl font-bold">500</span>
          <span className="text-sm">/ 1250</span>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-[#393838]">Members</h2>
        <p className="text-sm text-gray-500">accepted</p>
      </div>
    </div>
  );
};

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUnlock = () => {
    if (password === '123') {
      navigate('/credentials');
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fafafa]">
      <Card className="w-full max-w-3xl shadow-xl border border-gray-300 rounded-lg overflow-hidden">
        <div className="flex h-[500px]">
          {/* Left side with Acme and Meta icon */}
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
          {/* Right side with chart and form */}
          <CardContent className="w-1/2 p-8 bg-white flex flex-col justify-between">
            <RadialChart />
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#393838]">Unlock the app</h2>
              <p className="text-sm text-gray-500">
                To unlock enter password
              </p>
              <Input
                type="password"
                placeholder="password"
                className="placeholder-gray-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                className="w-full bg-[#393838] hover:bg-[#393838]/90 text-white font-semibold"
                onClick={handleUnlock}
              >
                Unlock the app
              </Button>
              <p className="text-xs text-center text-gray-500">
                To get password dm drop 1 on instagram
              </p>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
