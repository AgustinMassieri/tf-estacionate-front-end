import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import './styles/Home.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signUp" element={<SignUp />} />
    </Routes>
  );
}