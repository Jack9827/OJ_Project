import React, { useState } from 'react';

import axios from 'axios';

const Signup = () => {
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleuserNameChange = (e) => {
    setuserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the signup data
    const signupData = {
      userName,
      email,
      password,
    };

    // Send a POST request to the backend server
    axios.post('http://localhost:4000/OJ/auth/signup', signupData)
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
        // Reset the form
        setuserName('');
        setPassword('');
        setEmail('');
      })
      .catch((error) => {
        // Handle errors
        console.log(error.message);
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">userName</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={handleuserNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      <div><p>login {" "}</p>
        <a href='/'>login</a>
      </div>
      
    </div>
  );
};

export default Signup;
