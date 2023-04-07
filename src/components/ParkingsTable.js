import * as React from 'react';
import { Table } from "@mui/material";

const ParkingsTable = ({ parkings }) => {
    return (
        <Table style={{fontSize: '15px'}}>
            <thead>
                <tr>
                    <th style={{paddingRight: '35px'}}>Nombre</th>
                    <th style={{paddingRight: '35px'}}>Direccion</th>
                    <th style={{paddingRight: '35px'}}>Lugares Disponibles</th>
                    <th style={{paddingRight: '35px'}}>Dueño</th>
                </tr>
            </thead>
            <tbody>
                {parkings.map((parking) => (
                    <tr key={parking.id}>
                        <td style={{paddingRight: '35px'}}>{parking.name}</td>
                        <td style={{paddingRight: '35px'}}>{parking.location}</td>
                        <td style={{paddingRight: '35px'}}>{parking.numberOfParkingSpacesAvailable}</td>
                        <td style={{paddingRight: '35px'}}>{parking.owner}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ParkingsTable;