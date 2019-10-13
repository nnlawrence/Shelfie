import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: []
    }
  };
  // https://3ie87c2dond928rt2e2zzo8o-wpengine.netdna-ssl.com/wp-content/themes/gonzo/images/no-image-featured-image.png
  // {name: 'Air Max', price: 50, img: 'https://eyeconicwear.com/wp-content/uploads/2017/04/EyeConicWear-nike-air-max-90-ultra-infrared-shoes-e1493167855293.jpg'}, {name: 'Cotton', price: 20, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjUpvHt42NO_DA2ER_ZCU3DKsSSvDwnUUqr8roxJ-aN3-TISOxQ'}, {name: 'Cargo Shorts', price: 30, img: 'http://cdn.shopify.com/s/files/1/0783/3649/products/VOLCOM_MENS_SHORT_RISER_BGE_2_grande.jpg?v=1551382187'}

  componentDidMount () {
    this.getInventory();
  };

  getInventory = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Dashboard 
         inventory={ this.state.inventory } 
         getInventory={ this.getInventory } />
        <Form 
         getInventory={ this.getInventory } />
      </div>
    )
  }
}


export default App;
