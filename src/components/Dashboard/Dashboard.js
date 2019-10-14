import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super()
    
        this.state = {
          inventory: [],
          edit: false
        }
    }


    handleDelete = (id) => {
        axios.delete(`/api/inventory/${id}`)
        .then(res => {
            this.props.getInventory(res.data)
        })
    }

    updateProduct = (data) => {
        this.setState({
            inventory: data
        })
    }
    
    render() { 

        const mappedInventory = this.props.inventory.map((inventory, index) => {
            return <Product 
                    key={ index }
                    inv={ inventory } 
                    delete={ this.handleDelete }
                    handleEdit={this.handleEdit}
                    updateProduct={this.updateProduct}
                    />
        });

        return ( 
            <div className="mapped">
                { mappedInventory }
            </div>
         );
    };
};
 
export default Dashboard;
