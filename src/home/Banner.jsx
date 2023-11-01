import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { BsSend } from 'react-icons/bs'
const Banner = () => {
    return (
        <section className="w-full bg-green-50">
            <div className='w-[90%] mx-auto flex justify-between items-center'>
                <div>
                    <h1 className='banner text-5xl text-zinc-900 font-extrabold text-center leading-tight'>
                        DELIVERING EMOTIONS <br /> <span className='text-[#20DD59]'>WORLDWIDE </span> AND <br />ACROSS <span className='text-[#20DD59]'>64 DISTRICTS</span>  <br /> DOMESTICALLY
                    </h1>
                    <div className='flex gap-5 mt-5 justify-center'>
                        <Link className='bg-amber-500 font-semibold px-7 py-2 rounded-lg'>Client</Link>
                        <Link className='bg-[#0AC041] font-semibold px-7 py-2 rounded-lg'>Suppliers</Link>
                    </div>
                </div>

                <div>
                    <img width={650} loading='lazy' src="https://i.ibb.co/r27hz9h/Mail-sent-bro-1.png" />
                </div>
            </div>
        </section>
    );
};

export default Banner;