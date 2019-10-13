import React, { Component } from "react";

class Product extends Component {
  render(props) {
    const { name, price, image } = this.props.inv;
    console.log(this.props.inv, this.props);
    console.log(this.props)

    return (
      <div className="test">
        <img src={image} alt="product" />
        <p>{name}</p>
        <p>{price}</p>
        <button onClick={() => this.props.delete(this.props.inv.id)}>Delete</button>
      </div>
    );
  }
}

export default Product;
