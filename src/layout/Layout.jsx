import React from 'react';
import Navber from '../home/Navber';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navber />
            <Outlet/>
        </div>
    );
};

export default Layout;