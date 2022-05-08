import React, { useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProducts from '../../../Hoock/useProducts';
import './UpdateProduct';

const UpdateProduct = () => {
    const { productId } = useParams();
    const [products, setProducts] = useProducts();

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='w-50 mx-auto'>
                <h2 className='text-center color pb-3'>Update Product </h2>
                <div>
                    <Card style={{ width: '35rem' }}>
                        <Card.Img variant="top" src={products?.img} />
                        <Card.Body>
                            <Card.Title>{products?.name}</Card.Title>
                            <Card.Text>
                                Descreption: {products?.description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>SupplierName: {products?.supplierName}</ListGroupItem>
                            <ListGroupItem>Price ${products?.price}</ListGroupItem>
                            <ListGroupItem>Quantity: {products?.quantity}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link className='color' href="#">Delivered</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;