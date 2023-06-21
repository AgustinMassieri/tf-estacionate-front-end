import * as React from 'react';
import TabsBar from '../components/TabsBar';
import '../styles/AboutUs.css'; 
import estacionamientoLleno from '../images/estacionamientoLleno.png'
import { Typography } from '@mui/material';

const AboutUs = () => {
    return(
        <div>
            <TabsBar/>
            <div className="about-us">
                <div className="about-us-content">
                <div style={{textAlign: 'center'}}>
                    <Typography
                    variant="h3"
                    component="a"
                    sx={{
                    justifyContent: 'center',
                    fontFamily: 'monospace',
                    fontWeight: 800,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    textDecoration: 'none', 
                    fontSize: '32px'
                    }}
                    >SOBRE NOSOTROS</Typography>
                </div><br/>
                    <div className="about-us-info">
                        <div className="about-us-section">
                            <h3 className="about-us-section-title">Motivación</h3>
                            <p className="about-us-section-description">
                                Ir de un lugar a otro con tu auto puede que no sea una buena idea. No solo el tráfico es un problema con el que convivimos todos los días. Estacionar en la calle se ha vuelto una misión imposible debido a que las veredas no dan a basto y los estacionamientos no poseen un servicio que brinde la experiencia de usuario que hoy la gente pretende.
                            </p>
                        </div>
                        <div style={{justifyContent: 'center'}}>
                            <img src={estacionamientoLleno} alt='estacionamientoLleno' style={{borderRadius: '4%'}} height='300px'></img>
                        </div>
                        <div className="about-us-section">
                            <h3 className="about-us-section-title">Objetivo</h3>
                            <p className="about-us-section-description">
                                Estacionate brinda un servicio de estacionamiento mediante el cual tanto los usuarios como los clientes pueden conseguir un estacionamiento a su medida viviendo una experiencia de usuario inigualable. Visualiza la disponibilidad, precios y horarios de tu estacionamiento preferido en tiempo real. Y no olvides usar el servicio de reservas en caso de que planees tu viaje con anticipación!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;