import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";


const Reserva = ({ parking,resDate }) => {
    const [errorMessage, setErrorMessage] = useState(false);
    const [reservation, setReservation] = useState({
        parkingId: '',
        parkingName: '',
        userId: '',
        status: 'Registrada',
        date: resDate.toISOString().split(['T'])[0]
    });

    const createReservation = () => {

            if(parking.numberOfParkingSpacesAvailable >= 0){

                fetch('http://localhost:3001/api/reservations/', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem('token')
                    },
                    body: JSON.stringify(reservation)
                }).then(function(response) {
                    if(response.status === 200){
                        console.log("Se creo la reserva")
                        window.location.replace('/reservations');
                    }
                    else{
                        console.log("Hubo un error creando la reserva")
                    } 
                });

            } else{
                console.log("No se puede reservar ya que no hay lugares disponibles");
                setErrorMessage(true);
            }
        }   
    

    useEffect(() => {
        if (reservation.parkingId !== ''){
            createReservation();
        }
    }, [reservation]);

    return (
        <div>
        <Button size="small" onClick={() => {setReservation({...reservation, parkingId:parking._id, parkingName:parking.name, userId: localStorage.getItem('userId'), date: resDate.toISOString().split(['T'])[0] })}} variant="contained"> Reservar </Button>
        {errorMessage && (<p style={{color:'red', display: ''}}>No hay lugares disponibles</p>)}
        </div>

    )
}

export default Reserva;