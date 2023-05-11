import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import '../styles/Login.css';

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState(false);

  const handleRegister = () => {
    if ( user.email === '' || user.password === '' ) {
      setErrorMessage(true);      
      return;
    } else{
      fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if(data.status === 200){
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.user._id);
            window.location.href = "/main";
        }
        else{
          setErrorMessage(true);
        }
      })
    }
  }
  
  return(
    <div className='Login'>
      <h1>Inicia Sesion</h1>
        {errorMessage && <p style={{color: 'red'}}>Usuario y/o contraseña incorrectos</p>}
        <div style={{border: '2px solid black', borderRadius: '25px', paddingBottom: '15px', paddingLeft: '10px', paddingRight: '10px'}}> 
        <div className='formInput'>
        <TextField required label="Mail" variant="standard" onChange={(e) => setUser({...user, email: e.target.value})} onKeyPress={event => { if (event.key === 'Enter') { handleRegister() } }} />
        </div>  
        
        <div className='formInput'>
        <TextField required label="Contraseña" type="password" variant="standard" onChange={(e) => setUser({...user, password: e.target.value})} onKeyPress={event => { if (event.key === 'Enter') { handleRegister() } }} />
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