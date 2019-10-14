import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class Product extends Component {
  constructor(){
    super()

    this.state= {
      edit: false,
      editName: '',
      editPrice: '',
      editImg: ''
    }
  }

  handleToggle= () => {
    this.setState({
        edit: !this.state.edit
    })
  }

  handleUpdate = (id)=> {
    let updateproduct = {
        name:this.state.editName,
        price:this.state.editPrice,
        img:this.state.editImg
    }

    axios.put(`/api/product/${id}`, updateproduct).then(res => {
        this.props.updateProduct(res.data)
        this.handleToggle()
    })
  }

  handleEdit1 = (val) => {
    this.setState({
        editName: val
    })
  }

  handleEdit2 = (val) => {
      this.setState({
          editPrice: val
      })
  }

  handleEdit3 = (val) => {
      this.setState({
          editImg: val
      })
  }

  render(props) {
    const { name, price, image } = this.props.inv;
    console.log(this.props.inv, this.props);
    console.log(this.props);

    return (
      <div className="test">
        {!this.state.edit
        ?
        (<div>
          <img src={image} alt="product" />
          <p>{name}</p>
          <p>${price}</p>
          <button onClick={(id) => this.props.delete(this.props.inv.id)}>Delete</button>
          <button onClick={this.handleToggle}>Edit</button>
        </div>)
        :
        (<div>
           <input placeholder="Edit Name" name="editName" onChange ={(e)=>this.handleEdit1(e.target.value)} value={this.state.editName} />

           <input placeholder="Edit Price" name="editPrice" onChange ={(e)=>this.handleEdit2(e.target.value)} value={this.state.editType} />

           <input placeholder="Edit Image" name="editImage" onChange ={(e)=>this.handleEdit3(e.target.value)} value={this.state.editImage} />

           <button onClick = {(val) => this.handleUpdate(this.props.inv.id)}>Submit</button>
           {/* <Link to={`/edit/${this.props.inv.id}`} onClick={ (id) => this.props.handleEdit(id) }><button>Edit</button></Link> */}
        </div>)}
      </div>
    );
  }
}

export default Product;
