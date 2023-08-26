import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { BsSend } from 'react-icons/bs'
const Banner = () => {
    return (
        <section className="section bg-no-repeat bg-cover bg-center w-full h-[90vh]">
            <div className='w-[50%] pt-28 pl-24'>
                <h1 className='banner text-amber-700 '>
                    DELIVERING EMOTIONS WORLDWIDE AND ACROSS 64 DISTRICTS DOMESTICALLY
                </h1>

                <Link to='location' className='mt-3 border-none bg-amber-500 hover:bg-amber-600 b btn text-slate-800'>Lets Send Your Parcel <BsSend className='text-xl' /> </Link>
            </div>
        </section>
    );
};

export default Banner;