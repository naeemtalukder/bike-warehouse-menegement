import React from 'react';
import { useNavigate } from 'react-router-dom';


const Product = ({ product }) => {
    const { name, id, price, img, quantity, description, supplierName } = product;
    const navigate = useNavigate();
    const handleNavigateProduct = id => {
        navigate(`/products/updateProduct${id}`);
    }
    return (
        <div className='service'>
            <img
                className='w-100'
                src={img} alt="" />
            <h4>{name}</h4>
            <p>Description {description}</p>
            <h6>Supplier {supplierName}</h6>
            <p>Quantity {quantity}</p>
            <p>Price ${price}</p>
            <button onClick={() => handleNavigateProduct(id)} className='btn bg-color text-white'>Update</button>
            <button className='btn bg-color-red text-white mx-2'>Delete</button>
        </div>
    );
};

export default Product;