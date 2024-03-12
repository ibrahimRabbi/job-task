import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id='about' className='lg:w-[90%] w-[92%]  mt-10 lg:mt-0 mx-auto'>

            <div className='lg:flex justify-center items-center'>
                <div className='lg:w-[80%] w-[100%]'>
                    <h1 className='text-4xl font-semibold text-green-900'>Track Your Order</h1>
                    <p className='text-lg mt-2 font-semibold text-gray-700 text-justify'>My Courier is Bangladeshs most trusted on-demand last mile logistics network offering tech-enabled one stop delivery solutions. Since its inception in 2014, our vision has been to become the operating system for e-commerce in Bangladesh, through a combination of world-class infrastructure logisctics.</p>
                    <div className='mt-5'>
                        <Link className='flex gap-2 items-center font-semibold bg-[#0AC041] lg:w-[20%] w-[40%] p-2 rounded-lg'>Start Now <BsArrowRight /></Link>
                    </div>
                </div>

                <div className='hidden lg:flex'>
                    <img loading='lazy' width={1000} src="https://i.ibb.co/zPvz1xj/Take-Away-pana.png" />
                </div>
            </div>

        </section>
    );
};

export default About;