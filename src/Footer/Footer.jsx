import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
const Footer = () => {
    return (
        <footer className="footer items-center p-4 text-slate-600 bg-slate-100">
            <div className='w-[80%] mx-auto flex justify-between items-center p-4'>
                <div className="flex items-center gap-4  ">
                    <h1 className='text-2xl font-semibold text-slate-700'>My Courier</h1>
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