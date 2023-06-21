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
        <div style={{padding: '20px', backgroundColor: 'white', color: 'black', borderRadius: '4px'}}>
        <Table style={{fontSize: '16px'}}>
            <thead>
                <tr style={{borderBottom: '1px solid rgba(224, 224, 224, 1)'}}>
                    <th style={{paddingRight: '35px', paddingBottom:'15px'}}>Calificación</th>
                    <th style={{paddingRight: '35px', paddingBottom:'15px'}}>Nombre</th>
                    <th style={{paddingRight: '35px', paddingBottom:'15px'}}>Direccion</th>
                    <th style={{paddingRight: '35px', paddingBottom:'15px'}}>Lugares Disponibles</th>
                    <th style={{paddingRight: '35px', paddingBottom:'15px'}}>Precio Reserva</th>
                </tr>
            </thead>
            <tbody >
                {parkings.map((parking) => (
                    <tr key={parking.id} style={{borderBottom: '1px solid rgba(224, 224, 224, 1)'}}>
                        <Rating
                            readOnly 
                            name="read-only"
                            precision={0.5}
                            value={ArrayAvg(parking.rating)}
                            style={{paddingRight: '35px', paddingTop: '15px'}}
                        />                           
                        <td style={{paddingRight: '35px', paddingBottom: '15px', paddingTop: '15px'}}>{parking.name}</td>
                        <td style={{paddingRight: '35px', paddingBottom: '15px', paddingTop: '15px'}}>{parking.location}</td>
                        <td style={{paddingRight: '35px', paddingBottom: '15px', paddingTop: '15px'}}>{parking.numberOfParkingSpacesAvailable}</td>
                        <td style={{paddingRight: '35px', paddingBottom: '15px', paddingTop: '15px'}}>${parking.price}</td>

                        <Reserva parking={parking} resDate={resDate}></Reserva>
                    </tr>
                ))}
            </tbody>
        </Table>
        </div>
    );
}

export default ParkingsTable;