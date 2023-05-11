import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";

const Reserva = ({ parking }) => {
    const [reservation, setReservation] = useState({
        parkingId: '',
        parkingName: '',
        userId: ''
    });


    const updateParking = () => {
        console.log(reservation)

        if (reservation.parkingId !== '')
        {
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
    }

    useEffect(() => {
        updateParking();
    }, [reservation]);

    return (
        <Button size="medium" onClick={() => {setReservation({...reservation, parkingId:parking._id, parkingName:parking.name ,userId: localStorage.getItem('userId') })}} variant="contained"> Reservar </Button>
    )
}

export default Reserva;