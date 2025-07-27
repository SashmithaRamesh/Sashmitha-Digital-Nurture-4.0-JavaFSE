import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <div style={{ border: '1px solid #aaa', padding: '10px', margin: '10px' }}>
        <p><strong>Item Name:</strong> {this.props.itemname}</p>
        <p><strong>Price:</strong> ₹{this.props.price}</p>
      </div>
    );
  }
}

Cart.defaultProps = {
  itemname: "Unknown Item",
  price: 0
};

export default Cart;
