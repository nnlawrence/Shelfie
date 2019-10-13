import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';

class Dashboard extends Component {


    handleDelete = (id) => {
        axios.delete(`/api/inventory/${id}`)
        .then(res => {
            this.props.getInventory(res.data)
        })
    }
    
    render() { 

        const mappedInventory = this.props.inventory.map((inventory, index) => {
            return <Product 
                    key={ index }
                    inv={ inventory } 
                    delete={ this.handleDelete }
                    />
        });

        return ( 
            <div>
                {mappedInventory}
            </div>
         );
    };
};
 
export default Dashboard;
