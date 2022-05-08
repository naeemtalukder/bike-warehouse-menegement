import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import './Header.css';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar className='bg-color' collapseOnSelect expand="lg" sticky="top" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Bike Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user &&
                                <>
                                    <Nav.Link as={Link} to="/addProduct">Add Product</Nav.Link>
                                    <Nav.Link as={Link} to="/manageProduct">Manage Product</Nav.Link>
                                    <Nav.Link as={Link} to="/myProduct">My Product</Nav.Link>
                                </>
                            }
                            {user ?
                                < button onClick={handleLogOut} className='btn blogs'>Logout</button>
                                :
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;