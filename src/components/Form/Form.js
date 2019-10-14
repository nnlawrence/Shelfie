import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Form extends Component {
    constructor(){
        super()

        this.state = {
            img: '',
            name: '',
            price: 0,
            inventory: [],
            edit: false
        }
    }

    handleImg = (val) => {
        this.setState ({
            img: val
        })
    }

    handleName = (val) => {
        this.setState ({
            name: val
        })
    }

    handlePrice = (val) => {
        this.setState({
            price: val
        })
    }

    handleCancel = () => {
        this.setState({
            img: '',
            name: '',
            price: '',
            edit: false
        })
    }

    handleAddInv = () => {
        const newInv = {
            name: this.state.name,
            price: this.state.price,
            img: this.state.img
        }
        axios.post('/api/product', newInv)
        .then(res => {
            this.props.getInventory(res.data)
        })
    }

    handleUpdate = (id) => {
        const { name,price, img } = this.state
        const body = {
            name: this.state.name,
            price: this.price.name,
            img: this.state.img
        }
        axios.put(`/api/product/${id}`, body)
        .then(res => {
            this.setState({
                inventory: res.data,
                edit: false
            })
        })

    }

    render() {
        return (
            <>
            <div className='form-container'>
             <div className='input-container'>
                <label>Image URL:</label>
                <input type="url" placeholder='image' onChange={(e) => this.handleImg(e.target.value)} value={this.state.img} />
                <label>Product Name:</label>
                <input type="text" placeholder='name' onChange={(e) => this.handleName(e.target.value)} value={this.state.name} />
                <label>Price:</label>
                <input type="text" placeholder='price' onChange={(e) => this.handlePrice(e.target.value)} value={this.state.price} />
             </div>  
                <Link exact to='/'><button onClick={() => this.handleCancel()}>Cancel</button></Link>
                <button onClick={() => this.handleAddInv()}>Add To Inventory</button>
            </div>    
            </>
        )
    }
}

export default Form;
