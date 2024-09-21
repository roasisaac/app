import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/profile"
import Settings from "./pages/Settings"
import Tresor from "./pages/tresor"
import Activity from "./pages/Acitivity"
import Trends from "./pages/trends"
import BusinessCard from "./pages/BusinessCard"
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
</Routes>
</BrowserRouter>

      </div>
  )
}