import React, { useState, useEffect } from 'react';
import TabsBar from '../components/TabsBar';
import ResTab from '../components/ResTab';

const Reservations = () => {

    const [reservations, setReservations] = useState([]);

    const getReservations = async () => {
        const response = await fetch('https://estacionate.onrender.com/api/reservations/' + localStorage.getItem('userId'), {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        });
        const data = await response.json();
        setReservations(data.data);
    }

    useEffect(() => {
        getReservations();
    }, []);

    return(
        <div style={{textAlign: 'center'}}>
          <TabsBar/>
          <br/>
          <br/>
          {<ResTab reservations={reservations}/>}
        </div>  
    );

}

export default Reservations;