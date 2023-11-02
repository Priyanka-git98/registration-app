import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/authActions';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ login, user }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Redux State Before Login:', user);

    // Retrieve signup data from local storage
    const signupData = JSON.parse(localStorage.getItem('userData'));

    if (signupData) {
      if (formData.email === signupData.email && formData.password === signupData.password) {
        // Successful login; update user data
        login(signupData);
        navigate('/home');
      } else {
        console.log('Login failed. Please check your credentials.');
      }
    } else {
      // where signup data is not available
      console.log('No signup data found. Please sign up first.');
    }

    console.log('Redux State After Login:', user);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { login })(LoginForm);