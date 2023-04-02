import * as React from 'react';
import { Button } from "@mui/material";
import estacionateLogo from '../images/estacionateLogo.png';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={estacionateLogo} className="Home-logo" alt="logo" />
        <p>
          <h1><code>ESTACIONATE</code></h1>
          <Button href='/Login' size="medium" variant="contained" style={{marginRight: '2%'}}>Iniciar Sesion</Button>
          <Button href='/SignUp' size="medium" variant="contained">Registrase</Button>
        </p>
      </header>
  </div>
  );
}

export default Home;