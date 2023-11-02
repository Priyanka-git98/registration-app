import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { signup } from '../redux/authActions';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';





const SignupForm = ({ signup }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    // Retrieve signup data from local storage when the component mounts
    const signupData = JSON.parse(localStorage.getItem('userData'));
    console.log('Signup Data:', signupData);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the signup action with the form data
    signup(formData);
    navigate('/login');
  };

  return (
    <div>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default connect(null, { signup })(SignupForm);