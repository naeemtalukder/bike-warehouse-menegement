import React from 'react';
import useProducts from '../../../Hoock/useProducts';
import Banner from '../Home/Banner/Banner';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <Banner></Banner>
            <section className='container my-5'>
                <h2 className='text-center color my-5'>Stock Bike</h2>
                <div className='container-products'>
                    {
                        products.slice(0, 3).map(product => (
                            <Product key={product._id} product={product}></Product>
                        ))
                    }
                </div>
            </section>
            <section className='container my-5'>
                <div className='text-center my-5'>
                    <h2 className='color my-4'>Get the ultimate bike store guide</h2>
                    <h5 className='color'>Streamline your customer service, optimize your inventory and take your bike store to <br />
                        the next level with Lightspeed.</h5>
                    <button className='btn bg-color text-white my-3 px-5 py-2'>Get To Guide</button>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12 text-center pt-5'>
                        <h2 className='color py-4'>Increase sales and keep <br /> customers coming back.</h2>
                        <h5>From a rewards program to easy-to-use marketing tools for <br /> SMS and email outreach, Lightspeed Loyalty helps you build a <br /> dedicated community of biking enthusiasts online and in store.</h5>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <img
                            className='w-100'
                            src={'https://assets.lightspeedhq.com/img/a0262a6d-verticals_retail_bike_halfwidth-5-e1621020275437.jpg'} alt="" />
                    </div>
                </div>
            </section>
            <section className='row mx-auto my-5'>
                <div className='col-lg-6 col-sm-12'>
                    <img
                        className='w-100'
                        src={'https://assets.lightspeedhq.com/img/4c5d5ed0-verticals_retail_bike_halfwidth-6-e1619025561837.jpg'} alt="" />
                </div>
                <div className='bg-color text-center col-lg-6 col-sm-12 text-white'>
                    <div className='pt-5 mt-5'>
                        <h3>“</h3>
                        <h6>Staff love Lightspeed because it’s really easy to use, management<br />
                            love it because reporting is easy and our mechanic loves it <br />
                            because it’s easy to manage work orders.</h6>
                        <br />
                        <h3>”</h3>
                        <h6>Eilis Keegan, Brompton Bicycle - London</h6>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Home;