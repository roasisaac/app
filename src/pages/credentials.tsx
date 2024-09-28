import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from "@/components/ui/checkbox";
import bookImage from '../assets/book.webp'; 
import dayImage from '../assets/day.webp'; 
import TBR from "../assets/TBR.webp";
import Notion from "../assets/Notion-logo.svg.png"
const interests = [
  'Culture', 'Technology', 'Business', 'U.S. Politics',
  'Finance', 'Food & Drink', 'Podcasts', 'Sports',
  'Art & Illustration', 'World Politics', 'Health Politics',
  'News', 'Fashion & Beauty', 'Music', 'Faith & Spirituality',
  'Climate & Environment', 'Science', 'Literature', 'Fiction',
  'Health & Wellness', 'Design', 'Travel', 'Parenting',
  'Philosophy', 'Comics', 'International', 'Crypto',
  'History', 'Humor', 'Education'
];

const CustomProgress = ({ value }) => (
  <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
    <div className="bg-[#393838] h-full transition-all duration-300 ease-in-out" style={{ width: `${value}%` }} />
  </div>
);

const InterestSelection = React.memo(({ onSubmit }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-[#393838]">Dive into your interests</h1>
      <p className="text-lg text-[#393838]">We'll recommend top publications based on the topics you select.</p>
      <div className="flex flex-wrap gap-2">
        {interests.map(interest => (
          <Button
            key={interest}
            variant={selectedInterests.includes(interest) ? "default" : "outline"}
            onClick={() => toggleInterest(interest)}
            className={`rounded-full text-sm ${selectedInterests.includes(interest)
              ? 'bg-[#393838] hover:bg-gray-700 text-white'
              : 'border-[#ddd] text-[#393838] hover:bg-gray-100'
            }`}
          >
            {interest}
          </Button>
        ))}
      </div>
      <Button onClick={() => onSubmit(selectedInterests)} className="w-full bg-[#393838]  text-white text-lg py-6 rounded-full">
        Continue
      </Button>
    </div>
  );
});

const WriterRecommendations = React.memo(({ onSubmit }) => {
  const [selectedWriters, setSelectedWriters] = useState([]);
  const writers = useMemo(() => [
    { name: 'The Pragmatic Engineer', author: 'Gergely Orosz', description: 'Big Tech and startups...', image: bookImage },
    { name: 'Another Writer', author: 'Some Author', description: 'Insightful articles...', image: dayImage },
    { name: 'Another Writer', author: 'Some Author', description: 'Insightful articles...', image: TBR },
  ], []);

  const toggleWriter = (writer) => {
    setSelectedWriters(prev =>
      prev.includes(writer)
        ? prev.filter(w => w !== writer)
        : [...prev, writer]
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-[#393838]">Writers you may like</h1>
      <p className="text-lg text-[#393838]">Here are some writers you might enjoy.</p>
      <div className="space-y-4">
        {writers.map((writer, index) => (
          <div key={index} className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <img
                src={writer.image}
                alt={writer.name}
                loading="lazy"
                className="w-14 h-14 rounded-2xl object-cover"
              />
              <div>
                <h3 className="font-bold text-[#393838]">{writer.name}</h3>
                <p className="text-[#393838]">By {writer.author}</p>
                <p className="text-[#393838]">{writer.description}</p>
              </div>
            </div>
            <Checkbox
              checked={selectedWriters.includes(writer.name)}
              onCheckedChange={() => toggleWriter(writer.name)}
              className="shrink-0 self-start"
            />
          </div>
        ))}
      </div>
      <Button onClick={() => onSubmit(selectedWriters)} className="w-full bg-[#393838]  text-white text-lg py-6 rounded-full">
        Subscribe to {selectedWriters.length} and continue
      </Button>
    </div>
  );
});

const SignUp = React.memo(({ onSubmit }) => {
  const [email, setEmail] = useState('');

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-[#393838]">Sign up to subscribe</h1>
      <p className="text-lg text-[#393838]">Substack is the home for great writing.</p>
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-[#ddd] focus:ring-[#393838] focus:border-[#393838]"
      />
      <Button onClick={() => onSubmit(email)} className="w-full bg-[#393838] text-white text-lg py-6 rounded-full">
        Subscribe and join Substack
      </Button>
      <p className="text-sm text-gray-500 text-center">
        By continuing, you agree to the <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>
      </p>
      <p className="text-sm text-center">
        Already have a Substack account? <a href="#" className="text-[#393838]">Sign in</a>
      </p>
    </div>
  );
});

const Profile = React.memo(({ onSubmit }) => {
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [bio, setBio] = useState('');

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-[#393838]">Tell us about yourself</h1>
      <p className="text-lg text-[#393838]">Add your name, a profile picture, and a bit more about who you are.</p>
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Profile</p>
        </div>
      </div>
      <div className="space-y-4">
        <Input placeholder="Name (Required)" value={name} onChange={(e) => setName(e.target.value)} className="border-[#ddd] focus:ring-[#393838] focus:border-[#393838]" />
        <Input placeholder="Handle" value={handle} onChange={(e) => setHandle(e.target.value)} className="border-[#ddd] focus:ring-[#393838] focus:border-[#393838]" />
        <Textarea placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} className="border-[#ddd] focus:ring-[#393838] focus:border-[#393838]" />
      </div>
      <Button onClick={() => onSubmit({ name, handle, bio })} className="w-full bg-[#393838] hover:bg-gray-700 text-white text-lg py-6 rounded-full">
        Continue
      </Button>
    </div>
  );
});

const DownloadApp = React.memo(({ onSubmit }) => {
  return (
    <div className="space-y-6">
    <h1 className="text-4xl font-bold text-[#393838]">Download our Notion Template</h1>
    <p className="text-lg text-[#393838]">Get the best reading experience on Android and iOS.</p>
    <div className="flex justify-center">
    <div className="flex justify-center">
  <div className="border p-4 rounded-lg shadow-md w-1/4"> {/* Set the desired width for the container */}
    <img 
      src={Notion} 
      alt="Notion Template Preview" 
      className="w-full" // Make the image take the full width of the container
    />
  </div>
</div>

</div>

    <p className="text-center">OR</p>
    <div className="flex items-center">
      <Input type="email" placeholder="leadershipproject07@gmail.com" className="flex-grow border-[#ddd] focus:ring-[#393838] focus:border-[#393838]" />
      <Button className="ml-4 bg-[#393838] hover:bg-gray-700 text-white">Send me the template</Button>
    </div>
    <Button onClick={onSubmit} className="w-full bg-[#393838] hover:bg-gray-700 text-white text-lg py-6 rounded-full">
      Continue
    </Button>
  </div>
  
  );
});

const FinalStep = React.memo(() => (
  <div className="text-center">
    <h2 className="text-xl text-[#393838]">You're all set up!</h2>
    <p className="text-[#393838]">Your journey begins now.</p>
    <Button className="mt-4 bg-[#393838] text-white"onClick={() => window.location.href = '/cardonboarding'}>Next</Button>
  
  </div>
));

const MultiStepOnboarding = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(16.67); // 6 steps => ~16.67% per step

  const nextStep = () => {
    setStep(prev => prev + 1);
    setProgress(prev => Math.min(prev + 16.67, 100));
  };

  const renderStep = useMemo(() => {
    switch (step) {
      case 1:
        return <InterestSelection onSubmit={nextStep} />;
      case 2:
        return <WriterRecommendations onSubmit={nextStep} />;
      case 3:
        return <SignUp onSubmit={nextStep} />;
      case 4:
        return <Profile onSubmit={nextStep} />;
      case 5:
        return <DownloadApp onSubmit={nextStep} />;
      case 6:
        return <FinalStep />;
      default:
        return null;
    }
  }, [step]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
      <Card className="w-full max-w-xl border border-[#ddd] shadow-none bg-white">
        <CardContent className="pt-6">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-[#48352c]">Step {step} of 6</span>
            </div>
            <CustomProgress value={progress} />
          </div>
          {renderStep}
        </CardContent>
      </Card>
    </div>
  );
};

export default MultiStepOnboarding;
