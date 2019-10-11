import React, { Component } from 'react'

class Product extends Component {
    render(props) { 
        console.log(this.props)

        return ( 
            <div>
                <img src={this.props.invImg} alt='product' />
                <p>{this.props.invName}</p>
                <p>{this.props.invPrice}</p>
            </div>
         );
    }
}
 
export default Product;
