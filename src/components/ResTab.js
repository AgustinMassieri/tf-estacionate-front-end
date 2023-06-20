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
import { Button, Modal, Rating } from '@mui/material';

const columns = [
  { id: 'parkingName', label: 'Estacionamiento', minWidth: 170, align: 'center'},
  { id: 'date', label: 'Fecha', minWidth: 170, align: 'center'},
  { id: 'location', label: 'Dirección', minWidth: 170, align: 'center'}, 
  { id: 'price', label: 'Precio', minWidth: 170, align: 'center'},
  { id: 'actions', label: '', minWidth: 50, align: 'center'},
];


export default function StickyHeadTable({reservations}) {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [showModal, setShowModal] = React.useState(false);
  const [value, setValue] = React.useState(3);
  const [parkingId, setParkingId] = React.useState('');
  const [reservationId, setReservationId] = React.useState('');


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const updateReservationStatus = (reservationId, estado) => {
    
    fetch('https://estacionate.onrender.com/api/reservations/' + reservationId, {
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
    window.location.replace('/reservations');
  }

  const addRateToParking = (parkingId) => {
    fetch('https://estacionate.onrender.com/api/parkings/AddRate/' + parkingId, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
        },
        body: JSON.stringify(
          {rate: value}
        )
    }).then(function(response) {
      console.log(JSON.stringify(response))
      if(response.status === 200){
              console.log("Se agrego la calificación correctamente")
      } else{
              
              console.log("Hubo un error agregando la calificacion")
      }
    });
  }

  const handleClose = () =>{
    setShowModal(false);
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
                          <Button onClick={() => { setParkingId(reservation.parkingId); setReservationId(reservation._id); setShowModal(true); }}><img src={completar} alt= "completar" width = "30" height = "30"/></Button>
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
    <Modal open={showModal} onClose={handleClose}>
      <div style={{  backgroundColor: '#fff',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      padding: '16px',
                      width: '300px',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign:'center'}}>
        <h2>Calificar Estacionamiento</h2>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <br/><br/>
        <Button variant="contained" onClick={() => {addRateToParking(parkingId); updateReservationStatus(reservationId, 'Completada')}}>Enviar</Button>
      </div>
    </Modal>
    </Paper>

  );
}