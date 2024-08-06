import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
  
    return (
      <div>
        <h2>Login Page</h2>
        <p>Welcome to the Login page!</p>
        <button onClick={() => navigate('/profile')}>Go to Profile</button>
      </div>
    );
  };

export default Login;
