import React, { useState } from 'react';
import './login.css';
import bodyImage from './bodyimage.png';
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        'Password should have minimum length of 8 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission
      setSuccessMessage('Logged in successfully!');
      console.log('Form submitted', formData);
    } else {
      // Reset success message if there are validation errors
      setSuccessMessage('');
    }
  };

  return (
    <div id="gulu">
      <div className="login-page">
        <div className="login-container">
          <div className="login-form">
            <h1>Welcome back!</h1>
            <p>Enter your credentials to access your account</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <label htmlFor="password">Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="password-toggle-icon"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && <p className="error">{errors.password}</p>}

              <div className="remember-forgot">
                <div id="checkbox">
                  <input type="checkbox" name="remember" />
                </div>
                <div id="remember_me_text">Remember me for 30 days</div>
                <div id="forget_pass">
                  <a href="/forgot">Forgot password?</a>
                </div>
              </div>

              <button type="submit" className="login-button">
                Login
              </button>
            </form>

            {successMessage && <p className="success">{successMessage}</p>}

            <div className="or-separator">OR</div>

            <div className="social-login">
              <button className="social-button google">
                <FaGoogle /> Sign in with Google
              </button>
              <button className="social-button apple">
                <FaApple /> Sign in with Apple
              </button>
            </div>

            <p className="signup-link">
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
          <div className="login-image">
            <img src={bodyImage} alt="Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
