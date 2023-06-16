import React, { useState, useEffect } from 'react';
import TabsBar from '../components/TabsBar';
import ParkingsTable from '../components/ParkingsTable';
import { Button } from '@mui/material';
import CreateParkingModal from '../components/CreateParkingModal';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CheckAvailability = () => {

    const [parkings, setParkings] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const isAdmin = localStorage.getItem('roles') === 'admin';

    const getParkings = async () => {
        const response = await fetch('http://localhost:3001/api/parkings', {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
          }
        });
        const data = await response.json();
        setParkings(data.data);
    }    

    useEffect(() => {
        getParkings();
    }, []);

    return(
        <div style={{textAlign: 'center'}}>
            <TabsBar/>
            <br/>
            <br/>
            {isAdmin && <Button variant='contained' onClick={() => setOpen(true)}>Agregar estacionamiento</Button>}
            <br/>
            <br/>
            <ParkingsTable parkings={parkings} resDate={startDate} />
            <React.Fragment>
                <CreateParkingModal open={open} setOpen={setOpen}/>
            </React.Fragment>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker selected={startDate} onChange={(newDate) => setStartDate(newDate)} disablePast sx={{backgroundColor:'white',borderRadius:'10px',position: "absolute",top: "25%",left: "40%"}} label="Seleccione fecha" />
        </LocalizationProvider>
        </div>  
    );
}

export default CheckAvailability;