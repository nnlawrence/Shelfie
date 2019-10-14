import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Product extends Component {
  render(props) {
    const { name, price, image } = this.props.inv;
    console.log(this.props.inv, this.props);
    console.log(this.props);

    return (
      <div className="test">
        <img src={image} alt="product" />
        <p>{name}</p>
        <p>${price}</p>
        <button onClick={(id) => this.props.delete(this.props.inv.id)}>Delete</button>
        <Link to={`/edit/${this.props.inv.id}`} onClick={ (id) => this.props.handleEdit(id) }><button>Edit</button></Link>
      </div>
    );
  }
}

export default Product;
