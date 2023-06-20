import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import '../styles/SignUp.css';

const SignUp = () => {

    const [errorMessage, setErrorMessage] = useState(false);
    
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

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
        <div className='SignUp'>
            <h1>Registrate</h1>
            {errorMessage && <p style={{color: 'red'}}>Los datos ingresados no son validos</p>}
            <div style={{border: '2px solid black', borderRadius: '25px', paddingBottom: '15px', paddingLeft: '10px', paddingRight: '10px'}}>
                <div className='formInput'>
                    <TextField required label="Nombre" variant="standard" onChange={(e) => setUser({...user, firstName: e.target.value})} onKeyPress={event => { if (event.key === 'Enter') { handleRegister() } }}/>
                </div>
                <div className='formInput'>
                    <TextField required label="Apellido" variant="standard" onChange={(e) => setUser({...user, lastName: e.target.value})} onKeyPress={event => { if (event.key === 'Enter') { handleRegister() } }}/>
                </div>
                <div className='formInput'>
                    <TextField required label="Mail" variant="standard" onChange={(e) => setUser({...user, email: e.target.value})} onKeyPress={event => { if (event.key === 'Enter') { handleRegister() } }}/>
                </div>
                <div className='formInput'>
                    <TextField required label="Contraseña" type="password" variant="standard" onChange={(e) => setUser({...user, password: e.target.value})} onKeyPress={event => { if (event.key === 'Enter') { handleRegister() } }}/>
                </div>
            </div>
            <br/>
            <Button size="medium" onClick={handleRegister} variant="contained"> Registrarse </Button>
        </div>
    );
}

export default SignUp;