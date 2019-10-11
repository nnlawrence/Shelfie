import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super()

        this.state = {
            img: '',
            name: '',
            price: 0,
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
            this.props.get(res.data)
        })
    }

    render() {
        console.log(this.props)
        return (
            <>
            <div className='form-container'>
             <div className='input-container'>
                <label>Image URL:</label>
                <input placeholder='image' onChange={(e) => this.handleImg(e.target.value)} value={this.state.img} ></input>
                <label>Product Name:</label>
                <input placeholder='name' onChange={(e) => this.handleName(e.target.value)} value={this.state.name} ></input>
                <label>Price:</label>
                <input placeholder='price'></input>
             </div>  
                <button onClick={() => this.handleCancel()}>Cancel</button>
                <button onClick={() => this.handleAddInv()} >Add To Inventory</button>
            </div>    
            </>
        )
    }
}

export default Form;
