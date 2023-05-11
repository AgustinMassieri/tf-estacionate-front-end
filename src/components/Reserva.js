import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";

const Reserva = ({ parking }) => {
    const [reservation, setReservation] = useState({
        parkingId: '',
        parkingName: '',
        userId: ''
    });


    const updateParking = () => {
        console.log('Reseva: ' + reservation);

        if (reservation.parkingId !== ''){
            parking.numberOfParkingSpacesAvailable -= 1;
            if(parking.numberOfParkingSpacesAvailable >= 0){
                fetch('http://localhost:3001/api/parkings/'+parking._id, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem('token')
                    },
                    body: JSON.stringify(parking)
                }).then(function(response) {
                    if(response.status === 200){
                        //window.location.href = "/reservations";
                        console.log("Se actualizo el estacionamiento")
                    }
                    else{
                        console.log("Hubo un error actualizando el estacionamiento")
                    } 
                });

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
                    }
                    else{
                        console.log("Hubo un error creando la reserva")
                    } 
                });
            }
        } else{
            console.log("No se puede reservar ya que no hay lugares disponibles");
        }   
    }

    useEffect(() => {
        updateParking();
    }, [reservation]);

    return (
        <Button size="medium" onClick={() => {setReservation({...reservation, parkingId:parking._id, parkingName:parking.name ,userId: localStorage.getItem('userId') })}} variant="contained"> Reservar </Button>
    )
}

export default Reserva;