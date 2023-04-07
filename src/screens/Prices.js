import React from 'react';
import TabsBar from '../components/TabsBar';
import PricingTable from '../components/PricingTable';

const Prices = () => {

    return(
        <div style={{textAlign: 'center'}}>
            <TabsBar/>
            <br/>
            <PricingTable/>
        </div>
    )
    
}

export default Prices;