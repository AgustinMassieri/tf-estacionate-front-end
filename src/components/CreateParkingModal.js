import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const CreateParkingModal = ({open, setOpen}) => {

    const [parking, setParking] = useState({
        name: '',
        location: '',
        numberOfParkingSpacesAvailable: 0,
    });

    const [errorMessage, setErrorMessage] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        padding: '30px',
        width: 300, 
        textAlign:'center', 
        borderRadius: '10px'
    };
       
    const handleClose = () => {
        setOpen(false);
        setErrorMessage(false);
    }; 

    const createParking = () => {
        
        if ( parking.name === '' || parking.location === '' || parking.numberOfParkingSpacesAvailable === 0 || parking.owner === '' ) {
            setErrorMessage(true);      
            return;
        } else{
            fetch('http://localhost:3001/api/parkings', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem('token')
                },
                body: JSON.stringify(parking)
            }).then(function(response) {
                if(response.status === 200){
                    console.log("Se creo el estacionamiento")
                    handleClose();
                }
                else{
                    setErrorMessage(true);
                    console.log("Hubo un error creando el estacionamiento")
                } 
            });
        } 
    }


    return(
        <Modal open={open}  onClose={handleClose}>
            <Box sx={style}>
            <Button onClick={handleClose} style={{right: '-50%', fontWeight: 'bold'}}>X</Button>
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                textAlign:'center',
                fontFamily: 'monospace',
                fontWeight: 800,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            > NUEVO ESTACIONAMIENTO</Typography>
            <div className='formInput'>
                <TextField placeholder='Nombre' variant="standard" onChange={(e) => setParking({...parking, name: e.target.value})}/>
            </div>
            <div className='formInput'>
                <TextField placeholder='Direccion' variant="standard" onChange={(e) => setParking({...parking, location: e.target.value})}/>
            </div>
            <div className='formInput'>
                <TextField placeholder='N° de Lugares Disponibles' variant="standard" onChange={(e) => setParking({...parking, numberOfParkingSpacesAvailable: e.target.value})}/>
            </div>
            <div className='formInput'>
                <TextField placeholder='Dueño' variant="standard" onChange={(e) => setParking({...parking, owner: e.target.value})}/>
            </div>
            <br/>
            {errorMessage && <p style={{color: 'red'}}>Los datos ingresados no son válidos</p>}
            <Button style={{marginTop: '3%'}} variant='contained' onClick={createParking}>Crear</Button>                
            </Box>
        </Modal>
    )
}

export default CreateParkingModal;
