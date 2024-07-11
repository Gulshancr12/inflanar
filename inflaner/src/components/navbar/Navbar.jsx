import React, { useEffect } from 'react';
import Logo from './logo.png';
import './navbar.css';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  useEffect(() => {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    const handleNavToggle = () => {
      navLinks.classList.toggle('active');
    };

    if (navToggle) {
      navToggle.addEventListener('click', handleNavToggle);
    }

    // Clean up the event listener on component unmount
    return () => {
      if (navToggle) {
        navToggle.removeEventListener('click', handleNavToggle);
      }
    };
  }, []);

  return (
    <header className="navbar">
      <div className="logo-container">
        <a href="/home"><img src={Logo} alt="Logo" className="logo" /></a>
      </div>
      <nav className="nav-links" id="nav-links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/influencer">Influencers</a>
        <a href="/profile">Services</a>
        <a href="#pages">Pages</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="nav-toggle" id="nav-toggle"><FaBars /></button>
    </header>
  );
};

export default Navbar;
