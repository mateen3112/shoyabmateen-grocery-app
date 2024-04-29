import React, { useState } from 'react';

function Cart({ cartItems }) {
  // State to track quantity changes
  const [updatedCartItems, setUpdatedCartItems] = useState(cartItems);

  // Function to handle quantity increment
  const handleIncrement = (index) => {
    const newCartItems = [...updatedCartItems];
    newCartItems[index] = { ...newCartItems[index], quantity: newCartItems[index].quantity + 1 };
    setUpdatedCartItems(newCartItems);
  };

  // Function to handle quantity decrement
  const handleDecrement = (index) => {
    const newCartItems = [...updatedCartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index] = { ...newCartItems[index], quantity: newCartItems[index].quantity - 1 };
      setUpdatedCartItems(newCartItems);
    }
  };

  // Function to remove an item from the cart
  const handleRemove = (index) => {
    const newCartItems = [...updatedCartItems];
    newCartItems.splice(index, 1);
    setUpdatedCartItems(newCartItems);
  };

  // Calculate total price
  const totalPrice = updatedCartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h3 style={{ color: 'white' }}>Cart Items</h3> {/* Set color to dark green */}
      <ul className="list-group">
        {updatedCartItems.map((item, index) => (
          <li key={index} className="list-group-item">
            <div className="d-flex align-items-center">
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '50px', marginRight: '10px' }}
              />
              <span>{item.title}</span>
              <button
                className="btn btn-sm btn-secondary ms-auto"
                onClick={() => handleDecrement(index)}
              >
                -
              </button>
              <span className="ms-2">{item.quantity}</span>
              <button
                className="btn btn-sm btn-secondary ms-2"
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
              <span className="ms-4">Price: ${item.price * item.quantity}</span>
              <button
                className="btn btn-sm btn-danger ms-2"
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div
        className="mt-3"
        style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
      >
        Total Price: ${totalPrice}
      </div>
    </div>
  );
}

export default Cart;
