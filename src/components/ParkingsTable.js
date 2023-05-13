import * as React from 'react';
import {Table } from "@mui/material";
import Reserva from  './Reserva';

const ParkingsTable = ({ parkings }) => {
    return (
        <Table style={{fontSize: '15px'}}>
            <thead>
                <tr>
                    <th style={{paddingRight: '35px', paddingBottom: '30px'}}>Nombre</th>
                    <th style={{paddingRight: '35px', paddingBottom: '30px'}}>Direccion</th>
                    <th style={{paddingRight: '35px', paddingBottom: '30px'}}>Lugares Disponibles</th>
                    <th style={{paddingRight: '35px', paddingBottom: '30px'}}>Dueño</th>
                </tr>
            </thead>
            <tbody >
                {parkings.map((parking) => (
                    <tr key={parking.id} >
                        <td style={{paddingRight: '35px', paddingBottom: '30px'}}>{parking.name}</td>
                        <td style={{paddingRight: '35px', paddingBottom: '30px'}}>{parking.location}</td>
                        <td style={{paddingRight: '35px', paddingBottom: '30px'}}>{parking.numberOfParkingSpacesAvailable}</td>
                        <td style={{paddingRight: '35px', paddingBottom: '30px'}}>{parking.owner}</td>
                        <Reserva parking={parking}></Reserva>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ParkingsTable;