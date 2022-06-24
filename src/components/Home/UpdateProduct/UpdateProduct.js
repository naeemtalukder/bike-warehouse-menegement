import React, { useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProducts from '../../../Hoock/useProducts';

const UpdateProduct = () => {
    const { productId } = useParams();
    const [products, setProducts] = useProducts();


    useEffect(() => {
        const url = `https://agile-refuge-46641.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [productId, setProducts])
    return (
        <div className='w-25 mx-auto' style={{ height: '850px' }}>
            <h2 className='text-center color pb-3'>Update Product </h2>
            <div>
                <Card className='w-100'>
                    <Card.Img variant="top" src={products.img} />
                    <Card.Body>
                        <Card.Title>{products.name}</Card.Title>
                        <Card.Text>
                            Descreption: {products.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Supplier Name: {products.supplierName}</ListGroupItem>
                        <ListGroupItem>Email: {products.email}</ListGroupItem>
                        <ListGroupItem>Price ${products.price}</ListGroupItem>
                        <ListGroupItem>Quantity: {products.quantity}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link className='btn bg-color text-white' href="#">Delivered</Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div className='text-center mb-5'>
                <h5 className='text-center mt-3'>Add New Quantity</h5>
                <form>
                    <input className='w-50 my-3' type="number" name="number" id="" />
                    <input type="submit" value="Add Quantity" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;