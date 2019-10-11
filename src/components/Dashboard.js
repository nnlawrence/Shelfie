import React, { Component } from 'react'
import Product from './Product';

class Dashboard extends Component {
    
    render() { 

        const mappedInventory = this.props.inventory.map((inventory, index) => {
            return <Product key={index} inv={inventory} invName={inventory.name} invPrice={inventory.price} invImg={inventory.img} />
        })

        return ( 
            <div>
                {mappedInventory}
            </div>
         );
    };
};
 
export default Dashboard;
