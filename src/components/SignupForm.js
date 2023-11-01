import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../redux/authActions';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const SignupForm = ({ signup }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the signup action with the form data
    signup(formData);
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: 'white',
  };

  const textFieldStyle = {
    margin: '10px 0',
  };

  const buttonStyle = {
    marginTop: '10px',
    backgroundColor: '#1F83FF',
    color: 'white',
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        p={3}
        style={formStyle}
      >
    <div>
      <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
            Create your account
          </Typography>
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
    </Box>
    </Box>
  );
};

export default connect(null, { signup })(SignupForm);
