import React, { useState, useEffect } from 'react';
import TabsBar from '../components/TabsBar';
import ParkingsTable from '../components/ParkingsTable';
import { Button } from '@mui/material';
import CreateParkingModal from '../components/CreateParkingModal';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const CheckAvailability = () => {

    const [parkings, setParkings] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const isAdmin = localStorage.getItem('roles') === 'admin';

    const getParkings = async () => {
        const response = await fetch('https://estacionate.onrender.com/api/parkings/ByDate/' + startDate.toISOString().split(['T'])[0], {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
          }
        });
        if(response.status === 401){
            window.location.replace('/login');
        }
        const data = await response.json();
        setParkings(data.parkings);
    }    

    useEffect(() => {
        getParkings();
    }, [startDate]);

    return(
        <div style={{textAlign: 'center'}}>
            <TabsBar/>
            <br/>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker selected={startDate} format='DD-MM-YYYY' onChange={(newDate) => setStartDate(newDate)} defaultValue={dayjs(new Date())} disablePast sx={{backgroundColor:'white',borderRadius:'10px', width: "150px"}} label="" />
            </LocalizationProvider>
            <br/><br/>
            {isAdmin && <Button variant='contained' onClick={() => setOpen(true)}>Agregar estacionamiento</Button>}
            <br/>
            <br/>
            <ParkingsTable parkings={parkings} resDate={startDate} />
            <React.Fragment>
                <CreateParkingModal open={open} setOpen={setOpen}/>
            </React.Fragment>

        </div>  
    );
}

export default CheckAvailability;