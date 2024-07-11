// Change.jsx
import React, { useState } from 'react';
import './change.css';
import forgotImage from './forgotimage.png'; // Make sure forgotimage.png is in the same directory
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Change = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="change-container">
      <div className="change-form">
        <h2>Change Password</h2>
        <p>Enter your New Password</p>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
          />
          <span onClick={togglePasswordVisibility} className="password-toggle-icon">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="password-container">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
          />
          <span onClick={toggleConfirmPasswordVisibility} className="password-toggle-icon">
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button>Change Password</button>
      </div>
      <div className="change-image">
        <img src={forgotImage} alt="Change Password" />
      </div>
    </div>
  );
};

export default Change;
