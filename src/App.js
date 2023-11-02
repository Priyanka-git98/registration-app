import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';

const App = ({ user }) => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/home"
          element={user ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route index element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(App);