import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';


const MyProduct = () => {
    const [user] = useAuthState(auth);
    const [addProduct, setAddProduct] = useState([]);
    const navigate = useNavigate();
    const handleNavigateProduct = id => {
        navigate(`/products/${id}`);
    }
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are You Sure');
        if (proceed) {
            const url = `https://agile-refuge-46641.herokuapp.com/addProduct/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = addProduct.filter(product => product._id !== id)
                    setAddProduct(remaining);
                })
        }
    }

    useEffect(() => {
        const email = user?.email;

        const url = `https://agile-refuge-46641.herokuapp.com/addProduct?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAddProduct(data))

    }, [user])
    return (
        <div className='container mb-5'>
            <h2 className='text-center my-4'>My Product ({addProduct.length})</h2>
            <div className="row">
                {
                    addProduct.map(product => <div className='col-lg-4 col-sm-12' key={product._id}>
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

        </div>
    );
};

export default MyProduct;