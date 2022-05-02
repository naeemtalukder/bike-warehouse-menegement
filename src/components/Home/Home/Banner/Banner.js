import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: '500px' }}
                        className="d-block w-100"
                        src={'https://assets.lightspeedhq.com/img/2020/02/35ea652d-verticals_retail_bike_hero-mobile.jpg'}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className='text-5xl color mb-3'>BikeActually</h2>
                        <h5 className='color my-3' >From online to brick-and-mortar, this bike shop now calls a cosy space along Raffles Link home.
                            The shop specialises in compact bikes (think lightweight, foldable ones).</h5>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '500px' }}
                        className="d-block w-100"
                        src={'	https://assets.lightspeedhq.com/img/2020/02/7c094a0a-verticals_retail_bike_halfwidth-1.png'}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 className='text-5xl mb-3'>Coast Cycles</h2>
                        <h5 className='color my-3' >Minimally decked out and flooded with natural light, Coast Cycles is located above the Coast and Company café,
                            accessible via a flight of stairs with a message that reads,</h5>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '500px' }}
                        className="d-block w-100"
                        src={'https://assets.lightspeedhq.com/img/52496ae0-t11745_retail-abm_module_bike_new.jpg'}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 className='color text-5xl mb-3'>My Bike Shop</h2>
                        <h5 className='my-3' >To facilitate city cycling, at My Bike Shop you'll find the widest range of foldable bikes in Singapore. </h5>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;