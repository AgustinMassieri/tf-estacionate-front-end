import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if ( email === '' || password === '' ) {
      alert("Please fill all the fields");
      return;
    } else{
      window.location.href = "/main";
    }
  }
  
  return(
    <div className='Login'>
      <h1>Inicia Sesion</h1>
        <div style={{border: '2px solid black', borderRadius: '25px', paddingBottom: '15px', paddingLeft: '10px', paddingRight: '10px'}}> 
        <div className='formInput'>
          <TextField label="Mail" variant="standard" onChange={(e) => setEmail(e.target.value)} />
        </div>  
        
        <div className='formInput'>
          <TextField label="Contraseña" type="password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <br/>
      <Button size="medium" onClick={handleRegister} variant="contained"> Iniciar Sesion </Button>

      <p>¿No tenes una cuenta?</p>
      <Button href='/SignUp' size="medium" variant="contained">Registrase</Button>
    </div>
  ); 
}

export default Login;