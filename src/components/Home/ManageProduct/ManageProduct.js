import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../Hoock/useProducts';
import './ManageProduct.css';

const ManageProduct = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate();
    const handleNavigateProduct = id => {
        navigate(`/products/${id}`);
    }
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are You Sure');
        if (proceed) {
            const url = `https://agile-refuge-46641.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining);
                })
        }
    }
    return (
        <div className='container mb-5'>
            <h2 className='text-center my-4'>Manage Your Product ({products.length})</h2>
            <div className="manage-product">
                {
                    products.map(product => <div key={product._id}>
                        <img
                            className='w-100'
                            src={product.img} alt="" />
                        <h5>{product.name}</h5>
                        <p>Description: {product.description}</p>
                        <h6>Supplier: {product.supplierName}</h6>
                        <h6>Email: {product.email}</h6>
                        <p>Quantity {product.quantity}</p>
                        <p>Price ${product.price}</p>
                        <button onClick={() => handleNavigateProduct(product._id)} className='btn bg-color text-white'>Update</button>
                        <button onClick={() => handleDeleteProduct(product._id)} className='btn mx-2 bg-color-red text-white'>Delete</button>
                    </div>)
                }
            </div>
            <div className='text-center pt-3'>
                <Link to='/addProduct' className='bg-color btn text-white my-5 py-2 px-5'>Add Product</Link>
            </div>
        </div>
    );
};

export default ManageProduct;