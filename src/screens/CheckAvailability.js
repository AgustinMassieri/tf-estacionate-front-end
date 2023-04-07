import React, { useState, useEffect } from 'react';
import TabsBar from '../components/TabsBar';
import ParkingsTable from '../components/ParkingsTable';

const CheckAvailability = () => {

    const [parkings, setParkings] = useState([]);

    const getParkings = async () => {
    const response = await fetch('http://localhost:3001/api/parkings',
        {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
        }
    );
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
          <ParkingsTable parkings={parkings}/>
        </div>  
    );
}

export default CheckAvailability;