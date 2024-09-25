import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/profile"
import Settings from "./pages/Settings"
import Tresor from "./pages/tresor"
import Activity from "./pages/Acitivity"
import Trends from "./pages/trends"
import BusinessCard from "./pages/BusinessCard"
import Onboarding from "./pages/Onboarding"
import Credentials from "./pages/credentials"
import Userinfo from "./pages/userinfo"
import Interests from "./pages/interests"
import SignupForm from "./components/SignupForm"
export default function App(){
  return (
      <div>
<BrowserRouter>
<Routes>
  <Route index element ={<Home/ >} />
  <Route path="/home"element ={<Home/ >} />
  <Route path="/profile"element ={<Profile/ >} />
  <Route path="/Settings"element ={<Settings/ >} />
  <Route path="/tresor"element ={<Tresor/ >} />
  <Route path="/activity"element ={<Activity/ >} />
  <Route path="/trends"element ={<Trends/ >} />
  <Route path="/businesscard"element ={<BusinessCard/ >} />
  <Route path="/Onboarding"element ={<Onboarding/ >} />
  <Route path="/credentials"element ={<Credentials/ >} />
  <Route path="/userinfo"element ={<Userinfo/ >} />
  <Route path="/interests"element ={<Interests/ >} />
  <Route path="/signup"element ={<SignupForm/ >} />
  </Routes>
</BrowserRouter>

      </div>
  )
}