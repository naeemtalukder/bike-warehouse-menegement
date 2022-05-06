import React from 'react';

const UpdateProduct = (product) => {
    const { name, price, img, quantity, description, supplierName } = product;
    return (
        <div className='container'>
            <h2 className='text-center'>This is Update Product</h2>
            <div>
                <img
                    className='w-100'
                    src={img} alt="" />
                <h4>{name}</h4>
                <p>Description {description}</p>
                <h6>Supplier {supplierName}</h6>
                <p>Quantity {quantity}</p>
                <p>Price ${price}</p>
            </div>
        </div>
    );
};

export default UpdateProduct;