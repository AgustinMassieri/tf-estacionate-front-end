import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import './Home.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signUp" element={<SignUp />} />
    </Routes>
  );
}