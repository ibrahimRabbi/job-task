import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer items-center p-4 text-slate-600 bg-slate-100">
            <div className='w-[80%] mx-auto flex justify-between items-center p-4'>
                <div className="flex items-center gap-4  ">

                    <div className="">
                        <Link to='/' className=" font-semibold text-3xl text-slate-800"><span className='text-[#0CAC39]'>My </span> Courier</Link>
                    </div>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div className="flex text-2xl gap-4  ">
                    <BsFacebook className='text-sky-600' />
                    <BsInstagram className='text-pink-700' />
                    <BsTwitter className='text-sky-600'/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;