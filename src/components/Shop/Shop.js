import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch(err => console.log(err))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product]
        console.log(newCart);
        setCart(newCart)
    }
    return (
        <div className="shopContainer">
            <div className="productsContainer">
                {products.map((product) => ( 
                    <Product key={product?.id} product={product} handleAddToCart={handleAddToCart} />
                ))}
            </div>
            <div className="cartContainer">
                <h3>Order Items</h3>
                <p>Selected Items: {cart.length} </p>
            </div>
        </div>
    );
};

export default Shop;