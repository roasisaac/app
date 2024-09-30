import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import Tresor from "./pages/Tresor"
import Activity from "./pages/Acitivity" // Ensure the file exists and the path is correct
import Trends from "./pages/Trends"
import BusinessCard from "./pages/BusinessCard"
import Onboarding from "./pages/Onboarding"
import Credentials from "./pages/credentials" // Ensure the file exists and the path is correct

import Cardonboarding from "./pages/cardonboarding" // Ensure the file exists and the path is correct
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/tresor" element={<Tresor />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/businesscard" element={<BusinessCard />} />
          <Route path="/Onboarding" element={<Onboarding />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/cardonboarding" element={<Cardonboarding />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}