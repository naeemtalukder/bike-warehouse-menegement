import React from 'react';
import { useNavigate } from 'react-router-dom';


const Product = ({ product }) => {
    const { name, _id, price, img, quantity, description, supplierName } = product;
    const navigate = useNavigate();
    const handleNavigateProduct = id => {
        navigate(`/products/${id}`);
    }
    return (

        <div className='service'>
            <img
                className='w-100'
                src={img} alt="" />
            <h5>{name}</h5>
            <p>Description: {description}</p>
            <h6>Supplier: {supplierName}</h6>
            <p>Quantity {quantity}</p>
            <p>Price ${price}</p>
            <button onClick={() => handleNavigateProduct(_id)} className='btn bg-color text-white'>Update</button>
        </div>

    );
};

export default Product;