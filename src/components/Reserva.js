import React, { useState } from 'react';
import { Button } from "@mui/material";

const Reserva = ({ parking }) => {
    const [reservation, setReservation] = useState({
        parkingId: '',
        parkingName: '',
        userId: ''
    });

    const updateParking = () => {
        console.log(reservation)

        parking.numberOfParkingSpacesAvailable -= 1;
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
            }
            else{
                console.log("no funciona")
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
               console.log("funciona")
            }
            else{
                console.log("no funciona")
            } 
        });
    }

    return (
        <Button size="medium" onClick={() => {setReservation({...reservation, parkingId:parking._id, parkingName:parking.name ,userId: localStorage.getItem('userId') });updateParking();}} variant="contained"> Reservar </Button>
    )
}

export default Reserva;