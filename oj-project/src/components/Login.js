import React, { useState } from 'react';
import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom';
import './login.css'; // Import the CSS file for styling
import Home from './Home.js';


const Login = () => {
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [email , setEmail] = useState('');

  var history = useNavigate();

  const handleuserNameChange = (e) => {
    setuserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the login data
    const loginData = {
      email,
      userName,
      password,
    };

    // Send a POST request to the backend server
    axios
      .post('http://localhost:4000/OJ/auth/signin', loginData)
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
        // Reset the form
        setuserName('');
        setPassword('');
        setEmail('');
        history('/home');
      })
      .catch((error) => {
        // Handle errors
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="email" className="form-group"></label>
            <input
              type="email"
              id="email"
              placeholder="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="userName"
              value={userName}
              onChange={handleuserNameChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        <div className="signup-link">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>

    </div>
  );
};

export default Login;
