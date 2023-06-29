import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import {  Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    
  );
};

export default App;
