import React, { useContext } from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs'
import { Context } from '../Authentication/AuthContext';


const Navber = () => {

    const { user, signout } = useContext(Context)

    return (
        <nav className="navbar bg-green-50">
            <div className='lg:w-[90%] w-[98%] lg:mx-auto flex justify-between'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><a href='#location'>Get Started</a></li>
                            <li><a href='#about'>Become a Rider</a></li>
                            <li><Link>Contact Us</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className=" font-semibold text lg:text-3xl text-2xl text-slate-800"><span className='text-[#0CAC39]'>My </span> Courier</Link>
                </div>






                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><a href='#location'>Get Started</a></li>
                        <li><a href='#about'>Become a Rider</a></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    <Link className='text-lg hidden font-semibold lg:flex items-center gap-1'><BsTelephone /> +880196711517</Link>
                    {
                        user ? <>
                            <div className='tooltip tooltip-bottom tooltip-warning z-10' data-tip={user?.displayName}>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 space-y-2 shadow-xl menu menu-sm dropdown-content bg-slate-100 rounded-box w-52">
                                <li><Link to='dashboard' className='bg-[#3AD766] text-gray-700'>DashBoard</Link></li>
                                <li><button onClick={() => signout()} className='bg-[#3AD766] text-gray-700'>Logout</button></li>
                            </ul>
                        </> : <Link to='/signin' className='bg-[#3AD766] p-2 flex items-center gap-1 rounded-lg text-sm font-semibold shadow-lg text-zinc-900'><FiUser /> Sign In</Link>
                    }
                </div>
            </div>
        </nav>

    );
};

export default Navber;