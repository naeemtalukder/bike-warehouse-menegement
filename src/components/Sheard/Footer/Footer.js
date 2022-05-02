import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-color text-center text-white pt-4 pb-5' style={{ height: '40px' }}>
            <p><small>CopyRight &copy; {year} By Bike Warehouse</small></p>
        </footer>
    );
};

export default Footer;