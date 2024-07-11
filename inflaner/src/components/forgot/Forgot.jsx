import React from 'react';
import './forgot.css';
import forgotImage from './forgotimage.png';

const Forgot = () => {
  return (
    <div className="forgot-container">
      <div className="forgot-form">
        <h2>Forgot Password</h2>
        <p>Did you forget your password? Don't worry. Please submit the form below using your email, and get a reset password link.</p>
        <input type="email" placeholder="Enter your email" />
        <button>Send Reset Link</button>
        <p><a href="/login">Go to login page</a></p>
      </div>
      <div className="forgot-image">
        <img src={forgotImage} alt="Forgot Password" />
      </div>
    </div>
  );
};

export default Forgot;
