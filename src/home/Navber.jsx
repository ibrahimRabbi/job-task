import React, { useContext } from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs'
import { Context } from '../Authentication/AuthContext';


const Navber = () => {

    const { user, signout } = useContext(Context)

    return (
        <div className="navbar bg-amber-500 navbarr">
            <div className='w-[90%] mx-auto flex justify-between'>

                <div className="">
                    <Link to='/' className=" font-semibold text-2xl text-slate-800">My Courier</Link>
                </div>

                <ul className='flex gap-6 text-lg text-slate-700 font-semibold'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/location'>Get Started</Link></li>
                    <li><Link>About Us</Link></li>
                    <li><Link>Coverage Map</Link></li>
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
                                    <li><Link to='dashboard' className='bg-amber-500 text-gray-700'>DashBoard</Link></li>
                                    <li><button onClick={() => signout()} className='bg-amber-500 text-gray-700'>Logout</button></li>
                                </ul>
                            </> : <Link to='/signin' className='bg-amber-500 p-2 rounded-lg   font-semibold text-slate-700'>Sign In</Link>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;