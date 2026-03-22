import React, { useState } from 'react';
import './SignupPage.css';

// Added onNavigate to the props to allow communication with App.jsx
const SignupPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Submitted:", formData);
    // After a successful "signup", you might want to send them to login
    alert("Account created! Please log in.");
    onNavigate('login');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <p>Join our community today</p>
        
        <div className="input-group">
          <label>Username</label>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit" className="signup-button">Sign Up</button>
        
        <p className="login-link">
          Already have an account? 
          {/* Changed <a> tag to a clickable span to use onNavigate */}
          <span 
            className="link-text" 
            onClick={() => onNavigate('login')}
            style={{ cursor: 'pointer', color: '#646cff', marginLeft: '5px', fontWeight: 'bold' }}
          >
            Log in
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;