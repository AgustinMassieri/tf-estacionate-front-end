import * as React from 'react';
import {Table } from "@mui/material";

const ReservationsTable = ({ reservations }) => {
    console.log(reservations)

    return (
        <Table style={{fontSize: '15px'}}>
            <thead>
                <tr>
                    <th style={{paddingRight: '35px'}}>Nombre</th>
                </tr>
            </thead>
            <tbody>
                {reservations.map((reservation) => (
                        <tr key={reservation.id}>
                        <td style={{paddingRight: '35px'}}>{reservation.parkingName}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ReservationsTable;