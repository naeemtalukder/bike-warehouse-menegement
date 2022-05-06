import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Sheard/Loading/Loading';
import auth from '../../../Firebase/firebase.init';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault('');
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegester = event => {
        navigate('/regester');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }
    return (
        <div className='container w-50 mb-5 mx-auto' style={{ height: '520px' }}>
            <h3 className='text-center color my-4'>Please login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="dark" className='mb-3 mt-2 btn bg-color' type="submit">
                    Submit
                </Button>
            </Form>
            {errorElement}

            <p>New to user? <Link to='/regester' className='text-decoration-none text-pramiry pe-auto'
                onClick={navigateRegester}>Regester Now</Link></p>
            <p>Forget Password? <button className='btn btn-link text-pramiry pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <SocialLogin />
            <ToastContainer />
        </div >
    );
};

export default Login;