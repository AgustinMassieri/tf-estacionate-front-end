import * as React from 'react';

import TabsBar from '../components/TabsBar';

const getUsers = async () => {
  const response = await fetch('http://localhost:3001/api/users');
  const data = await response.json();
  console.log(data);
}

const Main = () => {

  getUsers();
 
  return(
    <TabsBar/>
  ); 
}

export default Main;