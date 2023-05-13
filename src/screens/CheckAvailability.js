import React, { useState, useEffect } from 'react';
import TabsBar from '../components/TabsBar';
import ParkingsTable from '../components/ParkingsTable';
import { Button } from '@mui/material';
import CreateParkingModal from '../components/CreateParkingModal';

const CheckAvailability = () => {

    const [parkings, setParkings] = useState([]);
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
            <ParkingsTable parkings={parkings} />
            <React.Fragment>
                <CreateParkingModal open={open} setOpen={setOpen}/>
            </React.Fragment>
        </div>  
    );
}

export default CheckAvailability;