import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

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
        <div>
            <h1>Sign Up</h1>
            
            <TextField label="First Name" onChange={(e) => setFirstName(e.target.value)} />
            <TextField label="Last name" onChange={(e) => setLastName(e.target.value)} />
            <TextField label="Email" onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" onChange={(e) => setPassword(e.target.value)} />
            <Button size="medium" onClick={handleRegister} variant="contained"> Login </Button>
        </div>
    ); 
}

export default SignUp;