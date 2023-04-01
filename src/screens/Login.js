import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if ( email === '' || password === '' ) {
      alert("Please fill all the fields");
      return;
    }
  }
  
  return(
    <div>
      <h1>Login</h1>
      
      <TextField label="Email" onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" onChange={(e) => setPassword(e.target.value)} />

      <Button size="medium" onClick={handleRegister} variant="contained"> Login </Button>

      <p>Don't have an account? <Link to="/signUp">Sign Up</Link></p>
    </div>
  ); 
}

export default Login;