import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../Firebase/firebase.init';
import Loading from '../../Sheard/Loading/Loading';


const Regester = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    let errorElement;
    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');
    }
    if (user) {
        console.log('user', user);
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/');
    }
    return (
        <div className='container w-50 mx-auto' style={{ height: '530px' }}>
            <div className='regester-form'>
                <h3 className='text-center color my-4'>Please Regester</h3>

                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="name" name='name' placeholder="Type Your Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name='email' placeholder="Type Your Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Button variant="dark" className='mb-3 mt-2 w-100 btn bg-color' type="submit">
                        Regester
                    </Button>
                    {errorElement}
                </Form>

                <p className="mx-5">Already have an accound? <Link to='/login' className='text-decoration-none text-primary pe-auto'
                    onClick={navigateLogin}>Please Login</Link></p>
            </div>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Regester;