import React from 'react';
import {Rating, Table} from "@mui/material";
import Reserva from  './Reserva';

const ParkingsTable = ({parkings, resDate}) => {

    function ArrayAvg(myArray) {
        var i = 0, summ = 0, ArrayLen = myArray.length;
        while (i < ArrayLen) {
            summ = summ + myArray[i++];
    }

        return summ / ArrayLen;
    }

    return (
        <Table style={{fontSize: '15px'}}>
            <thead>
                <tr>
                    <th style={{paddingRight: '35px', paddingBottom: '30px'}}>Calificación</th>
                    <th style={{paddingRight: '35px', paddingBottom: '30px'}}>Nombre</th>
                    <th style={{paddingRight: '35px', paddingBottom: '30px'}}>Direccion</th>
                    <th style={{paddingRight: '35px', paddingBottom: '30px'}}>Lugares Disponibles</th>
                    <th style={{paddingRight: '35px', paddingBottom: '30px'}}>Precio Reserva</th>
                </tr>
            </thead>
            <tbody >
                {parkings.map((parking) => (
                    <tr key={parking.id} >
                        <Rating
                            readOnly 
                            name="read-only"
                            precision={0.5}
                            value={ArrayAvg(parking.rating)}
                            style={{paddingRight: '35px', paddingBottom: '30px'}}
                        />                           
                        <td style={{paddingRight: '35px', paddingBottom: '30px'}}>{parking.name}</td>
                        <td style={{paddingRight: '35px', paddingBottom: '30px'}}>{parking.location}</td>
                        <td style={{paddingRight: '35px', paddingBottom: '30px'}}>{parking.numberOfParkingSpacesAvailable}</td>
                        <td style={{paddingRight: '35px', paddingBottom: '30px'}}>${parking.price}</td>

                        <Reserva parking={parking} resDate={resDate}></Reserva>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ParkingsTable;