import React, { useEffect, useState } from 'react';
import useProducts from '../../../Hoock/useProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useProducts();

    return (
        <div className='container my-5'>
            <h2 className='text-center color my-5'>Stock Bike ({products.length})</h2>
            <div className='manage-product'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    >
                    </Product>)
                }
            </div>
        </div>
    );
};

export default Products;