import React from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs'

const Navber = () => {
    return (
        <div className='navbarr'>
            <div className="navbar w-[90%] mx-auto">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link className='text-2xl text-sky-600 font-semibold'>Your Curier</Link>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className='text-xl font-semibold'>Home</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary className='text-xl font-semibold'>Services</summary>
                                <ul className="p-2">
                                    <li><a>###</a></li>
                                    <li><a>###</a></li>
                                    <li><Link>hello</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link className='text-xl font-semibold'>Coverage Map</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-7">
                    <Link className='text-lg font-semibold flex items-center gap-1'><BsTelephone/> +880196711517</Link>
                     <Link className='flex items-center gap-1 text-sky-600'>Login <FiUser className='text-2xl'/></Link>
                </div>
            </div>
        </div>
    );
};

export default Navber;