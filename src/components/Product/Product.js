import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
  console.log(props);
  const {product,handleAddToCart} = props
  const {name,img,price,seller,ratings} = product 
    return (
      <div className="product">
        <img src={img} alt={name} />
        <div className="productInfo">
          <h4 className="productName">{name}</h4>
          <p>Price: ${price}</p>
          <p>Ratings: {ratings} stars </p>
          <p>Author: {seller} </p>
        </div>
        <button onClick={() => handleAddToCart(product)} className="addBtn">
          <p className='addBtnTxt'>Add to Cart</p>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    );
};

export default Product;