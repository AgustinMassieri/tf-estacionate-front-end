import * as React from 'react';
import {Table } from "@mui/material";

const ReservationsTable = ({ reservations }) => {
    console.log(reservations)

    return (
        <Table style={{fontSize: '15px'}}>
            <thead>
                <tr>
                    <th style={{paddingRight: '35px', paddingBottom: '30px'}}>Id de Reserva</th>
                    <th style={{paddingRight: '35px', paddingBottom: '30px'}}>Estacionamiento</th>
                    <th style={{paddingRight: '35px', paddingBottom: '30px'}}>Dirección</th>
                    <th style={{paddingRight: '35px', paddingBottom: '30px'}}>Nombre del usuario</th>
                </tr>
            </thead>
            <tbody>
                {reservations.map((reservation) => (
                    <tr key={reservation._id}>
                        <td style={{paddingRight: '35px', paddingBottom: '30px'}}>{reservation._id}</td>
                        <td style={{paddingRight: '35px', paddingBottom: '30px'}}>{reservation.parkingName}</td>
                        <td style={{paddingRight: '35px', paddingBottom: '30px'}}>{reservation.location}</td>
                        <td style={{paddingRight: '35px', paddingBottom: '30px'}}>{reservation.userName}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default ReservationsTable;