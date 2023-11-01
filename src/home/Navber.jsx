import React, { useContext } from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs'
import { Context } from '../Authentication/AuthContext';


const Navber = () => {

    const { user, signout } = useContext(Context)

    return (
        <div className="navbar bg-green-50">
            <div className='w-[90%] mx-auto flex justify-between'>

                <div className="">
                    <Link to='/' className=" font-semibold text-3xl text-slate-800"><span className='text-[#0CAC39]'>My </span> Courier</Link>
                </div>

                <ul className='flex gap-10 text-slate-700 font-semibold'>
                    <li><Link to='/'>Home</Link></li>
                    <li><a href='#location'>Get Started</a></li>
                    <li><a href='#about'>Become a Rider</a></li>
                    <li><Link>Contact Us</Link></li>
                </ul>

                <div className=" flex items-center gap-4 text-slate-700">
                    <Link className='text-lg font-semibold flex items-center gap-1'><BsTelephone /> +880196711517</Link>

                    <div className="dropdown dropdown-end">
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
            </div>
        </div>
    );
};

export default Navber;