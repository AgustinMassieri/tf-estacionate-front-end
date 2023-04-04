import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import '../styles/SignUp.css';

const SignUp = () => {
    
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleRegister = () => {
        if ( user.firstName === '' || user.lastName === '' || user.email === '' || user.password === '' ) {
            alert("Please fill all the fields");
            return;
        }
        fetch('http://localhost:3001/api/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(function(response) {
            console.log('> Body: ' + JSON.stringify(user));
            console.log('> Response: ' + response);
            return response.json();
        });
    }

    return(
        <div className='SignUp'>
            <h1>Registrate</h1>
            <div style={{border: '2px solid black', borderRadius: '25px', paddingBottom: '15px', paddingLeft: '10px', paddingRight: '10px'}}>
                <div className='formInput'>
                    <TextField required label="Nombre" variant="standard" onChange={(e) => setUser({...user, firstName: e.target.value})} />
                </div>
                <div className='formInput'>
                    <TextField required label="Apellido" variant="standard" onChange={(e) => setUser({...user, lastName: e.target.value})} />
                </div>
                <div className='formInput'>
                    <TextField required label="Mail" variant="standard" onChange={(e) => setUser({...user, email: e.target.value})} />
                </div>
                <div className='formInput'>
                    <TextField required label="Contraseña" type="password" variant="standard" onChange={(e) => setUser({...user, password: e.target.value})} />
                </div>
            </div>
            <br/>
            <Button size="medium" onClick={handleRegister} variant="contained"> Registrarse </Button>
        </div>
    );
}

export default SignUp;