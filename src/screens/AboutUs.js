import * as React from 'react';
import TabsBar from '../components/TabsBar';

const AboutUs = () => {
    return(
        <div>
            <TabsBar/>
            <div style={{margin: '2%'}}>

                <h2>Motivación</h2>
                <span style={{fontSize: '15px', textAlign: 'justify'}}>Ir de un lugar a otro con tu auto puede que no sea una buena idea. 
                    No solo el tráfico es un problema con el que convivimos todos los dias. 
                    Estacionar en la calle se ha vuelto una misión imposible debido a que las veredas no dan a basto y los estacionamientos no poseen un servicio que brinde la experencia de usuario que hoy la gente pretende.
                </span>
                
                <br/><br/>

                <h2>Objetivo</h2>
                <span style={{fontSize: '15px', textAlign: 'justify'}}>Brindar una servicio de estacionamiento mediante el cual tanto los usuarios como los clientes puedan conseguir un estacionamiento a su medida viviendo una experiencia de usuario inigualable.
                    Visualiza la disponibilidad, precios y horarios de tu estacionamiento preferido en tiempo real. Y no olvides de usar el servicio de reservas en caso de que planees tu viaje con anticipacion!
                </span>
            </div>

        </div>
    );

}

export default AboutUs;