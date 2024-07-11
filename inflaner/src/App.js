import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Home from "./components/Home/Home";
import SignupPage from "./components/signup/Signup";
import Forgot from "./components/forgot/Forgot";
import Change from "./components/change/Change";
import About from "./components/aboutus/About";
import Influencer from "./components/influencer/Influencer";
import Profile from "./components/Profile/Profile";




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/login" element={<Login/>}  />
        <Route path="/" element={<Home/>}  />
        <Route path="/home" element={<Home/>}  />
        <Route path="/signup" element={<SignupPage />} />  
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/change" element={<Change />} />
        <Route path="/about" element={<About />} />
        <Route path="/influencer" element={<Influencer />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;