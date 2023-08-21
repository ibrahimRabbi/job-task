import React from 'react';
import Calculate from '../calculate/Calculate';
import { Outlet, useLocation } from 'react-router-dom';
import './layout.css'

const StepLayout = () => {
    const { state } = useLocation()
    
    return (
        <main className='layout'>
             <Outlet/>
            <Calculate dataObj={state} />
         </main>
    );
};

export default StepLayout;