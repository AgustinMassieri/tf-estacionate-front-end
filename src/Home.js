import * as React from 'react';
import { Link } from 'react-router-dom';
import estacionateLogo from './estacionateLogo.png';
import './Home.css'

export default function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={estacionateLogo} className="Home-logo" alt="logo" />
        <p>
          <h1><code>ESTACIONATE</code></h1>
          <nav> <Link to="/login">Login</Link> </nav>
          <nav> <Link to="/signUp">Sign Up</Link> </nav>
        </p>
      </header>
  </div>
  );
}