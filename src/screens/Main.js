import React from 'react';
import informacionLogo from '../images/informacion.png';
import calendarLogo from '../images/calendario2.png';
import horarioLogo from '../images/horario.png';
import preciosLogo from '../images/precios.png';
import { Typography } from '@mui/material';
import {styled} from '@mui/system';
import {createTheme, ThemeProvider } from '@mui/material/styles';

const Main = () => {
  const customTheme = createTheme({
  });
  const StyledDiv = styled('div')`
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.standard,
  })};

  &:hover {
    transform: scale(1.2);
  }
`;
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
          <ThemeProvider theme={customTheme}>
            <StyledDiv onClick={() => {window.location.href= '/reservations'}} >
              <p>MIS RESERVAS</p>
              <img src = {calendarLogo} alt = "calendar" width = "100" height = "100" style={{}}/>
            </StyledDiv>
          </ThemeProvider>

          <ThemeProvider theme={customTheme}>
            <StyledDiv onClick={() => {window.location.href= '/checkAvailability'}} style={{cursor:'pointer'}}>
              <p>VER DISPONIBILIDAD</p>
              <img src = {horarioLogo} alt = "calendar" width = "100" height = "100"/>
            </StyledDiv>
          </ThemeProvider>
          
          <ThemeProvider theme={customTheme}>
            <StyledDiv onClick={() => {window.location.href= '/prices'}} style={{cursor:'pointer'}}>
              <p>TARIFAS</p>
              <img src = {preciosLogo} alt = "calendar" width = "100" height = "100"/>
            </StyledDiv>
          </ThemeProvider>

          <ThemeProvider theme={customTheme}>
            <StyledDiv onClick={() => {window.location.href= '/aboutUs'}} style={{cursor:'pointer'}}>
              <p>SOBRE NOSOTROS</p>
              <img src = {informacionLogo} alt = "calendar" width = "100" height = "100"/>
            </StyledDiv>
          </ThemeProvider>
        </div>
      </div>
    </div>
  ); 
}

export default Main;