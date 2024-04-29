import React from 'react';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../redux/cartSlice';

function Product({ title, image, price, imageWidth, imageHeight }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addtoCart({ title, image, price, quantity: 1 })); // Add quantity property with an initial value of 1
    };

    return (
        <div className="card border-primary mb-3 bg-slate-400" style={{ maxWidth: '18rem' }}>
            <div className="card-header">{title}</div>
            <div className="card-body">
                <img
                    src={image}
                    alt=""
                    className="card-img-top"
                    style={{ width: '100%', height: 'auto', maxHeight: '200px' }}
                />
                <p className="card-text text-black">Price: ${price}</p>
                <button className="btn btn-warning" onClick={handleAddToCart}>
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default Product;
