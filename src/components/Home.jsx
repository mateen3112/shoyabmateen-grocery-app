import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import Cart from './Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch('../Products.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems ? cartItems.length : 0;

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: "url('https://c8.alamy.com/comp/F7CXR0/supermarket-vegetable-store-food-grocery-background-F7CXR0.jpg')", // Background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div
        className="d-flex justify-content-between px-4 bg-dark text-white align-items-center"
        style={{ marginTop: '20px' }}
      >
        <h2>GROCERY</h2>
        <h4 onClick={toggleCart}>
          Cart<small className="ms-2">{cartItemCount}</small>
        </h4>
      </div>

      <div className="row mt-5">
        <div className="col-md-8">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => (
              <div key={product.id} className="col">
                <Product
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  imageWidth="100px"
                  imageHeight="auto"
                />
              </div>
            ))}
          </div>
        </div>
        {showCart && (
          <div className="col-md-4">
            <Cart cartItems={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
