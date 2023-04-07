import * as React from 'react';
import { Table } from "@mui/material";

const ParkingsTable = ({ parkings }) => {
    return (
        <Table style={{fontSize: '15px'}}>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Direccion</th>
                    <th>Lugares Disponibles</th>
                    <th>Dueño</th>
                </tr>
            </thead>
            <tbody>
                {parkings.map((parking) => (
                    <tr key={parking.id}>
                    <td>{parking.name}</td>
                    <td>{parking.location}</td>
                    <td>{parking.numberOfParkingSpacesAvailable}</td>
                    <td>{parking.owner}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ParkingsTable;