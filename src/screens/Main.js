import React from 'react';
import informacionLogo from '../images/informacion.png';
import calendarLogo from '../images/calendario2.png';
import horarioLogo from '../images/horario.png';
import preciosLogo from '../images/precios.png';
import { Typography } from '@mui/material';

const Main = () => {
 
  return(
    <div>
      <div style={{textAlign: 'center', marginTop: '-10%'}}>
        <Typography
          variant="h3"
          component="a"
          sx={{
          textAlign:'center',
          fontFamily: 'monospace',
          fontWeight: 800,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none'}}
        >ESTACIONATE</Typography>
      </div>

      <div style={{textAlign: 'center', marginTop: '15%'}}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
          <div onClick={() => {window.location.href= '/reservations'}}>
            <p>MIS RESERVAS</p>
            <img src = {calendarLogo} alt = "calendar" width = "100" height = "100"/>
          </div>

          <div onClick={() => {window.location.href= '/checkAvailability'}}>
          <p>VER DISPONIBILIDAD</p>
          <img src = {horarioLogo} alt = "calendar" width = "100" height = "100"/>
          </div>

          <div onClick={() => {window.location.href= '/prices'}}>
          <p>TARIFAS</p>
          <img src = {preciosLogo} alt = "calendar" width = "100" height = "100"/>
          </div>
          
          <div onClick={() => {window.location.href= '/aboutUs'}}>
          <p>SOBRE NOSOTROS</p>
          <img src = {informacionLogo} alt = "calendar" width = "100" height = "100"/>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default Main;