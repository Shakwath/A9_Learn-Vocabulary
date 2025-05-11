import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Mainlayput = () => {
    return (
        <div className='mx-w-4xl mx-auto'>
            {/* Navbar */}
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-232px)] py-12'>
            <Outlet></Outlet>
            </div>
           
            {/* Footer */}
           <Footer></Footer>
        </div>
    );
};

export default Mainlayput;