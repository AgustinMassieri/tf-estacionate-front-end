import * as React from 'react';
import {Table } from "@mui/material";

const ReservationsTable = ({ reservations }) => {
    console.log(reservations)

    return (
        <Table style={{fontSize: '15px'}}>
            <thead>
                <tr>
                    <th style={{paddingRight: '35px'}}>Id de Reserva</th>
                    <th style={{paddingRight: '35px'}}>Nombre</th>
                    <th style={{paddingRight: '35px'}}>User Id</th>
                </tr>
            </thead>
            <tbody>
                {reservations.map((reservation) => (
                    <tr key={reservation._id}>
                        <td style={{paddingRight: '35px'}}>{reservation._id}</td>
                        <td style={{paddingRight: '35px'}}>{reservation.parkingName}</td>
                        <td style={{paddingRight: '35px'}}>{reservation.userId}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ReservationsTable;