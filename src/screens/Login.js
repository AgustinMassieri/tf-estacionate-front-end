import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, ThemeProvider, createTheme } from "@mui/material";
import '../styles/Login.css';
import { useTheme } from '@emotion/react';

const customTheme = (outerTheme) =>
createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: '#A0AAB4',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#B2BAC2',
          },
          '& label': {
            color: '#A0AAB4',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#B2BAC2',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#E0E3E7',
            },
            '&:hover fieldset': {
              borderColor: '#B2BAC2',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6F7E8C',
            },
          }
        },
      },
    }
  },
});

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState(false);

  const outerTheme = useTheme();

  const handleRegister = () => {
    if ( user.email === '' || user.password === '' ) {
      setErrorMessage(true);      
      return;
    } else{
      fetch('https://estacionate.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then(data => {
        if(data.status === 200){
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.user._id);
            localStorage.setItem('username', data.user.firstName  + ' ' + data.user.lastName);
            localStorage.setItem('roles', data.user.role[0]);
            window.location.replace('/main');
        }
        else{
          setErrorMessage(true);
        }
      })
    }
  }
  
  return(
    <ThemeProvider theme={customTheme(outerTheme)}>
    <div className='Login'>
      <h1>Inicia Sesion</h1>
        {errorMessage && <p style={{color: 'red'}}>Usuario y/o contraseña incorrectos</p>}
        <div style={{border: '2px solid white', borderRadius: '25px', paddingBottom: '15px', paddingLeft: '10px', paddingRight: '10px'}}> 
        <div className='formInput'>
        <TextField required label="Mail" variant="standard"  inputProps={{ style: { color: '#B2BAC2' } }} onChange={(e) => setUser({...user, email: e.target.value})} onKeyPress={event => { if (event.key === 'Enter') { handleRegister() } }}/>
        </div>  
        
        <div className='formInput'>
        <TextField required label="Contraseña" type="password" variant="standard" inputProps={{ style: { color: '#B2BAC2' } }} onChange={(e) => setUser({...user, password: e.target.value})} onKeyPress={event => { if (event.key === 'Enter') { handleRegister() } }}/>
        </div>
      </div>
      <br/>
      <Button size="medium" onClick={handleRegister} variant="contained"> Iniciar Sesion </Button>

      <p>¿No tenes una cuenta?</p>
      <Button href='/SignUp' size="medium" variant="contained">Registrase</Button>
    </div>
    </ThemeProvider>
  ); 
}

export default Login;