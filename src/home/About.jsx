import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id='about' className='w-[90%] my-16 pb-10 mx-auto'>
            <h1 className='text-4xl font-semibold text-sky-900'>--About Us</h1>
            <div className='grid grid-cols-2 mt-9 items-center gap-4'>
                <div className='w-[80%]'>
                    <p className='text-xl font-semibold text-gray-500 text-justify'>eCourier is Bangladeshs most trusted on-demand last mile logistics network offering tech-enabled one stop delivery solutions. Since its inception in 2014, our vision has been to become the operating system for e-commerce in Bangladesh, through a combination of world-class infrastructure, logistics operations of the highest quality and cutting-edge technology capabilities.

                        We take care of order fulfillment, collection, transport, tracking and delivery of parcels. We are the first in Bangladesh to have created a unique network with home delivery and Store Pickup & Return services which enhances customer experience and rationalizes costs.</p>
                    <div className='mt-5'>
                        <Link className='flex gap-2 items-center font-bold text-amber-500'>READ MORE <BsArrowRight /></Link>
                    </div>
                </div>

                <div>
                    <img className='rounded-lg' src="https://i.ibb.co/SwqxFMm/employee.jpg" />
                </div>
           </div>
            
         </section>
    );
};

export default About;