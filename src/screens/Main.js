import * as React from 'react';

import TabsBar from '../components/TabsBar';
import BasicTable from '../components/BasicTable';

const getUsers = async () => {
  const response = await fetch('http://localhost:3001/api/users');
  const data = await response.json();
  console.log(data);
}

const Main = () => {

  getUsers();
 
  return(
    <div style={{textAlign: 'center'}}>
      <TabsBar/>
      <span>Tabla de Precios 2023</span>
      <br/>
      <br/>
      <BasicTable/>
    </div>
  ); 
}

export default Main;