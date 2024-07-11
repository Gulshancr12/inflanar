import React, { useState } from 'react';
import './signup.css';
import bodyImage from './bodyimage.png';
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

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
      setSuccessMessage('Sign up successful!');
      console.log('Form submitted', formData);
    } else {
      // Reset success message if there are validation errors
      setSuccessMessage('');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Get Started Now</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}

          <div className="terms">
            <input type="checkbox" name="terms" id="terms" required />
            <label htmlFor="terms">I agree to terms & policy</label>
          </div>
          <button className="signup" type="submit">Signup</button>
        </form>

        {successMessage && <p className="success">{successMessage}</p>}

        <div className="social-login">
          <button className="google"><FaGoogle /> Sign in with Google</button>
          <button className="apple"><FaApple /> Sign in with Apple</button>
        </div>
        <p>Already have an account? <a href="/login">Sign in</a></p>
      </div>
      <div className="signup-image">
        <img src={bodyImage} alt="Body" />
      </div>
    </div>
  );
}

export default Signup;
