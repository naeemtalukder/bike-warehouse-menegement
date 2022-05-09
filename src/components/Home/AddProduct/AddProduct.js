import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://agile-refuge-46641.herokuapp.comhttps://agile-refuge-46641.herokuapp.com//product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div className='w-50 mx-auto my-5' style={{ height: '520px' }}>
            <h2 className='text-center my-3'>Please Add Product</h2>
            <form className='d-flex flex-column my-2' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 40 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Supplier' {...register("supplierName")} />
                <input className='mb-2' placeholder='email' type="email" {...register("email")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo Url' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='bg-color text-white' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;