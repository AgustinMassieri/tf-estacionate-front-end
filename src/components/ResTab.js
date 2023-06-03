import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import cancelar from '../images/cancelar.png'
import completar from '../images/confirmar.png'
import { Button } from '@mui/material';

const columns = [
  { id: '_id', label: 'Id de Reserva', minWidth: 170, align: 'center'},
  { id: 'parkingName', label: 'Estacionamiento', minWidth: 170, align: 'center'},
  { id: 'location', label: 'Dirección', minWidth: 170, align: 'center'}, 
  { id: 'userName', label: 'Nombre del usuario', minWidth: 170, align: 'center'},
  { id: 'actions', label: '', minWidth: 50, align: 'center'},
];


export default function StickyHeadTable({reservations}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const updateReservationStatus = (reservationId, estado) => {
    fetch('http://localhost:3001/api/reservations/' + reservationId, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body: JSON.stringify(
          {status: estado}
        )
      }).then(function(response) {
          if(response.status === 200){
              console.log("Se actualizo el estacionamiento")
          }
          else{
              console.log("Hubo un error actualizando el estacionamiento")
          } 
      });

    window.location.href = "/reservations";

  }

  return (
    <Paper sx={{ width: '110%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 'bold', fontSize: '16px' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((reservation) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={reservation._id} >
                    {columns.map((column) => {
                      const value = reservation[column.id];
                      if(value != null && (reservation.status === 'Registrada')){
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      }
                      else if(value != null && (reservation.status === 'Cancelada')){
                        return (
                          <TableCell key={column.id} align={column.align} style={{textDecoration: 'line-through red 2px'}}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      }
                      else if(value != null && (reservation.status === 'Completada')){
                        return (
                          <TableCell key={column.id} align={column.align} style={{textDecoration: 'line-through green 2px'}}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      }
                      else if (value == null && (reservation.status === 'Registrada')){
                        return(
                          <>
                          <Button onClick={() => updateReservationStatus(reservation._id, 'Cancelada')}><img src={cancelar} alt= "cancelar" width = "30" height = "30"/></Button> 
                          <Button onClick={() => updateReservationStatus(reservation._id, 'Completada')}><img src={completar} alt= "completar" width = "30" height = "30"/></Button>
                          </>
                        )
                      }
                    })}                                     
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={reservations.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}