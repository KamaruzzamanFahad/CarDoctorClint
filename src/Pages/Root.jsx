import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Component/Navber';
import Footer from '../Component/Footer';

const Root = () => {
    return (
        <div>
            <div className='px-[6%]'>
                <Navber></Navber>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;