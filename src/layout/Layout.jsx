import React from 'react';
import Navber from '../home/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Layout;