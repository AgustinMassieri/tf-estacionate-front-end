import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, ThemeProvider, createTheme, useTheme } from "@mui/material";
import '../styles/SignUp.css';

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

const SignUp = () => {

    const [errorMessage, setErrorMessage] = useState(false);
    
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const outerTheme = useTheme();

    const handleRegister = () => {
        if ( user.firstName === '' || user.lastName === '' || user.email === '' || user.password === '' ) {
            setErrorMessage(true);
            return;
        }
        fetch('https://estacionate.onrender.com/api/auth/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(function(response) {
            if(response.status === 200){
                window.location.replace('/login');
            }
            else{
                setErrorMessage(true);
            }
        });
    }

    return(
        <ThemeProvider theme={customTheme(outerTheme)}>
        <div className='SignUp'>
            <h1>Registrate</h1>
            {errorMessage && <p style={{color: 'red'}}>Los datos ingresados no son validos</p>}
            <div style={{border: '2px solid white', borderRadius: '25px', paddingBottom: '15px', paddingLeft: '10px', paddingRight: '10px'}}>
                <div className='formInput'>
                    <TextField required label="Nombre" variant="standard" inputProps={{ style: { color: '#B2BAC2' } }} onChange={(e) => setUser({...user, firstName: e.target.value})} onKeyPress={event => { if (event.key === 'Enter') { handleRegister() } }}/>
                </div>
                <div className='formInput'>
                    <TextField required label="Apellido" variant="standard" inputProps={{ style: { color: '#B2BAC2' } }} onChange={(e) => setUser({...user, lastName: e.target.value})} onKeyPress={event => { if (event.key === 'Enter') { handleRegister() } }}/>
                </div>
                <div className='formInput'>
                    <TextField required label="Mail" variant="standard" inputProps={{ style: { color: '#B2BAC2' } }} onChange={(e) => setUser({...user, email: e.target.value})} onKeyPress={event => { if (event.key === 'Enter') { handleRegister() } }}/>
                </div>
                <div className='formInput'>
                    <TextField required label="Contraseña" type="password" variant="standard" inputProps={{ style: { color: '#B2BAC2' } }} onChange={(e) => setUser({...user, password: e.target.value})} onKeyPress={event => { if (event.key === 'Enter') { handleRegister() } }}/>
                </div>
            </div>
            <br/>
            <Button size="medium" onClick={handleRegister} variant="contained"> Registrarse </Button>
        </div>
    </ThemeProvider>
    );
}

export default SignUp;