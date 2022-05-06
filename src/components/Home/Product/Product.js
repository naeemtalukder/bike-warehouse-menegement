import React from 'react';
import { useNavigate } from 'react-router-dom';


const Product = ({ product }) => {
    const { name, sell, month, revenue } = product;
    const navigate = useNavigate();
    const handleNavigateProduct = sell => {
        navigate(`/products/product${sell}`);
    }
    return (
        <div className='service'>
            <h2>{month}</h2>
            <h3 className='mt-1'>{name}</h3>
            <p>Price ${revenue}</p>
            <button onClick={() => handleNavigateProduct(sell)} className='btn bg-color text-white'>{name}</button>
        </div>
    );
};

export default Product;