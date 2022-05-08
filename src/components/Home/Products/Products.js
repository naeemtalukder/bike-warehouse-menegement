import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hoock/useProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useProducts();

    return (
        <div className='container my-5'>
            <h2 className='text-center color my-5'>Stock Bike</h2>
            <div className='container-products'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    >
                    </Product>)
                }
            </div>
            <div className='text-center pt-35'>
                <Link to='/addProduct' className='bg-color btn text-white my-5 py-2 px-5'>Add Product</Link>
            </div>
        </div>
    );
};

export default Products;