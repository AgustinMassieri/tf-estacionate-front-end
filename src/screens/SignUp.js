import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import '../styles/SignUp.css';

const SignUp = () => {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        if ( firstName === '' || lastName === '' || email === '' || password === '' ) {
          alert("Please fill all the fields");
          return;
        }
    }

    return(
        <div className='SignUp'>
            <h1>Registrate</h1>
            <div style={{border: '2px solid black', borderRadius: '25px', paddingBottom: '15px', paddingLeft: '10px', paddingRight: '10px'}}> 
                <div className='formInput'>
                    <TextField required label="Nombre" variant="standard" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className='formInput'>
                    <TextField required label="Apellido" variant="standard" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className='formInput'>
                    <TextField required label="Mail" variant="standard" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='formInput'>
                    <TextField required label="Contraseña" type="password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <br/>
            <Button size="medium" onClick={handleRegister} variant="contained"> Registrarse </Button>
        </div>
    ); 
}

export default SignUp;